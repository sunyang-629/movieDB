import React from 'react';

const Search = props => {
    return (
        <div className="ui search popular__header--search centered">
            <div className="ui icon input fluid">
                <input className="prompt" type="text" placeholder="Search" />
                <i className="search icon"></i>
            </div>
            <div className="results">
            </div>
        </div>  
    )
}

export default Search;