const responseFormatter = require('./../utils/responseFormatter');

module.exports = (error, req, res, next) => {
    if (error.response) {
        const { data } = error.response
        return responseFormatter(res, data.cod, data.message, null)
    }
}