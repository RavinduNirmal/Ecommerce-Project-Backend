const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");

/*Register an User */
// const createUser = asyncHandler(async (req, res) => {
//     console.log("Received request body:", req.body);
//     console.log("Type of req.body:", typeof req.body);
//     const { firstname, lastname, email, mobile, password } = req.body;
  
//     try {
//       const findUser = await User.findOne({ email: email });
  
       
//       if (!findUser) {
//         const newUser = await User.create({
//           firstname,
//           lastname,
//           email,
//           mobile,
//           password,
//         });
  
//         res.status(201).json(newUser);
//       } else {
//         res.status(400).json({
//           message: "User already exists",
//           success: false,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error.message);
//     }
//   }
// );

// const createUser = asyncHandler(async(req, res) => {
//   const email = req.body.email;
//   const findUser = await User.findOne({ email: email });
//   if (!findUser) {
//     //Create a new user
//     const newUser = User.create(req.body);
//     res.json(newUser);
//   } else {
//     // User Already exists
//     // res.json({
//     //   message: "User Already exists",
//     //   sucess: false,
//     // });
//     throw new Error('User Already');
//   }
// }); 

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
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

module.exports = { createUser, getUser };







































