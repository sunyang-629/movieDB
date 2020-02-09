import React from 'react';

function Search() {
    return (
        <div class="ui search popular__header--search centered">
            <div class="ui icon input fluid">
                <input class="prompt" type="text" placeholder="Search" />
                <i class="search icon"></i>
            </div>
            <div class="results">
            </div>
        </div>  
    )
}

export default Search;