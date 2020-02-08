const express = require('express');
const axios = require('axios');

const api_key = process.env.api_key;
const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: api_key,
            sort_by: 'popularity.desc'
        }
    })
        .then(response => res.send(response.data.results[0]))
        .catch(err => res.send(err));
})

module.exports = router;
