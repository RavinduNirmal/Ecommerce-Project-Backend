const express = require('express');
const {createUser,getAllUser,LoginUser,getAUser,updateUser,deleteUser} =require('../Controllers/userCtrl.js');
const router = express.Router();


router.post('/register', createUser);
router.get('/all',getAllUser);
router.post('/log',LoginUser);
router.get('/:id',getAUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports = router;
