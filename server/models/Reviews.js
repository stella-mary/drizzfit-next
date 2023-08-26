import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const reviewSchema = new mongoose.Schema({
  reviewId: {
    type: String,
    required: true,
    unique: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviewHeading: {
    type: String,
    required: true,
  },
  reviewDetails: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
});

reviewSchema.plugin(autoIncrement.plugin, {
  model: "DrizzfitReviews",
  field: "reviewId",
  startAt: 1,
  incrementBy: 1,
});

const Reviews = mongoose.model("DrizzfitReviews", reviewSchema);

export default Reviews;
