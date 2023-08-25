import express from "express";
import { postOrder, getOrder } from "../controllers/orders.js";

const router = express.Router();

router.post("/add", postOrder);
router.get("/all", getOrder);

export default router;
