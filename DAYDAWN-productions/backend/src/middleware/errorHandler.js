const logger = require('../utils/logger');
const config = require('../config');

/**
 * Global Centralized Express Error Handler
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';

  logger.error(err.message, {
    url: req.originalUrl,
    method: req.method,
    statusCode,
    stack: err.stack,
  });

  res.status(statusCode).json({
    status: `${statusCode}`.startsWith('4') ? 'fail' : 'error',
    message,
    ...(config.isProduction ? {} : { stack: err.stack }),
  });
};

module.exports = errorHandler;
