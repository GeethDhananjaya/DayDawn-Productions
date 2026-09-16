const mongoose = require('mongoose');
const User = require('../models/User');
const { successResponse } = require('../utils/response');
const AppError = require('../utils/appError');
const logger = require('../utils/logger');

const login = async (req, res, next) => {
  try {
    const { email, role = 'CREW' } = req.body;

    if (!email) {
      throw new AppError('Email address is required for portal authentication', 400);
    }

    let user = null;

    if (mongoose.connection.readyState === 1) {
      user = await User.findOne({ email: email.toLowerCase() });
      if (!user) {
        // Automatically provision or register test user in MongoDB Atlas
        const name = email.split('@')[0].replace('.', ' ').toUpperCase();
        user = await User.create({
          name,
          email: email.toLowerCase(),
          role,
          lastLogin: new Date(),
        });
        logger.info(`Registered new user in MongoDB Atlas: ${user.email} (${user.role})`);
      } else {
        user.lastLogin = new Date();
        await user.save();
      }
    } else {
      user = {
        id: `usr_${Date.now()}`,
        name: email.split('@')[0].replace('.', ' ').toUpperCase(),
        email,
        role,
      };
    }

    const token = `jwt_daydawn_${Date.now()}`;

    return successResponse(
      res,
      {
        id: user._id || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      },
      200,
      'Authentication successful'
    );
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res) => {
  return successResponse(res, null, 200, 'Logged out cleanly');
};

module.exports = {
  login,
  logout,
};
