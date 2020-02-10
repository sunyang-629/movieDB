import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviePage = props => {
    const [state, setState] = useState({
        movie: null,
    })

    const fetchMovieData = id => {
        axios("http://localhost:3001/api/movies/419704")
            .then(res => setState({ movie: res.data.data }))
            .catch(err => console.log(err))
    }

    useEffect(fetchMovieData, []);

    return (
        <div className="movie">
            <header className="movie__header" style={{ backgroundImage: `url(${state.movie && state.movie.backdrop_path})` }}></header>
            <div>{state.movie && state.movie.title}</div>
        </div>
        
        
    )
}

export default MoviePage;