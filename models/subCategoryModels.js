const mongoose = require('mongoose');

const subCategoryModel = new mongoose.Schema({
   name: { 
    type: String,
    trim:true,
    unique: [true,"SubCategory must be unique"],
    minlength: [2, "Too short category name"], 
    maxlength: [32, "Too long category name"]  
    },
    slug:{
    type:String,
    lowercase:true,
    },
    Category:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:[true,"SubCategory must be belong to parent category"]
    }
},{timestamps:true});

module.exports = mongoose.model("Subcategory",subCategoryModel);