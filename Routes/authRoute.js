const express = require('express');
const {createUser,getUser,LoginUser} =require('../Controllers/userCtrl.js');
const router = express.Router();


router.post('/register', createUser);
router.get('/all',getUser);
router.post('/log',LoginUser);


module.exports = router;
