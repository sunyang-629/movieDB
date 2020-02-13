import React from 'react';
import Card from './Card.jsx';

const CardList = props => {
    // console.log(props.popularMovies);
    return (
        <div className="container">
            <h1>{!props.searchState ? 'Popular Movies' : 'Search Result'}</h1>
            <div className="ui grid">
                <div className="doubling four column row">
                    {props.popularMovies.length && props.popularMovies.map(movies => movies.map(movie=> <div key={movie.id} className="column">
                    <Card
                        movie={movie} />
                    </div>) )}
                </div>
            </div>
        </div>
    )
}

export default CardList;