import express from "express";
import { placeOrder, orderList } from "../controller/order.controller.js";
import { verify } from "../auth.js";
const router = express.Router();

router.post("/place-order",placeOrder);
router.post("/list",verify,orderList);
export default router;