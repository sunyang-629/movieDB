const express = require('express');
const axios = require('./../utils/axios');

const MovieDetail = require('../models/MovieDetail');
const MovieList = require('./../models/MovieList');
const responseFormatter = require('./../utils/responseFormatter');

const { API_KEY: apiKey } = process.env;
const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  axios({
    method: 'get',
    url: `/movie/${id}`,
    params: {
      api_key: apiKey,
    },
  })
    .then((response) => responseFormatter(res, 200, null, new MovieDetail(response)))
    .catch((err) => next(err));
});

router.get('/', (req, res, next) => {
  const { keyword, page } = req.query;
  (keyword ? axios({
    method: 'get',
    url: '/search/movie',
    params: {
      query: keyword,
      api_key: apiKey,
      page,
    },
  }) : axios({
    method: 'get',
    url: '/discover/movie',
    params: {
      sort_by: 'popularity.desc',
      api_key: apiKey,
      page,
    },
  }))
    .then((response) => responseFormatter(
      res,
      200,
      null,
      response.data.results.map((movie) => new MovieList(movie)),
    ))
    .catch((err) => next(err));
});

module.exports = router;
