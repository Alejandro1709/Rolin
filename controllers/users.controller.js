const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.registerUser = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: 'A user with that email Already exists' });
    }

    user = new User({
      fullName,
      username,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(11);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
      (err, token) => {
        if (err) throw err;

        res.status(201).json({
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
