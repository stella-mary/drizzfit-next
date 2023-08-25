import express from "express";
import {
  postCustomer,
  getCustomer,
  getCustomerById,
} from "../controllers/customer.js";

const router = express.Router();

router.post("/add", postCustomer);
router.get("/all", getCustomer);
router.get("/single/:customerId", getCustomerById);

export default router;
