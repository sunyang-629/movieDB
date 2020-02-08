const express = require('express');
const axios = require('./../utils/axios');

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
        .then(response => res.send(response.data.results[0]))
        .catch(err => res.send(err));
})

module.exports = router;
