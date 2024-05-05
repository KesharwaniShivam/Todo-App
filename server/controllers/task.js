import { Task } from "../models/Task.js";

//new task

export const newTask = async(req, res)=>{
    const {title, description} = req.body;

    await Task.create({
        title : title,
        description : description,
        user : req.user // because iske pehle isAuthenticated use ho rha hai , so waha se "req.user" se user mil jayega 
    })

    res.status(201).json({
        success: true,
        message: "Task Created Successfully"
    })
}

// my tasks

export const myTask = async(req, res)=>{
    const userid = req.user._id;        // this will give user id

    const tasks = await Task.find({user : userid});

    res.status(200).json({
        success : true,
        tasks
    })
}

// update task

export const updateTask = async(req, res)=>{
    const {id} = req.params;

    const task = await Task.findById(id)

    if(!task)
        return res.status(404).json({
    success : false,
    message: "invalid Id"
    })

    task.isCompleted = !task.isCompleted;

    res.status(200).json({
        success : true,
        message : "updated successfully"
    })
     
}

// delete task 

export const deleteTask = async(req, res)=>{
    const task = await Task.findById(req.params.id)

    if(!task){
        res.status(404).json({
            success: false,
            message : "Invalid Id"
        })
    }

    await task.deleteOne();

    res.status(200).json({
        success: true,
        message: "deleted successfullly"
    })
}
