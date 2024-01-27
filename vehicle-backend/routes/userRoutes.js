import express from "express";
import {loginUser, logout, registerUser} from "../controllers/userController.js"

const router = express.Router();

router.post("/register", registerUser);
router.post("/logout", logout);
router.post("/login", loginUser);


export default router;