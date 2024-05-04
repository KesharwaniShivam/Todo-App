import express from "express"
import { User } from "../models/user.js";
import { login,Register, findUser, getMyDetail, logout, } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", Register)

router.post("/login", login)

router.get("/me",isAuthenticated, getMyDetail)

router.get("/logout", logout)

// router.get("/users/all",getAllUsers)

// router.post("/users/new",newUser)

router.get("/userid/:id",findUser )

// router.put("/userid/:id",updateUser )

// router.delete("/userid/:id",deleteUser )

// router.route("/userid/:id").get(findUser).put(updateUser).delete(deleteUser) we can write like this  "IF ROUTE IS SAME"

export default router;