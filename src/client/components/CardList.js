import React from 'react';
import Card from './Card';

const CardList = props => {
    // console.log(props.popularMovies);
    return (
        <div className="container">
            <h1>Popular Movies</h1>
            <div className="ui grid">
                <div className="doubling four column row">
                    {props.popularMovies && props.popularMovies.map(movies => movies.map(movie=> <div key={movie.id} className="column">
                    <Card
                        movie={movie} />
                    </div>) )}
                </div>
            </div>
        </div>
    )
}

export default CardList;