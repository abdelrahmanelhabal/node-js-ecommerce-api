const mongoose  = require("mongoose");

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Brand required"],
        unique: [true,"Brand must be unique"],
        minlenght:[3,"Too short category name"],
        maxlenght:[32,"Too long category name"]
    },
    slug:{
        type:String,
        lowercase:true,
    },
    image:String,
},{timestamps:true})



module.exports = mongoose.model("Brand",brandSchema);   