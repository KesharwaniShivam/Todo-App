import { User } from "../models/user.js";


export const getAllUsers = async (req, res)=>{
    const users = await User.find({});
   res.json({
       success : true,
       users : users,
   })
}

export const newUser = async (req, res)=>{
    const {name, email, password} = req.body
   await User.create({
    name, // Name : Name , email : email , password : password ; // if variables are same so we can write like this 
    email,
    password,
   })
   res.status(201).json({
    success: true,
    message : "registered successfully",
   })
 }

 export const findUser = async(req, res)=>{
  
    // console.log(req.query);
    const{id} = req.params
    console.log(id)
    const user = await User.findById(id)
 
    res.json({
        success : true,
        user,
    })
 }