const express =require('express');
const router = express.Router();
const {CreateProduct} = require("../Controllers/productCtrl");

router.post('/',CreateProduct);

module.exports = router;