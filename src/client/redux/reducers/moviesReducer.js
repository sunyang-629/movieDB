import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MORE_MOVIES,
  INCREMENT_PAGE_NUMBER,
} from '../actions/moviesAction';

export const initialState = {
  movies: [],
  page: 1,
  isSearching: false,
  isLoadingMore: false,
  error: null,
  isLoading: false,
  keyword: '',
}

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
        return {
          ...state,
          isLoading: true,
        }
    case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          movies: action.movies,
        }
    case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        }
    case FETCH_MORE_MOVIES:
      state.movies.push.apply(state.movies,action.movies)
      return {
        ...state,
        isLoading: false,
        movies: state.movies,
      }
    case INCREMENT_PAGE_NUMBER: {
      return {
        ...state,
        page: state.page + 1,
      }
    }
    default:
        return state;
  }
}