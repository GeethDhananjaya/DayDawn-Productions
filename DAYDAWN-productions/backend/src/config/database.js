const mongoose = require('mongoose');
const logger = require('../utils/logger');
const config = require('./index');

let isIntentionalDisconnect = false;

/**
 * Connect to MongoDB Atlas
 */
const connectDB = async () => {
  const uri = config.db.mongoUri;

  if (!uri) {
    logger.warn('MONGODB_URI is not set. Operating in memory fallback mode.');
    return null;
  }

  try {
    isIntentionalDisconnect = false;
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
      autoIndex: true,
    });

    logger.info(`MongoDB Atlas Connected: ${conn.connection.host}/${conn.connection.name}`);

    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB runtime connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      if (!isIntentionalDisconnect) {
        logger.warn('MongoDB connection lost unexpectedly. Attempting reconnection...');
      }
    });

    return conn;
  } catch (error) {
    logger.error(`MongoDB Atlas connection error: ${error.message}`, error);
    // Don't crash immediately in dev so other services remain accessible
    if (config.isProduction) {
      process.exit(1);
    }
    return null;
  }
};

const disconnectDB = async () => {
  try {
    isIntentionalDisconnect = true;
    await mongoose.connection.close();
    logger.info('MongoDB Atlas connection cleanly closed.');
  } catch (err) {
    logger.error('Error closing MongoDB connection:', err);
  }
};

module.exports = {
  connectDB,
  disconnectDB,
};
