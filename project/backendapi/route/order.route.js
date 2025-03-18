import express from "express";
import { placeOrder } from "../controller/order.controller.js";
const router = express.Router();

router.post("/place-order",placeOrder);
export default router;