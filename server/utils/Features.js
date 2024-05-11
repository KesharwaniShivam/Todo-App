import jwt from "jsonwebtoken"


export const sendCookie = (user, res, message, statusCode=200) =>{

    const token = jwt.sign({_id : user._id}, process.env.JWT_SECRET_KEY )

    // If we want ki Register hote hi Login ho jaye 
    // to yahi se   "COOKIE" bhej denge 

    res
    .status(statusCode)
    .cookie("token", token, {
        httpOnly : true, 
        maxAge : 1000*60*20,  // this is 20 mins 
        sameSite : process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure : process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
        success : true, 
        message : message, 
    })
}