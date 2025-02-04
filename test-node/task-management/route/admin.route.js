import express from "express";
import { signIn, singInPage, signout } from "../controller/admin.controller.js";

const router = express.Router();

router.get("/sign-in",singInPage);
router.post("/sign-in",signIn);
router.post("/signout",signout);
export default router;