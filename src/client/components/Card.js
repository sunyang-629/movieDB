import React from 'react'

const Card = props => {
    const { title, release_month, release_year, poster_path, vote } = props.movie;
    return (
        <div className="popular__card-list__card">
            <a href='#'>
                <img className="ui medium image" src={poster_path} alt="poster" />
            </a>
            <div className="label">
                <p>{vote*10}%</p>
            </div>
            <h4>{title}</h4>
            <p>{release_month} {release_year}</p>
        </div>
    )
}

export default Card;