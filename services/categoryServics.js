const CategoryModel = require("../models/categoryModels");
const factory = require("./handlersFactory");

// @desc  get list of categories
// @route get  /api/v1/categories
// @access pubilc
exports.getCategories = factory.getList(CategoryModel);
// @desc  get specific category by id
// @route get  /api/v1/categories/:id
// @access pubilc
exports.getCategory = factory.getOne(CategoryModel);

// @desc  create category
// @route post  /api/v1/categories
// @access private
exports.createCategory = factory.createOne(CategoryModel);

// @desc  update specific category by id
// @route PUT  /api/v1/categories/:id
// @access private
exports.updateCategory = factory.updateOne(CategoryModel);

// @desc  delete specific category by id
// @route delete  /api/v1/categories/:id
// @access private
exports.deleteCategory = factory.deleteOne(CategoryModel);
