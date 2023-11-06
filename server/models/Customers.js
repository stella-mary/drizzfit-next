import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const customerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
  },
  fullName: {
    type: String,
    // required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  addressType: {
    type: String,
    default: "Home",
  },
  shippingMethod: {
    type: String,
  },
  pincode: {
    type: String,
  },
  city: {
    type: String,
  },
  State: {
    type: String,
  },
});

customerSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitCustomers",
  field: "customerId",
  startAt: 1,
  incrementBy: 1,
});

const Customers = mongoose.model("DrizzfitCustomers", customerSchema);

export default Customers;
