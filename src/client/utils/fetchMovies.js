import axios from 'axios';

export const fetchMovies = (page, keyword) => {
    return axios.get(`http://localhost:3001/api/v1/movies?page=${page}&keyword=${keyword}`)
        .then(res => res.data.data);
}