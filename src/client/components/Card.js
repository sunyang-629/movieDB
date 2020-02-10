import React from 'react'

const Card = props => {
    const { title, release_month, release_year, poster_path, vote, id } = props.movie;
    return (
        <div className="popular__card-list__card">
            <a href={`/movies/${id}`}>
                <img className="ui medium image" src={poster_path} alt="poster" />
            </a>
            <div className="label">
                <p>{vote}</p>
            </div>
            <h4>{title}</h4>
            <p>{release_month} {release_year}</p>
        </div>
    )
}

export default Card;