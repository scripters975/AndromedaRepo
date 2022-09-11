const express = require('express');
const router = express.Router();
const { GetCategoryController} = require('../controllers/categories.controller');

router.get('/QuotesCategory/GetCategories', GetCategoryController);



module.exports = router;