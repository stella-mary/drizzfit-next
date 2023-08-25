import express from "express";
import { postPayment, getAllPayments } from "../controllers/payments.js";

const router = express.Router();

router.post("/add", postPayment);
router.get("/all", getAllPayments);

export default router;
