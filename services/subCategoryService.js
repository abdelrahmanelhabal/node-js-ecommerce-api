const SubCategoryModel = require("../models/subCategoryModels");
const factory = require("./handlersFactory");

// @desc  Get All Subcategories for Specific Category
// @route get  /api/v1/subcategories
// @access pubilc
exports.getSubCategories = factory.getList(SubCategoryModel);

// @desc  get specific subCategory by id
// @route get  /api/v1/subcategories/:id
// @access pubilc
exports.getSubCategory = factory.getOne(SubCategoryModel);

// @desc  create subCategory
// @route post  /api/v1/subCategories
// @access private
exports.createSubCategory = factory.createOne(SubCategoryModel);

// @desc  update specific SubCategory by id
// @route PUT  /api/v1/subCategories/:id
// @access private
exports.updateSubCategory = factory.updateOne(SubCategoryModel);

// @desc  delete specific SubCategory by id
// @route delete  /api/v1/subCategories/:id
// @access private
exports.deleteSubCategory = factory.deleteOne(SubCategoryModel);
