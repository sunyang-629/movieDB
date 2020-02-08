const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            api_key: '6ed12e064b90ae1290fa326ce9e790ff',
            sort_by: 'popularity.desc'
        }
    })
        .then(response => res.send(response.data.results[0]))
        .catch(err => console.log(err.message));
})

module.exports = router;
