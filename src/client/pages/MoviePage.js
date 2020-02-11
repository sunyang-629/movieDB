import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviePage = props => {
    const [movie, setMovie] = useState({})

    const { id } = props.match.params;

    const fetchMovieData = () => {
        axios(`http://localhost:3001/api/movies/${id}`)
            .then(res => { setMovie({ movie: res.data.data }) } )
            .catch(err => console.log(err))
    }

    // useEffect(toggleIsMountedState(), []);
    useEffect(fetchMovieData(),[]);

    // if (!state._isMounted) {
    //     return
    // }

    return (
        <div className="movie container">
            <header className="movie__header" style={{ backgroundImage: `url(${movie && movie.backdrop_path})` }}></header>
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
                                    <p>{movie && movie.release_year} · {movie && movie.vote} User Score</p>
                                    <p>{movie && movie.runtime_hours}h {movie && movie.runtime_minutes} min</p>
                                </div>
                            </div>
                        </div>
                        <div className="six wide column">
                            <h2>Overview</h2>
                            <p className="movie__details--bolder">{movie && movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default MoviePage;