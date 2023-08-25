import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Customers = mongoose.model("DrizzfitCustomers", customerSchema);

export default Customers;
