const brandModel = require("../models/brandsModel");
const factory = require("./handlersFactory");

// @desc  get list of Brand
// @route get  /api/v1/Brand
// @access pubilc
exports.getBrands = factory.getList(brandModel);

// @desc  get specific Brand by id
// @route get  /api/v1/Brands/:id
// @access pubilc
exports.getBrand = factory.getOne(brandModel);

// @desc  create Brand
// @route post  /api/v1/Brand
// @access private
exports.createBrand = factory.createOne(brandModel);

// @desc  update specific Brand by id
// @route PUT  /api/v1/Brand/:id
// @access private
exports.updateBrand = factory.updateOne(brandModel);

// @desc  delete specific Brand by id
// @route delete  /api/v1/Brand/:id
// @access private
exports.deleteBrand = factory.deleteOne(brandModel);
