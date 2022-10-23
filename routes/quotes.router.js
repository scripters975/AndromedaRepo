const express = require('express');
const router = express.Router();
const { QuotesController} = require('../controllers/quotes.controller');

router.get('/QuotesApi/GetQuotesByCategory/:id', QuotesController.getQuotesByCategory);

module.exports = router;