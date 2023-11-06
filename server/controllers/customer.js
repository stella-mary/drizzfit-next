import Customers from "../models/Customers.js";

export const postCustomer = (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const fullName = " ";
  const email = " ";
  const address = " ";
  const addressType = " ";
  const shippingMethod = " ";
  const pincode = " ";
  const city = " ";
  const state = " ";

  const newCustomer = new Customers({
    phoneNumber,
    fullName,
    email,
    address,
    addressType,
    shippingMethod,
    pincode,
    city,
    state,
  });

  newCustomer
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const updateCustomer = (req, res) => {
  const customerId = req.params.customerId;
  Customers.findOne({ customerId: customerId })
    .then((customer) => {
      customer.fullName = req.body.fullName;
      customer.email = req.body.email;
      customer.address = req.body.address;
      customer.addressType = req.body.addressType;
      customer.shippingMethod = req.body.shippingMethod;
      customer.pincode = req.body.pincode;
      customer.city = req.body.city;
      customer.state = req.body.state;
      customer
        .save()
        .then((data) => res.json("Customer Details Updated: ", data))
        .catch((err) => res.status(400).json("Error: ", err));
    })
    .catch((err) => res.status(400).json("Error: ", err));
};

export const getCustomer = (req, res) => {
  Customers.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getCustomerById = (req, res) => {
  const customerId = req.params.customerId;
  Customers.findOne({ customerId: customerId })
    .then((customer) => {
      if (customer) {
        const customerDetails = {
          email: customer.email,
          fullName: customer.fullName,
          phoneNumber: customer.phoneNumber,
          address: customer.address,
          addressType: customer.addressType,
          shippingMethod: customer.shippingMethod,
          pincode: customer.pincode,
          city: customer.city,
          state: customer.state,
        };
        res.json(customerDetails);
      } else {
        res.status(404).json("customer not found");
      }
    })
    .catch((err) => res.status(400).json("Error: ", err));
};
