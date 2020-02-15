const express = require('express');
const axios = require('./../utils/axios');

const MovieList = require('./../models/MovieList');
const responseFormatter = require('./../utils/responseFormatter');

const { API_KEY: apiKey } = process.env;
const router = express.Router();

router.get('/', (req, res, next) => {
  const { page } = req.query;
  axios({
    method: 'get',
    url: '/discover/movie',
    params: {
      sort_by: 'popularity.desc',
      api_key: apiKey,
      page,
    },
  })
    .then((response) => responseFormatter(
      res,
      200,
      null,
      response.data.results.map((movie) => new MovieList(movie)),
    ))
    .catch((err) => next(err));
});

module.exports = router;
