const express = require('express');
const router = express.Router();
const { AuthController } = require('../controllers/auth.controller')
router.get('/AuthGoogleLogin', AuthController.googleLogin);

module.exports = router;