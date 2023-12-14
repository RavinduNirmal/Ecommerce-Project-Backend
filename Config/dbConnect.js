const { default: mongoose} = require("mongoose");

const dbConnect = () => {
    try{
        const conn = mongoose.connect('mongodb+srv://ravindunirmal099:ecommerceSample@ecommerce-project.cpfpml5.mongodb.net/?retryWrites=true&w=majority')
        console.log("Database Connceted Successfully");
    }
    catch(error){
        console.log("Database Error");
    }
}

module.exports = dbConnect;