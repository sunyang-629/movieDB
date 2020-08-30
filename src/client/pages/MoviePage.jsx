import React, { useEffect, useReducer } from 'react';
import PropType from 'prop-types';
import Loader from '../components/PublicPage/Loader';
import Header from '../components/MoviePage/Header';
import Detail from '../components/MoviePage/Detail';
import { initialState, detailReducer } from '../redux/reducers/detailReducer';
import MoviePageContext from '../redux/contexts/MoviePageContext';

import {
  FETCH_DETAILS,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_FAILURE,
} from '../redux/actions/detailAction';
import { getDetail } from '../utils/getData';

const MoviePage = (props) => {
  const [state, dispatch] = useReducer(detailReducer, initialState);
  const { match: { params: { id } }, history: { goBack } } = props;

  useEffect(() => {
    const fetchData = async (movieId) => {
      dispatch({ type: FETCH_DETAILS });
      try {
        const result = await getDetail(movieId);
        dispatch({ type: FETCH_DETAILS_SUCCESS, movie: result });
      } catch (error) {
        dispatch({ type: FETCH_DETAILS_FAILURE, error });
      }
    };
    fetchData(id);
  }, [id]);

  return (
    <MoviePageContext.Provider value={{ state, dispatch }}>
      <div className="movie container">
        {state.isLoading ? <Loader />
          : (
            <div>
              <Header goBack={goBack} />
              <Detail />
            </div>
          ) }
      </div>
    </MoviePageContext.Provider>
  );
};
MoviePage.propTypes = {
  match: {
    params: {
      id: PropType.string,
    },
  },
  history: {
    goBack: PropType.func,
  },
};
MoviePage.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
  history: {
    goBack: () => {},
  },
};
export default MoviePage;
