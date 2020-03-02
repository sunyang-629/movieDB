import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/movies'

export const getMovies = (page, keyword) => {
    return axios.get(`${URL}?page=${page}&keyword=${keyword}`)
        .then(res => res.data.data);
}

export const getDetail = (id) => {
    return axios.get(`${URL}/${id}`)
        .then(res => res.data.data);
}