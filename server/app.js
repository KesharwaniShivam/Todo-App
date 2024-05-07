import express from "express"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";

config()
const app = express();
// middleware
app.use(express.json()); // this has to be use first 
app.use(cookieParser())
app.use("/users" ,userRouter)
app.use("/tasks" ,taskRouter)


// const port = 3000;

app.get("/", (req, res)=>{
    res.send("hellooo")
})

// error handler
// kisi route me last function me "next" pass kr diye to idher hi aa jayega 
// this has to be in last

//errorMiddleware
app.use(errorMiddleware)


app.listen(process.env.PORT, ()=>{
    console.log("app is listening at port :",process.env.PORT)
})