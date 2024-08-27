const mongoose  = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
       type:String,
       require:true,
       trim:true,
       unique: [true,"product must be unique"],
       minlenght:[3,"Too short product name"],
       maxlenght:[70,"Too long product name"]
     },
    slug:{
        type:String,
        require:true,
        lowercase:true,
    },
    description:{
        type:String,
        require:[true,"product description is required"],
        minlenght:[3,"Too short product description"],
    },
    quantity:{
        type:Number,
        require:[true,"product quantity is required"],
    },
    sold:{
    type:Number,
    default:0,
    },
    price:{
    type:Number,
    require:[true,"product price is required"],
    trim:true,
    max:[20000000,"Too long product price"]
    },
    priceAfterDicount:{
        type:Number,   
    },
    colors:String,
    image:String,
    imagecover:{
        type:String,
        require:[true,"product image cover is required"], 
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"category",
        require:[true,"product must be belong to category"],
    },
    subCategorys:[{
        type:mongoose.Schema.ObjectId,
        ref:"Subcategory",
    }],
    brand:{
        type:mongoose.Schema.ObjectId,
        ref:"Brand",
    },
    ratingAverage:{
        type:Number,
        min:[1,'Rating must be  above or equal 1.0'],
        max:[5,'Rating must be  below or equal 5.0'],
    },
    ratingquantity:{
       type:Number,
       default:0,
    }
},{timestamps:true})



module.exports = mongoose.model("product",productSchema);   