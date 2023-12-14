const User = require("../Models/userModel");

/*Register an User */
const createUser = async (req, res) => {
  console.log("Received request body:", req.body);
  console.log("Type of req.body:", typeof req.body);
  const { firstname, lastname, email, mobile, password } = req.body;

  try {
    const findUser = await User.findOne({ email: email });

     
    if (!findUser) {
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        mobile,
        password,
      });

      res.status(201).json(newUser);
    } else {
      res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const createUser = async (req, res) => {
//   const email = req.body.email;
//   const findUser = await User.findOne({ email: email });
//   if (!findUser) {
//     //Create a new user
//     const newUser = User.create(req.body);
//     res.json(newUser);
//   } else {
//     //User Already exists
//     res.json({
//       message: "User Already exists",
//       sucess: false,
//     });
//   }
// };

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







































// const createUser = async (req, res) => {
//     const { firstname,lastname, email, mobile,password } = req.body;

//     try {
//       const user = new User({ firstname,lastname, email, mobile,password });
//       await user.save();
//       res.send(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error);
//     }
//   };
