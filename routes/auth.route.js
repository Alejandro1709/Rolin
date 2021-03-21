const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { protect } = require('../middlewares/auth.middleware');

router.get('/', protect, authController.auth);

router.post('/login', authController.login);

module.exports = router;
