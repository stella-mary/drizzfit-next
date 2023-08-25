import OrderItems from "../models/OrderItems.js";

export const postOrderItems = (req, res) => {
  const quantity = req.body.quantity;
  const priceAtOrder = req.body.priceAtOrder;
  const orderId = req.body.orderId;
  const productId = req.body.productId;

  const newOrderItem = new OrderItems({
    quantity,
    priceAtOrder,
    orderId,
    productId,
  });

  newOrderItem
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: ", err));
};

export const getAllOrderItems = (req, res) => {
  OrderItems.find()
    .then((orderItems) => res.json(orderItems))
    .catch((err) => res.status(400).json("Error: ", err));
};

export const getOrderItemsById = (req, res) => {
  const orderItemsId = req.params.orderItemsId;
  OrderItems.findOne({ orderItemsId: orderItemsId })
    .then((orderItem) => {
      if (orderItem) {
        const orderItemDetails = {
          quantity: orderItem.quantity,
          priceAtOrder: orderItem.priceAtOrder,
          orderId: orderItem.orderId,
          productId: orderItem.productId,
        };
        res.json(orderItemDetails);
      } else {
        res.status(404).json("Order not found");
      }
    })
    .catch((err) => res.status(400).json("Error: ", err));
};
