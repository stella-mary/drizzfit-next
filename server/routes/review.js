import express from "express";
import { postReview, getAllReviews } from "../controllers/review.js";

const router = express.Router();

router.post("/add", postReview);
router.get("/all", getAllReviews);

export default router;
