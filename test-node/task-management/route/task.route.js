import express from "express";
import { createTaskPage,createTask, fetchTask, fetchTaskById, dashBoardPage } from "../controller/task.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/create-task",auth,createTaskPage);
router.post("/create-task",auth,createTask);
router.get("/all-task",auth,fetchTask);
router.get("/load-task/:priorityId",auth,fetchTaskById);
router.get("/dashboard",auth,dashBoardPage);
export default router;