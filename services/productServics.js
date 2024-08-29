const product = require("../models/productModel");
const factory = require("./handlersFactory");

// @desc  get list of product
// @route get  /api/v1/product
// @access pubilc
exports.getProducts = factory.getList(product);

// @desc  get specific product by id
// @route get  /api/v1/product/:id
// @access pubilc
exports.getProduct = factory.getOne(product);

// @desc  create product
// @route post  /api/v1/product
// @access private
exports.createProduct = factory.createOne(product);

// @desc  update specific product by id
// @route PUT  /api/v1/product/:id
// @access private
exports.updateProduct = factory.updateOne(product);

// @desc  delete specific product by id
// @route delete  /api/v1/product/:id
// @access private
exports.deleteProduct = factory.deleteOne(product);
