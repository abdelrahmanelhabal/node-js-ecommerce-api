const { check , validationResult} = require('express-validator');
const categoryModel = require('../models/categoryModels');
const subCategoryModel = require('../models/subCategoryModels');
// @desc Finds the validation errors in this request and wraps them in an object with handy functions
const validation = ( req , res , next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}
exports.getProductValidator = [ 
    check('id').isMongoId().withMessage("Invalid Product id"),
    validation
];


exports.CreateProductValidator = [
     check("name")
     .notEmpty()
    .withMessage("Product required")
    .isLength({min:3})
    .withMessage("must be at least 3 chars"),
    
    check('description')
    .notEmpty()
    .withMessage("product description is required")
    .isLength({max:2000})
    .withMessage("Too long description"),
    
    check("quantity")
    .notEmpty()
    .withMessage("product quantity is required")
    .isNumeric()
    .withMessage("product quantity must be a number"),
    
    check("sold")
    .optional()
    .isNumeric()
    .withMessage("product quantity must be a number"),
    
    check("price")
    .notEmpty()
    .withMessage("product price is required")
    .isNumeric()
    .withMessage("product price must be a number")
    .isLength({max:2000000})
    .withMessage("To long price"),
    
    check("priceAfterDicount")
    .optional()
    .isFloat()
    .isNumeric()
    .withMessage("product priceAfterDicount must be a number"),
    
    check("colors")
    .optional()
    .isArray()
    .withMessage("color should be array of string"),
    
    check("image")
    .optional()
    .isArray()
    .withMessage("image should be array of string"),
    
    check("imagecover")
    .notEmpty()
    .withMessage("product imagecover is required"),
    
    check("category")
    .notEmpty()
    .withMessage("product must be belong to a category")
    .isMongoId()
    .withMessage("Invalid Id formate")
    .custom((id)=>
     categoryModel.findById(id).then((category)=>{
     if(!category){
        return Promise.reject(new Error(`No category for this id: ${id}`));
     }
     })),
    check("subCategorys")
    .optional()
    .isMongoId()
    .withMessage("Invalid Id formate")
    .custom((id)=>subCategoryModel.find({_id:{$exists:true , $in:id}}).then((subCategory) =>{
        if(subCategory.length != id.length || subCategory.length < 1){
            return Promise.reject(new Error(`Invalid subCategory Ids`));
        }
    }))
    .custom((val,{req})=>subCategoryModel.find({Category:req.body.category}).then((subCategories)=>{
        const subCategoriesId = [];
        subCategories.forEach((subCategory)=>{
            subCategoriesId.push(subCategory._id.toString());
        })
        if(!val.every((v)=>subCategoriesId.includes(v))){
            return Promise.reject(new Error(`Invalid subCategory Ids`));
        }
    })),
    
    check("brand")
    .optional()
    .isMongoId()
    .withMessage("Invalid Id formate"),
    
    check("ratingAverage")
    .optional()
    .isNumeric()
    .withMessage("ratingAverage must be a number")
    .isLength({min:1})
    .withMessage('Rating must be  above or equal 1.0')
    .isLength({max:5})
    .withMessage('Rating must be  below or equal 5.0'),
    
    check("ratingquantity")
    .optional()
    .isNumeric()
    .withMessage("ratingquantity must be a number"),
    validation 
];

exports.UpdateProductValidator = [
    check('id').isMongoId().withMessage("Invalid Product id"),
    validation 
];


exports.DeleteProductValidator = [
    check('id').isMongoId().withMessage("Invalid Product id"),
    validation
];