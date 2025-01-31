import express from "express";
import { createTaskPage,createTask, fetchTask, fetchTaskById } from "../controller/task.controller.js";

const router = express.Router();

router.get("/create-task",createTaskPage);
router.post("/create-task",createTask);
router.get("/all-task",fetchTask);
router.get("/load-task/:priorityId",fetchTaskById);
export default router;