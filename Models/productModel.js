const mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },   
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    brand:{
        type:String,
        enum:['Apple','Samsung','Lenovo'],
    },
    quantity:{
        type:Number,
        required:true,
    },
    sold:{
        type:Number,
        default:0,
    },
});

module.exports = mongoose.model("Product",productSchema);