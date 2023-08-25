import express from "express";
import { postProduct, getProduct } from "../controllers/product.js";

const router = express.Router();

router.post("/add", postProduct);
router.get("/all", getProduct);

export default router;
