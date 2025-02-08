import express from "express";
import { createTask, fetch, removeTask, updateTask } from "../controller/task.controller.js";

const router = express.Router();

router.post("/create",createTask);
router.get("/list",fetch);
router.delete("/:id",removeTask);
router.put("/:id",updateTask);
export default router;