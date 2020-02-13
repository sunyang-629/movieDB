const responseFormatter = require('./../utils/responseFormatter');

module.exports = (error, req, res, next) => {
    if (error.response) {
        const { status, data } = error.response
        return responseFormatter(res, status, data.status_message, null)
    }
}