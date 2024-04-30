import mongoose from "mongoose";
import { config } from "dotenv";

config();

mongoose.connect(process.env.MONGODB_URI, {
    dbName : "Todoss",
}).then(()=> console.log("Datbase connected")
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
        select : false,
    },

},{timestamps: true})

export const User = mongoose.model("User", userSchema)