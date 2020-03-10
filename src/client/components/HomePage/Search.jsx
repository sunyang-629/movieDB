import React, { useContext } from 'react';
import HomePageContext from '../../redux/contexts/HomePageContext';

import {
  INPUT_SEARCH_VALUE,
} from '../../redux/actions/moviesAction';

const Search = () => {
  const { state, dispatch } = useContext(HomePageContext);

  return (
    <div className="ui search popular__header--search centered">
      <div className="ui icon input fluid">
        <input className="prompt" value={state.keyword} type="text" placeholder="Search" onChange={(e) => dispatch({ type: INPUT_SEARCH_VALUE, value: e.target.value })} />
        <i className="search icon" />
      </div>
      <div className="results" />
    </div>
  );
};

export default Search;
