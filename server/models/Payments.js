import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    required: true,
    unique: true,
  },
  payementDate: {
    type: Date,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
});

paymentSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitPayments",
  field: "paymentId",
  startAt: 1,
  incrementBy: 1,
});

const Payments = mongoose.model("DrizzfitPayments", paymentSchema);

export default Payments;
