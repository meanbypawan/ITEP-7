import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/sign-in",signIn);

router.post("/sign-up",
    body("name", "name is required").notEmpty(),
    body("email", "invalid email id").isEmail(),
    body("contact", "only digits are allowed").isNumeric(),
    body("password", "password is required").notEmpty(),
    signUp);

export default router;