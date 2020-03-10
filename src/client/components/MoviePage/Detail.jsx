import React, { useContext } from 'react';
import MoviePageContext from '../../redux/contexts/MoviePageContext';

const Detail = () => {
  const { state: { movie } } = useContext(MoviePageContext);
  return (
    <div className="movie__details">
      <div className="container ui centered">
        <div className="ui stackable two column grid">
          <div className="ten wide column">
            <div className="ui grid">
              <div className="eight wide column">
                <img className="ui fluid image" src={movie && movie.poster_path} alt="poster" />
              </div>
              <div className="eight wide column">
                <h1>{movie && movie.title}</h1>
                <p>
                  {movie && movie.release_year}
                  {' '}
                  ·
                  {' '}
                  {movie && movie.vote}
                  {' '}
                  User Score
                </p>
                <p>
                  {movie && movie.runtime_hours}
                  h
                  {' '}
                  {movie && movie.runtime_minutes}
                  {' '}
                  min
                </p>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <h2>Overview</h2>
            <p className="bolder">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
