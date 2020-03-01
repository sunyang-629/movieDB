import React, { useReducer, useEffect } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import Header from '../components/HomePage/Header';
import CardList from '../components/HomePage/CardList';
import LoadMoreButton from '../components/HomePage/LoadMoreButton';
import Loader from '../components/PublicPage/Loader';
import { moviesReducer, initialState } from '../redux/reducers/moviesReducer';

// import thunkMiddleware from 'redux-thunk';
// import { applyMiddleware } from 'redux';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../redux/actions/moviesAction';
import { getMovies } from '../utils/getMovies';

const HomePage = () => {
  // const useThunkReducer = applyMiddleware(useReducer, thunkMiddleware);
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  // useEffect(() => dispatch(fetchMoviesAction()), []);
  useEffect(() => {
    const fetchData = async (state) => {
      dispatch({ type: FETCH_MOVIES });
      try {
        const result = await getMovies(state.page, state.keyword);
        dispatch({ type: FETCH_MOVIES_SUCCESS, movies: result });
      } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, error });
      }
    }
    fetchData(state)
  }, []);

  return (
    <div className="popular">
        <Header />
      <div className="popular__card-list">
        <CardList />
        <ScrollUpButton />
        <div className="button--more">
          <LoadMoreButton value="Load More" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
