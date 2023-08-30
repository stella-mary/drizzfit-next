import Payments from "../models/Payments.js";

export const postPayment = (req, res) => {
  const orderId = req.body.orderId;
  const payementDate = req.body.payementDate;
  const amount = req.body.amount;
  const paymentMethod = req.body.payementDate;
  const paymentStatus = req.body.paymentStatus;

  const newPayment = new Payments({
    orderId,
    payementDate,
    amount,
    paymentMethod,
    paymentStatus,
  });

  newPayment
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: ", err));
};

export const getAllPayments = (req, res) => {
  Payments.find()
    .then((payments) => res.json(payments))
    .catch((err) => res.status(400).json("Error: ", err));
};
