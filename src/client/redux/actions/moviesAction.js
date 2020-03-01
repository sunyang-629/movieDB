import axios from 'axios';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
// export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = (pagenum, keyword) => {
  axios.get(`http://localhost:3001/api/v1/movies?page=${pagenum}&keyword=${keyword}`)
    .then(res => {
      return {
        type: FETCH_MOVIES_SUCCESS,
        movies: res.data.data,
    } }).catch(err => console.log(err))
}