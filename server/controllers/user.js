import { User } from "../models/user.js";
import bcrypt from "bcrypt"

import { sendCookie } from "../utils/Features.js";



// Login 

export const login = async(req,res,next)=> {

   const { email, password} = req.body;

   const user = await User.findOne({email}).select("+password");  // +password means sbhi data mile + password bhi mile

   if(!user)
    return res.status(404).json({
        success: false,
        message: "Invalid Email or Password", 
    }) ;
   
    const Match = await bcrypt.compare(password, user.password); // comparing entered vs stored password
  // comparing entered vs stored password

   if(!Match)
    return res.status(404).json({
        success: false,
        message: "Invalid email or password"
    });
   

   sendCookie(user, res, `welcome ${user.name}`, 200)

}

// Register 

export const Register = async(req, res)=>{
    const {name , email, password} = req.body
    let user = await User.findOne({email})

    if(user){
        return res.status(404).json({
            success : false,
            message : "User already exist",
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    user = await User.create({name, email, password : hashedPassword}) // password aise hi nhi HASHED PASSWORD karenge 

    sendCookie(user, res, "Registered Successfully", 201);

    // const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET_KEY )
   // aage ka code dekhne ke README.MD PE /REGISTER/01 PE JAYE 
}

// Get my detail

export const getMyDetail = async(req, res)=>{
   

    res.status(200).json({
        success: true,
        user : req.user
    })
}

// Logout
// isme token empty krke , turant expire kr denge 

export const logout = (req, res)=>{

    res.status(200).cookie("token", " ", {expires : new Date(Date.now())}).json({
        success : true,
    })

}

// find user
 export const findUser = async(req, res)=>{
  
    // console.log(req.query);
    const{id} = req.params
    // console.log(id)
    const user = await User.findById(id)
 
    res.json({
        success : true,
        user,
    })
 }

// export const getAllUsers = async (req, res)=>{
//     const users = await User.find({});
//    res.json({
//        success : true,
//        users : users,
//    })
// }

// export const newUser = async (req, res)=>{
//     const {name, email, password} = req.body
//    await User.create({
//     name, // Name : Name , email : email , password : password ; // if variables are same so we can write like this 
//     email,
//     password,
//    })
//    res.status(201).json({
//     success: true,
//     message : "registered successfully",
//    })
//  }

//  export const updateUser = async(req, res)=>{
  
//     // console.log(req.query);
//     const{id} = req.params
//     // console.log(id)
//     const user = await User.findById(id)
 
//     res.json({
//         success : true,
//         message : "updated",
//     })
//  }

//  export const deleteUser = async(req, res)=>{
  
//     // console.log(req.query);
//     const{id} = req.params
//     // console.log(id)
//     const user = await User.findById(id)
//     await user.remove()
 
//     res.json({
//         success : true,
//         message : "Deleted",
//     })
//  }