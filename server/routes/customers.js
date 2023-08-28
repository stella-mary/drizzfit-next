import express from "express";
import {
  postCustomer,
  getCustomer,
  getCustomerById,
  updateCustomer,
} from "../controllers/customer.js";

const router = express.Router();

router.post("/add", postCustomer);
router.get("/all", getCustomer);
router.get("/single/:customerId", getCustomerById);
router.put("/update/:customerId", updateCustomer);

export default router;
