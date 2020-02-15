const axios = require('../utils/axios');
const MovieDetail = require('../models/MovieDetail');

const { API_KEY: apiKey } = process.env;
const responseFormatter = require('../utils/responseFormatter');

const getMovieDetail = (req, res, next) => {
  const { id } = req.params;
  axios.get(`/movie/${id}?api_key=${apiKey}`)
    .then((response) => responseFormatter(res, 200, null, new MovieDetail(response)))
    .catch((err) => next(err));
};

module.exports = getMovieDetail;
