const SubCategory = require("../models/subCategoryModels");
const factory = require("./handlersFactory");

// @desc  Get All Subcategories for Specific Category
// @route get  /api/v1/subcategories
// @access pubilc
exports.getSubCategories = factory.getList(SubCategory);

// @desc  get specific subCategory by id
// @route get  /api/v1/subcategories/:id
// @access pubilc
exports.getSubCategory = factory.getOne(SubCategory);

// @desc  create subCategory
// @route post  /api/v1/subCategories
// @access private
exports.createSubCategory = factory.createOne(SubCategory);

// @desc  update specific SubCategory by id
// @route PUT  /api/v1/subCategories/:id
// @access private
exports.updateSubCategory = factory.updateOne(SubCategory);

// @desc  delete specific SubCategory by id
// @route delete  /api/v1/subCategories/:id
// @access private
exports.deleteSubCategory = factory.deleteOne(SubCategory);
