const express = require('express');
const {createUser,getUser} =require('../Controllers/userCtrl.js');
const router = express.Router();


router.post('/register', createUser);
router.get('/all',getUser)

module.exports = router;
