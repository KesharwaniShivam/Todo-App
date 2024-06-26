import errorHandler from "../middlewares/error.js";
import { Task } from "../models/Task.js";

//new task

export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Task.create({
            title: title,
            description: description,
            user: req.user // because iske pehle isAuthenticated use ho rha hai , so waha se "req.user" se user mil jayega 
        })

        res.status(201).json({
            success: true,
            message: "Task Created Successfully"
        })
    } catch (error) {
        next(error);
    }
}

// my tasks

export const myTask = async (req, res, next) => {
    try {
        const userid = req.user._id;        // this will give user id

        const tasks = await Task.find({ user: userid });

        res.status(200).json({
            success: true,
            tasks
        })
    } catch (error) {
        next(error);
    }
}

// update task

export const updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id)

        // if(!task)
        //     return res.status(404).json({
        // success : false,
        // message: "invalid Id"
        // })

        if (!task) return next(new errorHandler("Invalid Id", 404));  // by this we can only change the error message to change the STATUS CODE we have to extend the "Error" class 


        task.isCompleted = !task.isCompleted;

        await task.save();

        res.status(200).json({
            success: true,
            message: "updated successfully"
        })

    } catch (error) {
        next(error);
    }
}

// delete task 

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id)

        // if(!task){
        //     res.status(404).json({
        //         success: false,
        //         message : "Invalid Id"
        //     })
        // }

        if (!task) return next(new errorHandler("Invalid Id", 404))
        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: "deleted successfullly"
        })
    } catch (error) {
        next(error);
    }
}
