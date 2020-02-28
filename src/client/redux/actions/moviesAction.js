export const FETCH_MOVIES = 'FETCH_MOVIES';

export const fetchMovies = (pagenum) => {
    axios.get(`http://localhost:3001/api/v1/movies?page=${pagenum}`)
}