import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: String,
    required: true,
  },
});

productSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitProducts",
  field: "productId",
  startAt: 1,
  incrementBy: 1,
});

const Products = mongoose.model("DrizzfitProducts", productSchema);

export default Products;
