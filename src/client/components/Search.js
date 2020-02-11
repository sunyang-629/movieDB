import React, {useState} from 'react';

const Search = props => {
    const [search, setSearch] = useState(null);

    const handleOnChange = e => setSearch(e.target.value);

    return (
        <div className="ui search popular__header--search centered">
            <div className="ui icon input fluid">
                <input className="prompt" type="text" placeholder="Search" onChange={handleOnChange} />
                <i className="search icon"></i>
            </div>
            <div className="results">
            </div>
        </div>  
    )
}

export default Search;