import React, { useReducer, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import Card from './Card';
import { moviesReducer, initialState } from '../../redux/reducers/moviesReducer';
import HomePageContext from '../../redux/contexts/HomePageContext';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from '../../redux/actions/moviesAction';
import { getMovies } from '../../utils/getMovies';

const CardList = () => {
  // const [state, dispatch] = useReducer(moviesReducer, initialState);
  const { state, dispatch } = useContext(HomePageContext);
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
    <div className="container">
      <h1>{true? 'Popular Movies' : 'Search Result'}</h1>
      <div className="ui grid">
        <div className="doubling four column row">
          {state.movies.length && state.movies.map((movie) => (
            <div key={movie.id} className="column">
              <Card movie={movie} />
            </div>))}
        </div>
      </div>
    </div>
  );
};
CardList.propTypes = {
  searchState: PropType.bool,
  popularMovies: {
    length: PropType.number,
  },
};
CardList.defaultProps = {
  searchState: false,
  popularMovies: [],
};

export default CardList;
