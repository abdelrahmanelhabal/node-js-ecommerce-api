const brand = require("../models/brandsModel");
const factory = require("./handlersFactory");

// @desc  get list of Brand
// @route get  /api/v1/Brand
// @access pubilc
exports.getBrands = factory.getList(brand);

// @desc  get specific Brand by id
// @route get  /api/v1/Brands/:id
// @access pubilc
exports.getBrand = factory.getOne(brand);

// @desc  create Brand
// @route post  /api/v1/Brand
// @access private
exports.createBrand = factory.createOne(brand);

// @desc  update specific Brand by id
// @route PUT  /api/v1/Brand/:id
// @access private
exports.updateBrand = factory.updateOne(brand);

// @desc  delete specific Brand by id
// @route delete  /api/v1/Brand/:id
// @access private
exports.deleteBrand = factory.deleteOne(brand);
