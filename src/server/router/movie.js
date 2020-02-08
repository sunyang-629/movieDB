const express = require('express');
const axios = require('axios');

const api_key = process.env.api_key;
const router = express.Router()

router.get('/:id',(req, res) => {
    const id = req.params.id;
    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + id,
        params: {
            api_key: api_key
        }
    })
        .then(response => res.send(response.data))
        .catch(err => console.log(err))
})

module.exports = router;