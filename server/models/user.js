import mongoose from "mongoose";
import { config } from "dotenv";

config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName : "Todoss",
}).then((c)=> console.log(`Datbase connected ${c.connection.host}`)
).catch((e)=> console.log(e));

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
        unique : true,
        select : false,    // select use kiye h so hum directly password ka accesss nhi le skte 
                          // access ke liye select("password") use karenge tabhi access milega 
    },

},{timestamps: true})

export const User = mongoose.model("User", userSchema)