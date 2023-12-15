const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../Config/jwtToken");

/* Register a User */
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
    console.log(email);
  } catch (error) {
    if (error.name === "MongoServerError" && error.code === 11000) {
      // Duplicate key error (unique constraint violation)
      return res.status(400).json({
        message: "User with this email or mobile already exists",
        success: false,
      });
    }

    // Handle other errors
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

/*Login An user*/
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists or not
  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credintials");
  }
});


/*Get all Users */
const getAllUser = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    throw new Error(error)
  }
});

/*Get A Single User */
const getAUser =asyncHandler(async(req,res) =>{
    const {id} = req.params;
    try{
          const getaUser = await User.findById(id)
               res.json({getaUser,})
          
    }catch(error){
         throw new Error(error)
    }
});

/*Delete A User */
const deleteUser =asyncHandler(async(req,res) =>{
  const {id} = req.params;
  try{
        const deleteaUser = await User.findByIdAndDelete(id)
             res.json({deleteaUser,})
        
  }catch(error){
       throw new Error(error)
  }
});
module.exports = { createUser, getAllUser, LoginUser, getAUser,deleteUser };
