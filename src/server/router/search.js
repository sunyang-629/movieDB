const express = require('express');
const axios = require('./../utils/axios');

const Popular = require('./../models/Popular');

const api_key = process.env.api_key;
const router = express.Router();

router.get('/', (req, res) => {
    const key_word= req.query.key_word
    axios({
        method: 'get',
        url: '/search/movie',
        params: {
            query: key_word,
            api_key: api_key
        }
    })
        .then(response => res.send(response.data.results.map(movie => new Popular(movie))))
        .catch(err => res.send(err));
})

module.exports = router;