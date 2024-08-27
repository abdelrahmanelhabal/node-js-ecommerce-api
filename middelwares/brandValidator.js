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
exports.getBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id"),
  validation,
];

exports.CreateBrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("Brand required")
    .isLength({ min: 2 })
    .withMessage("Too short Brand name")
    .isLength({ max: 32 })
    .withMessage("Too long Brand name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validation,
];

exports.UpdateBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id"),
  check("name").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),
  validation,
];

exports.DeleteBrandValidator = [
  check("id").isMongoId().withMessage("Invalid Brand id"),
  validation,
];
