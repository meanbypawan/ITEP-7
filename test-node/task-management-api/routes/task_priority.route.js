import express from "express";
import { createTaskPriority, fetch } from "../controller/task_priority.controller.js";
const router = express.Router();

router.post("/create",createTaskPriority);
router.get("/fetch",fetch);
export default router;