const express = require("express");
const router = express.Router();
const { CreateProduct,GetAProduct,FindProducts,updateProduct } = require("../Controllers/productCtrl");

router.post("/create", CreateProduct);
router.get("/allproduct", FindProducts);
router.get("/:id",GetAProduct);
router.put("/:id",updateProduct);
module.exports = router;
