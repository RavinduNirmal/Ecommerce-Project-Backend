const Product = require("../Models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const mongoose = require("mongoose");

/*Add A Product */
const CreateProduct = asyncHandler(async (req, res) => {
  try {
    const product_title = req.body.title;
    if (product_title) {
      req.body.slug = slugify(product_title);
    }

    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.slug === 1
    ) {
      // Duplicate key error (unique constraint violation)
      const duplicateSlug = error.keyValue.slug;
      res.status(400).json({
        status: "fail",
        message: `The slug "${duplicateSlug}" based on the product title is already taken`,
      });
    } else {
      // Handle other errors
      throw new Error(error);
    }
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
