1. If  we want ki user Register hote h login ho jaye to 
status ke sath hi COOKIE send kr denge 

2. we want to COOKIE in /login route also - so to not write or repeat same code 
   write the COOKIE code in "UTILITY FOLDER" so that we can use it anywhere 

//REGISTER/01 : 

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