const mongoose = require('mongoose');
const { successResponse } = require('../utils/response');

const checkHealth = (req, res) => {
  const dbStatusMap = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  };

  const dbState = mongoose.connection.readyState;

  const healthData = {
    status: 'operational',
    service: 'DAYDAWN Productions API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: {
      type: 'MongoDB Atlas',
      status: dbStatusMap[dbState] || 'unknown',
      connected: dbState === 1,
      name: mongoose.connection.name || null,
      host: mongoose.connection.host || null,
    },
    memoryUsage: process.memoryUsage(),
  };

  return successResponse(res, healthData, 200, 'Service is healthy');
};

module.exports = {
  checkHealth,
};
