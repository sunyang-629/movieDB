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
        <div className="movie container">
            <header className="movie__header" style={{ backgroundImage: `url(${state.movie && state.movie.backdrop_path})` }}></header>
            <div className="movie__details">
                <div className="container ui centered">
                    <div class="ui stackable two column grid">
                        <div class="ten wide column">
                            <div class="ui grid">
                                <div class="eight wide column">
                                    <img className="ui fluid image" src={state.movie && state.movie.poster_path} alt="poster" />
                                </div>
                                <div class="eight wide column">
                                    <h1>{state.movie && state.movie.title}</h1>
                                    <p>{state.movie && state.movie.release_year} · {state.movie && state.movie.vote} User Score</p>
                                    <p>{state.movie && state.movie.runtime_hours}h {state.movie && state.movie.runtime_minutes} min</p>
                                </div>
                            </div>
                        </div>
                        <div class="six wide column">
                            <h2>Overview</h2>
                            <p className="movie__details--bolder">{state.movie && state.movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default MoviePage;