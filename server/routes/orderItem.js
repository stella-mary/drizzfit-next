import express from "express";
import {
  postOrderItems,
  getAllOrderItems,
  getOrderItemsById,
} from "../controllers/orderitems.js";

const router = express.Router();

router.post("/add", postOrderItems);
router.get("/all", getAllOrderItems);
router.get("/single/:orderItemId", getOrderItemsById);

export default router;
