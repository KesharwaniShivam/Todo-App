import express from "express"
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import { config } from "dotenv";

config()
const app = express();
// middleware
app.use(express.json()); // this has to be use first 
app.use(cookieParser)
app.use("/users" ,userRouter)


// const port = 3000;

app.get("/", (req, res)=>{
    res.send("hellooo")
})


app.listen(process.env.PORT, ()=>{
    console.log("app is listening at port :",process.env.PORT)
})