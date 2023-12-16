const Product = require("../Models/productModel");
const asyncHandler = require("express-async-handler");

/*Add A Product */
const CreateProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

/*Get All Products */
const FindAProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findAProduct = await Product.findById(id);
    res.json(findAProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { CreateProduct, FindAProduct };
