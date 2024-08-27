const { check, validationResult } = require("express-validator");
const slugify = require("slugify");
// @desc Finds the validation errors in this request and wraps them in an object with handy functions
const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
exports.getCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id"),
  validation,
];

exports.CreateCategoryValidator = [
  check("name")
    .notEmpty()
    .withMessage("Category required")
    .isLength({ min: 3 })
    .withMessage("Too short category name")
    .isLength({ max: 32 })
    .withMessage("Too long category name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validation,
];

exports.UpdateCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id"),
  check("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  validation,
];

exports.DeleteCategoryValidator = [
  check("id").isMongoId().withMessage("Invalid category id"),
  validation,
];
