import { User } from "../models/user.js";
import jwt from "jsonwebtoken"


export const isAuthenticated = async(req, res, next)=>{
    const {token} = req.cookies;
    

    if(!token)
        res.status(404).json({
            success: false,
            message : "Not Loged'in"
        });
        
    const decodedD = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decodedD._id);
    next();

}