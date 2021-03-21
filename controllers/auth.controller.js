const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.auth = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.status(200).json(user);
  } catch (error) {
    console.error(error);

    res.status(500).json(error);
  }
};
