const express = require('express');
const router = express.Router();
const { QuotesController} = require('../controllers/quotes.controller');

router.get('/GetQuotesByCategory/:id', QuotesController.getQuotesByCategory);
router.get('/GetFavouritQuotesByUser/:email', QuotesController.getQuotesByUser);
router.put('/AddFavouritQuote', QuotesController.AddFavouritQuote);

module.exports = router;