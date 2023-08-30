import Orders from "../models/Orders.js";
import OrderItems from "../models/OrderItems.js";

export const postOrder = (req, res) => {
  const orderDate = req.body.orderDate;
  const status = req.body.status;

  const newOrder = new Orders({
    orderDate,
    status,
  });

  newOrder
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const updateOrder = (req, res) => {
  const orderId = req.params.orderId;
  Orders.findOne({ orderId: orderId })
    .then((order) => {
      order.billingAddress = req.body.billingAddress;
      order.customerId = req.body.customerId;
      order.address = req.body.address;
      order
        .save()
        .then((data) => res.json("Order Updated: ", data))
        .catch((err) => res.status(400).json("Error: ", err));
    })
    .catch((err) => res.status(400).json("Error: ", err));
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

export const deleteOrder = (req, res) => {
  const orderId = req.params.orderId;
  Promise.all([
    Orders.findOneAndDelete({ orderId }),
    OrderItems.findOneAndDelete({ orderId }),
  ])
    .then(([deletedOrder]) => {
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order Not found" });
      }
      return res.status(200).json({ message: "Event deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).json({ error: "Failed to delete event" });
    });
};
