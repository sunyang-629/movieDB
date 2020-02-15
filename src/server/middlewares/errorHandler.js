const responseFormatter = require('../utils/responseFormatter');

module.exports = (error, req, res, next) => {
  const { status, data } = error.response;
  return error.response && responseFormatter(res, status, data.status_message, null);
};
