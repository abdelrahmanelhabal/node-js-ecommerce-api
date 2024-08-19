const mongoose = require('mongoose');

// 1-create schema 
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Category required"],
        unique: [true,"Category must be unique"],
        minlenght:[3,"Too short category name"],
        maxlenght:[32,"Too long category name"]
    },
    // A and b => shopping.com/a-and-b; 
    slug:{
        type:String,
        lowercase:true,
    },
    image:String,
},{timestamps:true});

// 2 create  model 
const CategoryModel = mongoose.model("category",categorySchema);

module.exports = CategoryModel;