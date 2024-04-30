import express from "express"
import { User } from "../models/user.js";
import { login,Register, findUser, } from "../controllers/user.js";

const router = express.Router();

router.post("/new", Register)

router.post("/login", login)


// router.get("/users/all",getAllUsers)

// router.post("/users/new",newUser)

router.get("/userid/:id",findUser )

// router.put("/userid/:id",updateUser )

// router.delete("/userid/:id",deleteUser )

// router.route("/userid/:id").get(findUser).put(updateUser).delete(deleteUser) we can write like this  "IF ROUTE IS SAME"

export default router;