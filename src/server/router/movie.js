const express = require('express');
const axios = require('axios');

const router = express.Router()

router.get('/:id',(req, res) => {
    const id = req.params.id;
    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + id,
        params: {
            api_key: '6ed12e064b90ae1290fa326ce9e790ff'
        }
    })
        .then(response => res.send(response.data))
        .catch(err => console.log(err))
})

module.exports = router;