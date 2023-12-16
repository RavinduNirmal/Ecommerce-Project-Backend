const express = require("express");
const router = express.Router();
const { CreateProduct, FindAProduct } = require("../Controllers/productCtrl");

router.post("/", CreateProduct);
router.get("/:id", FindAProduct);

module.exports = router;
