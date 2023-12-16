const express = require("express");
const router = express.Router();
const { CreateProduct,GetAProduct,FindProducts,updateProduct,deleteProduct } = require("../Controllers/productCtrl");
const {authMiddleware,isAdmin} = require("../Middlewares/authMiddleare");

router.post("/create",authMiddleware,isAdmin, CreateProduct);
router.get("/allproduct", FindProducts);
router.get("/:id",authMiddleware,isAdmin,GetAProduct);
router.put("/:id",authMiddleware,isAdmin,updateProduct);
router.delete("/:id",authMiddleware,isAdmin,deleteProduct);
module.exports = router;
