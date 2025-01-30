import express from "express";
import { createTaskPage,createTask } from "../controller/task.controller.js";

const router = express.Router();

router.get("/create-task",createTaskPage);
router.post("/create-task",createTask);
export default router;