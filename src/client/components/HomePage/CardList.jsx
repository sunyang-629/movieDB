import React from 'react';
import PropType from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  const { searchState, popularMovies } = props;
  return (
    <div className="container">
      <h1>{!searchState ? 'Popular Movies' : 'Search Result'}</h1>
      <div className="ui grid">
        <div className="doubling four column row">
          {popularMovies.length && popularMovies.map((movies) => movies.map((movie) => (
            <div key={movie.id} className="column">
              <Card movie={movie} />
            </div>
          )))}
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
