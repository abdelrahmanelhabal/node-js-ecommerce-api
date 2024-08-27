const productModel = require("../models/productModel");
const factory = require("./handlersFactory");

// @desc  get list of product
// @route get  /api/v1/product
// @access pubilc
exports.getProducts = factory.getList(productModel);

// @desc  get specific product by id
// @route get  /api/v1/product/:id
// @access pubilc
exports.getProduct = factory.getOne(productModel);

// @desc  create product
// @route post  /api/v1/product
// @access private
exports.createProduct = factory.createOne(productModel);

// @desc  update specific product by id
// @route PUT  /api/v1/product/:id
// @access private
exports.updateProduct = factory.updateOne(productModel);

// @desc  delete specific product by id
// @route delete  /api/v1/product/:id
// @access private
exports.deleteProduct = factory.deleteOne(productModel);
