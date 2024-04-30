import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

    title : {
        type : String
    },
    description : {
        type : String ,
        require : true, 
    },
    isCompleted : {
        type : Boolean,
        default : false, 
    }, 
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require : true ,
    }

},{timestamps: true})

export const Task = mongoose.model("Task", taskSchema);