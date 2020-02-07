const express = require('express');
const axios = require('axios');

const app = express();
const router = express.Router();

app.get('/api/popular', (req, res) => {
    console.log('object');
    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6ed12e064b90ae1290fa326ce9e790ff',
    }).then(response => console.log(response.data.results[0])).catch(err => console.err());
})

app.get('/api/movies/:id',(req, res) => {
    const id = req.params.id;
    axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/' + id,
        params: {
            api_key: '6ed12e064b90ae1290fa326ce9e790ff'
        }
    }).then(response => console.log(response.data)).catch(err => console.log(err);)
})
// app.get('/', (req, res) => {
//     console.log('object');
// })

app.listen('3000', () => {
    console.log('movie app has started');
})