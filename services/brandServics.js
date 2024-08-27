const slugify = require("slugify");
const brandModel = require("../models/brandsModel");
const asyncHandler = require("express-async-handlr");
const ApiError = require("../utills/apiError");
const ApiFeatures = require("../utills/apifeatures");

// @desc  get list of Brand
// @route get  /api/v1/Brand
// @access pubilc
exports.getBrands = asyncHandler(async (req, res) => {
  const Features = new ApiFeatures(brandModel.find(), req.query);

  Features.sort().filter().limitFields().paginate();

  const { mongoosequery, paginationresult } = Features;

  const Brand = await mongoosequery;

  res.status(200).json({
    result: Brand.length,
    page: paginationresult.page,
    limit: paginationresult.limit,
    data: Brand,
  });
});

// @desc  get specific Brand by id
// @route get  /api/v1/Brands/:id
// @access pubilc
exports.getBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const Brand = await brandModel.findById(id);
  if (!Brand) {
    return next(new ApiError(`No Brand for this id: ${id}`, 404));
  }
  res.status(200).json({ data: Brand });
});

// @desc  create Brand
// @route post  /api/v1/Brand
// @access private
exports.createBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const Brand = await brandModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: Brand });
});

// @desc  update specific Brand by id
// @route PUT  /api/v1/Brand/:id
// @access private
exports.updateBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const Brand = await brandModel.findOneAndUpdate(
    { _id: id },
    { name, slug: slugify(name) },
    { new: true }
  );
  if (!Brand) {
    return next(new ApiError(` No Brand for this id ${id}`, 404));
  }
  res.status(200).json({ data: Brand });
});

// @desc  delete specific Brand by id
// @route delete  /api/v1/Brand/:id
// @access private
exports.deleteBrand = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const Brand = await brandModel.findByIdAndDelete(id);
  if (!Brand) {
    return next(new ApiError(` No Brand for this id ${id}`, 404));
  }
  res.status(204).send();
});
