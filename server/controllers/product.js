import Products from "../models/Products.js";

export const postProduct = (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const stockQuantity = req.body.stockQuantity;

  const newProduct = new Products({
    name,
    description,
    price,
    stockQuantity,
  });

  newProduct
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getProduct = (req, res) => {
  Products.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: ", err));
};
