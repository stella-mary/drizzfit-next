import Reviews from "../models/Reviews.js";

export const postReview = (req, res) => {
  const customerId = req.body.customerId;
  const rating = req.body.rating;
  const reviewDetails = req.body.reviewDetails;
  const reviewHeading = req.body.reviewHeading;
  const customerName = req.body.customerName;

  const newReview = new Reviews({
    customerId,
    rating,
    reviewDetails,
    reviewHeading,
    customerName,
  });

  newReview
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: ", err));
};

export const getAllReviews = (req, res) => {
  Reviews.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: ", err));
};
