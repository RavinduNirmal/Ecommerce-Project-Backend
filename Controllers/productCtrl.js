const Product = require("../Models/productModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

/*Add A Product */
const CreateProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

/*Get All  Products */
const FindProducts = asyncHandler(async (req, res) => {
  try {
    const allProduct = await Product.find({});
    res.send(allProduct);
  } catch (error) {
    throw new Error(error);
  }
});


/*Get A Product */
const GetAProduct = asyncHandler(async (req, res) => {
  console.log("sample1");
  const { id } = req.params;
  try {
    const findAProduct = await Product.findById(id);
    res.json(findAProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { CreateProduct, FindProducts, GetAProduct };
