import React, {useState} from 'react';

const Search = props => {
    const [searchValue, setSearchValue] = useState(null);

    const handleOnChange = e => setSearchValue(e.target.value);

    const callSearchFunction = () => props.search(searchValue);

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