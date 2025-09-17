// server/middleware/requestLogger.js
const morgan = require('morgan');
const logger = require('../config/logger');

// create morgan stream to forward to winston
const stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

const morganMiddleware = morgan('combined', { stream });

module.exports = morganMiddleware;
