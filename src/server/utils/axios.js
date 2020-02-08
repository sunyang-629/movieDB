const axios = require("axios");

const popularUrl = axios.get({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  params: {
    api_key: "6ed12e064b90ae1290fa326ce9e790ff",
    sort_by: "popularity.desc"
  }
});

module.exports = popularUrl;