const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // Remove "Bearer " from the token string
    token = req.headers.authorization.split(' ')[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SERCRET);
          const user = await User.findById(decoded?.id);
          req.user = user;
          next();
      }
    } catch (error) {
      throw new Error('Not Authorized, token expired or invalid. Please Login Again');
    }
  } else {
    throw new Error('There is no token attached to the header');
  }
});

const isAdmin = asyncHandler(async(req,res)=>{
      const {email} = req.user;
      const isAdminUser= await User.findOne({email});
      if(isAdminUser.role !=="admin"){
            throw new Error('You are not an admin')
      }
      else{
        next();
      }
})
module.exports = { authMiddleware, isAdmin};




















// const User = require('../Models/userModel');
// const jwt = require('jsonwebtoken');
// const asyncHandler = require("express-async-handler");

// const authMiddleware = asyncHandler(async(req,res,next) =>{
//     let token;
//     if(!req?.headers?.authorization?.startsWith('Bearer')){
//         token = req.headers.authorization.split(' ')[1];
//         try{
//             if(!token){
//                 const decoded = jwt.verify(token,process.env.JWT_SERCRET);
//                 console.log(decoded);
//             }
//         }catch(error){
//             throw new Error('Not Authorized token expired, Please Login Again');
//         }
//     }else{
//         throw new Error('There is no token attached to header');
//     }
// });

// module.exports = {authMiddleware};
