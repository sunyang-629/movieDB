import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import Loader from '../components/PublicPage/Loader';
import Header from '../components/MoviePage/Header';
import Detail from '../components/MoviePage/Detail';

const MoviePage = (props) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { match: { params: { id } }, history: { goBack } } = props;

  const fetchMovieData = () => {
    setIsLoading(true);
    axios.get(`http://localhost:3001/api/v1/movies/${id}`)
      .then((res) => {
        setMovie(res.data.data);
        setIsLoading(false);
      })
      .catch(() => setHasError(true));
  };

  useEffect(fetchMovieData, []);

  return (
    <div className="movie container">
      {isLoading ? <Loader />
        : (
          <div>
            <Header movie={movie} goBack={goBack} />
            <Detail movie={movie} />
          </div>
        ) }
    </div>
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
