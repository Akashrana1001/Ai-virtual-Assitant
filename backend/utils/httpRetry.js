// server/utils/httpRetry.js
const axios = require('axios');
const axiosRetry = require('axios-retry');

// create axios instance
const client = axios.create({
  timeout: 12_000, // 12s per request
});

// retry config: exponential backoff for idempotent operations
axiosRetry(client, {
  retries: 2, // total attempts = 1 + retries
  retryDelay: axiosRetry.exponentialDelay,
  shouldResetTimeout: true,
  retryCondition: (error) => {
    // retry on network errors or 5xx responses
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || (error.response && error.response.status >= 500);
  }
});

module.exports = client;
