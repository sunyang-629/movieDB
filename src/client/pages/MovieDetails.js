import React from 'react'

const MovieDetails = props => {

    const { movie } = props; 
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

export default MovieDetails