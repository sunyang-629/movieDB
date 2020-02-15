import React from 'react';
import PropType from 'prop-types';

const Card = (props) => {
  const {
    movie: {
      id, releaseMonth, releaseYear, posterPath, vote, title,
    },
  } = props;
  return (
    <div className="card">
      <a href={`/movies/${id}`}>
        <img className="ui medium image" src={posterPath} alt="poster" />
      </a>
      <div className={`label ${vote >= 80 ? 'label--high' : `${vote >= 60 ? 'label--medium' : 'label--low'}`}`}>
        <p>
          {vote}
          %
        </p>
      </div>
      <h4>{title}</h4>
      <p>
        <span>{releaseMonth}</span>
        <span> </span>
        <span>{releaseYear}</span>
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
