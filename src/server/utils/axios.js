const axios = require('axios');
const { BASE_URL } = require('../utils/constants');

const instance = axios.create({
  baseURL: BASE_URL,
});

module.exports = instance;
