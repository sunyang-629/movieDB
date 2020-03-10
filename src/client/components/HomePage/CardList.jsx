import React, { useContext } from 'react';
import Card from './Card';
import HomePageContext from '../../redux/contexts/HomePageContext';


const CardList = () => {
  const { state } = useContext(HomePageContext);

  return (
    <div className="container">
      <h1>{state.keyword.length === 0 ? 'Popular Movies' : 'Search Result'}</h1>
      <div className="ui grid">
        <div className="doubling four column row">
          {state.movies.length && state.movies.map((movie) => (
            <div key={movie.id} className="column">
              <Card movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
