const express = require("express");
const dbConnect = require("./Config/dbConnect.js");
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const authRouter=require('./Routes/authRoute.js');
const bodyParser = require("body-parser");
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user',authRouter)
app.listen(PORT ,() =>{
    console.log(`Server is running on PORT ${PORT}`)
});

// const express = require("express");
// const dbConnect = require("./Config/dbConnect.js");
// const app = express();
// const dotenv = require('dotenv').config();
// const PORT = process.env.PORT || 4000;
// const authRouter = require('./Routes/authRoute.js');
// dbConnect();
// // Use the built-in Express middleware for parsing request bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/user', authRouter);

// app.use((req, res, next) => {
//     console.log("Received request body at application level:", req.body);
//     next();
//   });

// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`);
// });