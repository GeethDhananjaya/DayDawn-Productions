/**
 * Production-safe JSON Logger
 */
const logger = {
  info: (message, meta = {}) => {
    console.log(JSON.stringify({ timestamp: new Date().toISOString(), level: 'INFO', message, ...meta }));
  },
  warn: (message, meta = {}) => {
    console.warn(JSON.stringify({ timestamp: new Date().toISOString(), level: 'WARN', message, ...meta }));
  },
  error: (message, error = {}) => {
    console.error(JSON.stringify({
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message,
      stack: error?.stack,
      details: error?.details,
    }));
  },
};

module.exports = logger;
