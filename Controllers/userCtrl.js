const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");


/* Register a User */
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
    console.log(email);
  } catch (error) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      // Duplicate key error (unique constraint violation)
      return res.status(400).json({
        message: 'User with this email or mobile already exists',
        success: false,
      });
    }

    // Handle other errors
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
});

/*Get all Users */
const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

/*Login An user*/
const LoginUser = asyncHandler(async(req,res) =>{  
  const {email,password} = req.body;
   //check if user exists or not
   const findUser = await User.findOne({email});

   if(findUser && await findUser.isPasswordMatched(password)){
       res.json(findUser)
   }else{
    throw new Error('Invalid Credintials')
   }  

})

module.exports = { createUser,getUser,LoginUser };







































