const { POSTER_URL, BACKDROP_URL } = require('../utils/constants');

class Movie {
  constructor(rawData) {
    const { data } = rawData;
    this.title = data.title;
    this.poster_path = `${POSTER_URL}${data.poster_path}`;
    this.backdrop_path = `${BACKDROP_URL}${data.backdrop_path}`;
    this.overview = data.overview;
    this.id = data.id;
    this.release_year = data.release_date.slice(0, 4);
    this.vote = `${(data.vote_average * 10).toString()}%`;
    this.runtime_minutes = data.runtime % 60;
    this.runtime_hours = Math.floor(data.runtime / 60);
  }
}

module.exports = Movie;
