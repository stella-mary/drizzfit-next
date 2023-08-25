import Customers from "../models/Customers.js";

export const postCustomer = (req, res) => {
  const customerId = req.body.customerId;
  const email = req.body.email;
  // const password = req.body.password;
  const firstName = req.body.firstName;
  const secondName = req.body.secondName;
  const address = req.body.address;
  const phoneNumber = req.body.phoneNumber;

  const newCustomer = new Customers({
    customerId,
    email,
    firstName,
    secondName,
    address,
    phoneNumber,
  });

  newCustomer
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
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
          firstName: customer.firstName,
          secondName: customer.secondName,
          phoneNumber: customer.phoneNumber,
          address: customer.address,
        };
        res.json(customerDetails);
      } else {
        res.status(404).json("customer not found");
      }
    })
    .catch((err) => res.status(400).json("Error: ", err));
};
