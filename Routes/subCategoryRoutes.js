const express = require("express");

const { 
    createSubCategory,
    getSubCategories,
    getSubCategory,
    updateSubCategory,
    deleteSubCategory 
    } = require("../services/subCategoryService");
const {
    CreateSubCategoryValidator,
    getSubCategoryValidator,
    UpdateSubCategoryValidator,
    DeleteSubCategoryValidator
    } = require("../middelwares/subCategoryValidator");
    
    
    // mergeParams: Allow us to access parameters on other routes
    const router = express.Router({mergeParams:true});

    router.route("/")
      .post(CreateSubCategoryValidator,createSubCategory)
      .get(getSubCategories);


      router.route('/:id')
      .get(getSubCategoryValidator,getSubCategory)
      .put(UpdateSubCategoryValidator,updateSubCategory)
      .delete(DeleteSubCategoryValidator,deleteSubCategory);


module.exports = router;