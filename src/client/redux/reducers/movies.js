import { FETCH_MOVIES } from '../actions/moviesAction';

const initialState = {
    movies: [],
    page: 1,
    isSearching: false,
    isLoadingMore: false,
    error: null,
    isLoading: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies,
            }
    }
}