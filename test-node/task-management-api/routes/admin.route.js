import express from "express";
import { signup, signIn } from "../controller/admin.controller.js";
const router = express.Router();
router.post("/sign-up",signup);
router.post("/sign-in",signIn);
export default router;