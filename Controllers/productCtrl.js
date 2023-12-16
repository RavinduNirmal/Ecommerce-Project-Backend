const Product = require("../Models/productModel");
const asyncHandler = require("express-async-handler");

const CreateProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct,);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { CreateProduct };
