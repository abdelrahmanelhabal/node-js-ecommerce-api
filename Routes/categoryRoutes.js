const express = require("express");
const {
    getCategoryValidator,
    CreateCategoryValidator,
    UpdateCategoryValidator,
    DeleteCategoryValidator } = require("../middelwares/categoryValidator");
const {
    getCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../services/categoryServics');
const router = express.Router();

router.route('/')
      .get(getCategories)
      .post(CreateCategoryValidator,createCategory);
router.route('/:id')
       .get(getCategoryValidator,getCategory)
       .put(UpdateCategoryValidator,updateCategory)
       .delete(DeleteCategoryValidator,deleteCategory);
module.exports = router;