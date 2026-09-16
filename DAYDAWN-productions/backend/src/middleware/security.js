const helmet = require('helmet');
const cors = require('cors');
const config = require('../config');

// In-memory rate limiter tracker
const rateLimitMap = new Map();

/**
 * Lightweight rate limiting middleware for API protection
 */
const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  const windowMs = config.rateLimit.windowMs;
  const maxRequests = config.rateLimit.maxRequests;

  const clientRecord = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };

  if (now > clientRecord.resetTime) {
    clientRecord.count = 0;
    clientRecord.resetTime = now + windowMs;
  }

  clientRecord.count += 1;
  rateLimitMap.set(ip, clientRecord);

  res.setHeader('X-RateLimit-Limit', maxRequests);
  res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - clientRecord.count));

  if (clientRecord.count > maxRequests) {
    return res.status(429).json({
      status: 'error',
      message: 'Too many requests. Please slow down and try again later.',
    });
  }

  next();
};

const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser calls (like curl, health checks, server-to-server)
    if (!origin) return callback(null, true);
    if (config.cors.origin.includes(origin) || !config.isProduction) {
      return callback(null, true);
    }
    return callback(new Error('Blocked by CORS policy'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
};

module.exports = {
  helmet: helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  }),
  cors: cors(corsOptions),
  rateLimiter,
};
