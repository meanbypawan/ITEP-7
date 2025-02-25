import express from "express";
import { signup, signIn } from "../controller/admin.controller.js";
import { body } from "express-validator";
const router = express.Router();
router.post("/sign-up",
body("email","Invalid email id").isEmail(),
body("email","Email id is required").notEmpty(),
body("password","Password is required").notEmpty(),
body("password","Invalid password").isLength({min:6, max:10}),signup);

// http://localhost:3000/admin/sign-in
router.post("/sign-in",signIn);
export default router;