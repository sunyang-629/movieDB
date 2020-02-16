const axios = require('../utils/axios');
const MovieList = require('../models/MovieList');

const { API_KEY: apiKey } = process.env;
const responseFormatter = require('../utils/responseFormatter');

const getMovieList = (req, res, next) => {
  const { keyword, page } = req.query;
  let List;
  if (keyword && page) {
    List = axios.get(`/search/movie?query=${keyword}&api_key=${apiKey}&page=${page}`);
  } else if (page) {
    List = axios.get(`/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`);
  }
  List.then((response) => responseFormatter(
    res,
    200,
    null,
    response.data.results.map((movie) => new MovieList(movie)),
  ))
    .catch((err) => next(err));
};

module.exports = getMovieList;
