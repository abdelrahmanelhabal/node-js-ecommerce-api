const express = require("express");
const {
    getProductValidator,
    CreateProductValidator,
    UpdateProductValidator,
    DeleteProductValidator } = require("../middelwares/productsValidator");
const {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../services/productServics');

const router = express.Router();


    router.route('/')
       .get(getProducts)
       .post(CreateProductValidator,createProduct);

      router.route('/:id')
       .get(getProductValidator,getProduct)
       .put(UpdateProductValidator,updateProduct)
       .delete(DeleteProductValidator,deleteProduct);
module.exports = router;