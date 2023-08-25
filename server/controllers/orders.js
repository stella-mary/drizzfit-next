import Orders from "../models/Orders.js";

export const postOrder = (req, res) => {
  const customerId = req.body.customerId;
  const orderDate = req.body.orderDate;
  const status = req.body.status;
  const billingAddress = req.body.billingAddress;

  const newOrder = new Orders({
    customerId,
    orderDate,
    status,
    billingAddress,
  });

  newOrder
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getOrder = (req, res) => {
  Orders.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getOrderById = (req, res) => {
  const orderId = req.params.orderId;
  Orders.findOne({ orderId: orderId })
    .then((order) => {
      if (order) {
        const orderDetails = {
          customerId: order.customerId,
          orderDate: order.orderDate,
          status: order.status,
          billingAddress: order.billingAddress,
        };
        res.json(orderDetails);
      } else {
        res.status(404).json("Order not found");
      }
    })
    .catch((err) => res.status(400).json("Error: ", err));
};
