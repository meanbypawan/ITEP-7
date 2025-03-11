import express from "express";
import { saveInBulk, getProducts } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",getProducts);
export default router;