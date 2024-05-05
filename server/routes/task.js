import express from "express"
import { deleteTask, myTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const taskRouter = express.Router();

taskRouter.post("/new",isAuthenticated, newTask)

taskRouter.get("/mytask",isAuthenticated, myTask)

//dynamic route
taskRouter.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask)    

export default taskRouter;