const express = require("express");
const {
    getCategories,
    createCategory,
    getCategory,
    updateCategory
} = require('../services/categoryServics');
const router = express.Router();

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').get(getCategory).put(updateCategory);
module.exports = router;