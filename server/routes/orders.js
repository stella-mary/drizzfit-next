import express from "express";
import { postOrder, getOrder, updateOrder } from "../controllers/orders.js";

const router = express.Router();

router.post("/add", postOrder);
router.get("/all", getOrder);
router.put("/update/:orderId", updateOrder);

export default router;
