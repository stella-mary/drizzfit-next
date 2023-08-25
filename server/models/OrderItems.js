import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const orderItemsSchema = new mongoose.Schema({
  orderItemId: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  priceAtOrder: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
});

orderItemsSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitOrderItems",
  field: "orderItemId",
  startAt: 1,
  incrementBy: 1,
});

const OrderItems = mongoose.model("DrizzfitOrderItems", orderItemsSchema);

export default OrderItems;
