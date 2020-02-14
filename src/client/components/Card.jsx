import React from 'react';
import PropType from 'prop-types';

const Card = (props) => {
  const { movie } = props;
  return (
    <div className="popular__card-list__card">
      <a href={`/movies/${movie.id}`}>
        <img className="ui medium image" src={movie.posterPath} alt="poster" />
      </a>
      <div className={`label ${movie.vote >= 80 ? 'label--high' : `${movie.vote >= 60 ? 'label--medium' : 'label--low'}`}`}>
        <p>
          {movie.vote}
          %
        </p>
      </div>
      <h4>{movie.title}</h4>
      <p>
        <span>{movie.releaseMonth}</span>
        <span> </span>
        <span>{movie.releaseYear}</span>
      </p>
    </div>
  );
};
Card.propTypes = {
  movie: {
    title: PropType.string,
    releaseMonth: PropType.string,
    releaseYear: PropType.string,
    posterPath: PropType.string,
    vote: PropType.number,
    id: PropType.number,
  },
};
Card.defaultProps = {
  movie: {
    title: '',
    releaseMonth: '',
    releaseYear: '',
    posterPath: '',
    vote: 0,
  },
};
export default Card;
