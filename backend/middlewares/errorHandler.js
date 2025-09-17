// server/middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  // If headers already sent, delegate to default handler
  if (res.headersSent) return next(err);

  const status = err.status || 500;
  const safeMessage = err.safeMessage || 'Internal Server Error';

  // include stack only in non-production
  const payload = { message: safeMessage };
  if (process.env.NODE_ENV !== 'production') {
    payload.error = err.message;
    payload.stack = err.stack;
  }

  // log error (winston will pick this up if configured)
  req.logger && req.logger.error && req.logger.error(err);

  res.status(status).json(payload);
}

module.exports = errorHandler;
