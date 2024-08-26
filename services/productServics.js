const slugify = require('slugify');
const productModel = require("../models/productModel");
const asyncHandler = require('express-async-handlr');
const ApiError = require("../utills/apiError");;

// @desc  get list of product
// @route get  /api/v1/product
// @access pubilc
exports.getProducts = asyncHandler( async (req,res)=>{
  const page = req.query.page || 1 ;
  const limit = req.query.limit || 3 ; 
  const skip = (page-1)*limit;
  const products = await productModel.find({}).limit(limit).skip(skip);
  res.status(200).json({result:products.length, page:page , data: products});
})

// @desc  get specific product by id 
// @route get  /api/v1/product/:id
// @access pubilc
exports.getProduct = asyncHandler(async (req,res,next) =>{
  const {id} = req.params ;
  const products = await productModel.findById(id);
  if(!products){
    return next(new ApiError(`No product for this id: ${id}`,404));
  }
  res.status(200).json({data:products});
})

// @desc  create product
// @route post  /api/v1/product
// @access private 
exports.createProduct = asyncHandler(async (req,res) =>{
  req.body.slug = slugify(req.body.name);
  
  const product = await productModel.create(req.body);
  res.status(201).json({data:product});
})

// @desc  update specific product by id 
// @route PUT  /api/v1/product/:id
// @access private
exports.updateProduct = asyncHandler(async (req,res,next)=>{
  req.body.slug = slugify(req.body.name);
  const {id} = req.params;
  const product = await productModel.findOneAndUpdate({_id:id},req.body,{new:true});
  if(!product){
    return next(ApiError(`No product for this id: ${id}`,404));
  }
  res.status(200).json({data:product});
})

// @desc  delete specific product by id 
// @route delete  /api/v1/product/:id
// @access private
exports.deleteProduct = asyncHandler(async (req,res,next)=>{
const {id} = req.params;
const product = await productModel.findByIdAndDelete(id);
if(!product){
  return next(ApiError(`No product for this id: ${id}`,404));
}
res.status(204).send();
})

