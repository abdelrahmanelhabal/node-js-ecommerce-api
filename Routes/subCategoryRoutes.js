const express = require("express");

const {createSubCategory,getSubCategories,getSubCategory} = require("../services/subCategoryService");
const {CreateSubCategoryValidator,getSubCategoryValidator} = require("../middelwares/subCategoryValidator");
const router = express.Router();

router.route("/")
.post(CreateSubCategoryValidator,createSubCategory).
get(getSubCategories);

router.route('/:id').get(getSubCategoryValidator,getSubCategory);


module.exports = router;