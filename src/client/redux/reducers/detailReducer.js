import {
  FETCH_DETAILS,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
} from '../actions/detailAction';

export const initialState = {
  movie: {},
  isLoading: false,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.movie,
      };
    case FETCH_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
