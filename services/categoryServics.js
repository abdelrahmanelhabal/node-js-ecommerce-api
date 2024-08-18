const CategoryModel = require("../models/categoryModels")

exports.getCategories = (req,res)=>{
    const name = req.body.name;
    console.log(req.body);
const n = new  CategoryModel({name});
n.save().then((doc)=>{res.json(doc);}).
catch((err)=>{res.json(err);});}