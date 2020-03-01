import { getMovies } from '../../utils/getMovies';

export const FETCH_MOVIES = 'FETCH_MOVIES'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesAction = () => ({
  type: FETCH_MOVIES,
});

export const fetchMoviesSuccessAction = data => ({
  type: FETCH_MOVIES_SUCCESS,
  movies: data,
});

export const fetchMoviesFailureAction = error => ({
  type: FETCH_MOVIES_FAILURE,
  error,
})

// export const fetchMoviesThunkAction = (page, keyword) => dispatch => {
//   console.log('object');
//   dispatch(fetchMoviesAction());
//   getMovies(page, keyword)
//     .then(data => {
//       dispatch(fetchMoviesSuccessAction(data))
//     }).then(error => {
//       dispatch(fetchMoviesFailureAction(error));
//     })
// }
