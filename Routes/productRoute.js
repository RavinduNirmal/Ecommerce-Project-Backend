const express = require("express");
const router = express.Router();
const { CreateProduct,GetAProduct,FindProducts } = require("../Controllers/productCtrl");

router.post("/create", CreateProduct);
router.get("/allproduct", FindProducts);
router.get("/:id",GetAProduct)
module.exports = router;