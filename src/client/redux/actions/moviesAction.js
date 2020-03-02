export const FETCH_MOVIES = 'FETCH_MOVIES'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_MORE_MOVIES = 'FETCH_MORE_MOVIES';
export const INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER';
export const INPUT_SEARCH_VALUE = 'INPUT_SEARCH_VALUE';


// export const click = page => ({
//   type: FETCH_MORE_MOVIES,
//   page,
// })

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
