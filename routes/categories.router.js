const express = require('express');
const router = express.Router();
const { CategoryController } = require('../controllers/categories.controller');

router.get('/QuotesCategoryApi/GetCategories', CategoryController.getCategory);

module.exports = router;