import express from "express"
import { User } from "./models/user.js";
import userRouter from "./routes/user.js"

const app = express();
// middleware
app.use(express.json());
app.use(userRouter)

const port = 3000;

app.get("/", (req, res)=>{
    res.send("hellooo")
})
app.get("/bevkoof", (req, res)=>{
    res.send("bevkoof")
})

app.listen(port, ()=>{
    console.log("app is listening at port :",port)
})