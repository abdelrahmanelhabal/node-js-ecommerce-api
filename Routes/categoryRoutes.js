const express = require("express");
const {getCategories} = require('../services/categoryServics');
const router = express.Router();

router.get('/',getCategories);

module.exports = router;