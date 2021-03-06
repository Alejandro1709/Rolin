const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.post('/signup', userController.registerUser);

module.exports = router;
