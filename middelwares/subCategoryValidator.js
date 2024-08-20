const { check , validationResult} = require('express-validator');
// @desc Finds the validation errors in this request and wraps them in an object with handy functions
const validation = ( req , res , next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}
exports.getSubCategoryValidator = [ 
    check('id').isMongoId().withMessage("Invalid Subcategory id"),
    validation
];


exports.CreateSubCategoryValidator = [
    check("name")
    .notEmpty()
    .withMessage("SubCategory required")
    .isLength({min:2})
    .withMessage("Too short Subcategory name")
    .isLength({max:32})
    .withMessage("Too long Subcategory name"),
    check('Category')
    .notEmpty()
    .withMessage("subCategory must be belong to category")
    .isMongoId()
    .withMessage("Invalid Subcategory id format"),
    validation 
];

exports.UpdateSubCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid Subcategory id"),
    validation 
];


exports.DeleteSubCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid Subcategory id"),
    validation
];