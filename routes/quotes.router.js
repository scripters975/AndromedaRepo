const express = require('express');
const router = express.Router();
const { QuotesController} = require('../controllers/quotes.controller');

router.get('/GetQuotesByCategory/:id', QuotesController.getQuotesByCategory);
router.get('/GetFavouritQuotesByUser/:deviceId', QuotesController.getQuotesByUser);
router.put('/AddFavouritQuote', QuotesController.AddFavouritQuote);
router.put('/RemoveFavouritQuote/:deviceId', QuotesController.RemoveFavouritQuote);

module.exports = router;