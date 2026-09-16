require('dotenv').config();
const express = require('express');
const config = require('./config');
const { helmet, cors, rateLimiter } = require('./middleware/security');
const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const apiRoutes = require('./routes');
const logger = require('./utils/logger');
const AppError = require('./utils/appError');

const app = express();

// Global Security & Utility Middlewares
app.use(helmet);
app.use(cors);
app.use(rateLimiter);
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(requestLogger);

// API Routes Mounted Under /api/v1
app.use('/api/v1', apiRoutes);

// Fallback for Unhandled API Routes
app.all('/api/*', (req, res, next) => {
  next(new AppError(`Resource ${req.originalUrl} not found on this server`, 404));
});

// Global Centralized Error Handling Middleware
app.use(errorHandler);

// Start Server if invoked directly
if (require.main === module) {
  const server = app.listen(config.port, config.host, () => {
    logger.info(`DAYDAWN Productions API running on http://${config.host}:${config.port}/api/v1 (ENV: ${config.env})`);
  });

  const gracefulShutdown = (signal) => {
    logger.info(`Received ${signal}. Initiating graceful shutdown...`);
    server.close(() => {
      logger.info('HTTP server closed cleanly. Exiting process.');
      process.exit(0);
    });

    // Force exit after 10 seconds if connections hang
    setTimeout(() => {
      logger.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));
}

module.exports = app;
