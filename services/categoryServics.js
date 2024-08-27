const slugify = require("slugify");
const CategoryModel = require("../models/categoryModels");
const asyncHandler = require("express-async-handlr");
const ApiError = require("../utills/apiError");
const ApiFeatures = require("../utills/apifeatures");

// @desc  get list of categories
// @route get  /api/v1/categories
// @access pubilc
exports.getCategories = asyncHandler(async (req, res) => {
  const Features = new ApiFeatures(CategoryModel.find(), req.query);

  Features.sort().filter().limitFields().paginate();

  const { mongoosequery, paginationresult } = Features;

  const categories = await mongoosequery;
  res.status(200).json({
    result: categories.length,
    page: paginationresult.page,
    limit: paginationresult.limit,
    data: categories,
  });
});

// @desc  get specific category by id
// @route get  /api/v1/categories/:id
// @access pubilc
exports.getCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    return next(new ApiError(`No subCategory for this id: ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

// @desc  create category
// @route post  /api/v1/categories
// @access private
exports.createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

// @desc  update specific category by id
// @route PUT  /api/v1/categories/:id
// @access private
exports.updateCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!category) {
    return next(new ApiError(` No category for this id ${id}`, 404));
  }
  res.status(200).json({ data: category });
});

// @desc  delete specific category by id
// @route delete  /api/v1/categories/:id
// @access private
exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const category = await CategoryModel.findByIdAndDelete(id);
  if (!category) {
    return next(new ApiError(` No category for this id ${id}`, 404));
  }
  res.status(204).send();
});
