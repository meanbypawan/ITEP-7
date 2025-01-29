import express from "express";
import { signIn, singInPage } from "../controller/admin.controller.js";

const router = express.Router();

router.get("/sign-in",singInPage);
router.post("/sign-in",signIn);
export default router;