const express = require("express");
const dbConnect = require("./Config/dbConnect.js");
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
dbConnect();
app.use('/', (req,res) => {
    res.send('Hello From Server Side');
});
app.listen(PORT ,() =>{
    console.log(`Server is running on PORT ${PORT}`)
});