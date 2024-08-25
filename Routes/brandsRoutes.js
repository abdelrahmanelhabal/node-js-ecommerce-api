const express = require("express");
const {
    getBrandValidator,
    CreateBrandValidator,
    UpdateBrandValidator,
    DeleteBrandValidator } = require("../middelwares/brandValidator");
const {
    getBrands,
    createBrand,
    getBrand,
    updateBrand,
    deleteBrand
} = require('../services/brandServics');

const router = express.Router();


    router.route('/')
       .get(getBrands)
       .post(CreateBrandValidator,createBrand);

      router.route('/:id')
       .get(getBrandValidator,getBrand)
       .put(UpdateBrandValidator,updateBrand)
       .delete(DeleteBrandValidator,deleteBrand);
module.exports = router;