const express = require('express');
const axios = require('./../utils/axios');

const Popular = require('./../models/Popular');
const responseFormatter = require('./../utils/responseFormatter');

const api_key = process.env.api_key;
const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: '/discover/movie',
        params: {
            sort_by: 'popularity.desc',
            api_key: api_key
        }
    })
        .then(response => responseFormatter(res, 200, null, response.data.results.map(movie => new Popular(movie))))
        .catch(err => res.send(err));
})

module.exports = router;
