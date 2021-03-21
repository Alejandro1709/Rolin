const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
const { promisify } = require('util');

dotenv.config();

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res
      .status('401')
      .json({ message: 'No Token, Authorization Denied.' });
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  try {
    let user = await User.findById(decoded.user.id);

    if (!user) {
      return res.status('401').json({ message: 'The token is invalid' });
    }

    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status('401').json({ message: 'The token is invalid' });
  }
};
