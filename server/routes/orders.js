import express from "express";
import {
  postOrder,
  getOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.js";

const router = express.Router();

router.post("/add", postOrder);
router.get("/all", getOrder);
router.put("/update/:orderId", updateOrder);
router.delete("/clear/:orderId", deleteOrder);

export default router;
