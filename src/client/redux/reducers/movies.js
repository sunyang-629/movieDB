import { FETCH_MOVIES_SUCCESS } from '../actions/moviesAction';

export const initialState = {
  movies: [],
  page: 1,
  isSearching: false,
  isLoadingMore: false,
  error: null,
  isLoading: false,
  keyword: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_MOVIES:
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }
    case FETCH_MOVIES_SUCCESS:
        return {
            ...state,
            movies: action.movies,
            isLoading: false,
        }
    default:
        return state;
  }
}