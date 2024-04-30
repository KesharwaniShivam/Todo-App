import express from "express"
import userRouter from "./routes/user.js"

const app = express();
// middleware
app.use(express.json()); // this has to be use first 
app.use("/users" ,userRouter)

const port = 3000;

app.get("/", (req, res)=>{
    res.send("hellooo")
})


app.listen(port, ()=>{
    console.log("app is listening at port :",port)
})