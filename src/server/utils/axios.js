const axios = require("axios");

const popularUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

module.exports = popularUrl;