import express from "express";
import { saveInBulk, getProducts, getProductById } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",getProducts);
router.get("/:id",getProductById);
export default router;