import React, { useReducer, useEffect } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import Header from '../components/HomePage/Header';
import CardList from '../components/HomePage/CardList';
import LoadMoreButton from '../components/HomePage/LoadMoreButton';
import Loader from '../components/PublicPage/Loader';
import { moviesReducer, initialState } from '../redux/reducers/moviesReducer';
import HomePageContext from '../redux/contexts/HomePageContext';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MORE_MOVIES,
} from '../redux/actions/moviesAction';
import { getMovies } from '../utils/getData';

const HomePage = () => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  useEffect(() => {
    const fetchData = async (page, keyword, isLoadingMore) => {
      dispatch({ type: FETCH_MOVIES });
      try {
        const result = await getMovies(page, keyword);
        dispatch({
          type: (!isLoadingMore
            ? FETCH_MOVIES_SUCCESS
            : FETCH_MORE_MOVIES),
          movies: result,
        });
      } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, error });
      }
    };
    fetchData(state.page, state.keyword, state.isLoadingMore);   // eslint-disable-next-line
  }, [state.page, state.keyword]);

  return (
    <HomePageContext.Provider value={{ state, dispatch }}>
      <div className="popular">
        <Header />
        <div className="popular__card-list">
          {state.isLoading && !state.isLoadingMore ? <Loader /> : <CardList />}
          <ScrollUpButton />
          <div className="button--more">
            <LoadMoreButton value="Load More" />
          </div>
        </div>
      </div>
    </HomePageContext.Provider>
  );
};

export default HomePage;
