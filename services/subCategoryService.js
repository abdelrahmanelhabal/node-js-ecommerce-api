const slugify = require('slugify');
const SubCategoryModel = require("../models/subCategoryModels");
const asyncHandler = require('express-async-handlr');
const ApiError = require("../utills/apiError");


// @desc  create subCategory
// @route post  /api/v1/subCategories
// @access private 
exports.createSubCategory = asyncHandler(async (req,res)=>{
    const {name , Category} = req.body;
    const Subcategory = await SubCategoryModel.create({name,slug:slugify(name),Category});
    res.status(201).json({data:Subcategory});

});

// @desc  Get All Subcategories for Specific Category
// @route get  /api/v1/subcategories
// @access pubilc
exports.getSubCategories = asyncHandler(async (req,res)=>{
    const page = req.query.page * 1 || 1; 
    const limit = req.query.limit * 1 || 10 ; 
    const skip = (page-1)*limit;
    let filter = {} ;
    if(req.params.categoryId){
      filter =  {Category:req.params.categoryId};
    }
    
    const subCategories = await SubCategoryModel.find(filter).skip(skip).limit(limit);    // {} to get all categories
    res.status(200).json({result:subCategories.length , page:page , data:subCategories});    
})

// @desc  get specific subCategory by id 
// @route get  /api/v1/subcategories/:id
// @access pubilc
exports.getSubCategory = asyncHandler(async (req,res,next)=>{
const {id} = req.params ;
const subCategory = await SubCategoryModel.findById(id);
  if(!subCategory){
   return next(new ApiError(`No subCategory for this id: ${id}` , 404));
  }
     res.status(200).json({data:subCategory});
})


// @desc  update specific SubCategory by id 
// @route PUT  /api/v1/subCategories/:id
// @access private
exports.updateSubCategory = asyncHandler(async (req,res,next)=>{
    const {id} = req.params;
    const {name , Category} = req.body;

    
    const subCategory = await SubCategoryModel.findOneAndUpdate(
     {_id:id},
     {name, slug:slugify(name) , Category },
     {new:true});
    if(!subCategory){
     return next(new ApiError(` No SubCategory for this id ${id}` , 404));
    }
    res.status(200).json({data:subCategory});
 });
 
 
 // @desc  delete specific SubCategory by id 
 // @route delete  /api/v1/subCategories/:id
 // @access private
 exports.deleteSubCategory = asyncHandler(async (req,res,next)=>{
   const {id} = req.params;
 
   const subCategory = await SubCategoryModel.findByIdAndDelete(id);
   if(!subCategory){
     return next(new ApiError(` No subCategory for this id ${id}` , 404));
   }
   res.status(204).send();
 });

 