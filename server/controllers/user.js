import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const Register = async(req, res)=>{
    const {name , email, password} = req.body
    let user = User.findOne({email})

    if(user){
        return res.status(404).json({
            success : false,
            message : "User alreadu exist",
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    user = await User.create({name, email, password : hashedPassword}) // password aise hi nhi HASHED PASSWORD karenge 

    const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET_KEY )

    // If we want ki Register hote hi Login ho jaye 
    // to yahi se   "COOKIE" bhej denge 
    res.status(201).cookie("token", token, {
        httpOnly : true, 
        maxAge : 1000*60*20  // this is 20 mins 
    }).json({
        success : true, 
        message : "Registerd successfully", 
    })
}

export const login = async(req,res)=> {

}



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