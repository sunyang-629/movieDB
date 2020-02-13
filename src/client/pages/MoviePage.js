import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './../components/Loader'

const MoviePage = props => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { id } = props.match.params;

    const fetchMovieData = () => {
        setIsLoading(true);
        axios.get(`http://localhost:3001/api/movies/${id}`)
            .then(res => {
                setMovie(res.data.data);
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(fetchMovieData, []);

    return (
        <div className="movie container">
            {isLoading ? <div className="loading"><Loader /></div> :
            <div>
                <header className="movie__header" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
                    <div className="back-arrow">
                        <i className="arrow left icon" onClick={() => props.history.goBack()}></i>
                    </div>
                </header>
                <div className="movie__details">
                    <div className="container ui centered">
                        <div className="ui stackable two column grid">
                            <div className="ten wide column">
                                <div className="ui grid">
                                    <div className="eight wide column">
                                        <img className="ui fluid image" src={movie.poster_path} alt="poster" />
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
            </div> }
    </div>
    )
}

export default MoviePage;