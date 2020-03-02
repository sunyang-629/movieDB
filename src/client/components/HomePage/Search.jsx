import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import { FetchSearchContext } from '../../pages/HomePage';
import HomePageContext from '../../redux/contexts/HomePageContext';


import {
  INPUT_SEARCH_VALUE,
} from '../../redux/actions/moviesAction';

const Search = () => {
  const { state, dispatch } = useContext(HomePageContext);

  return (
    <div className="ui search popular__header--search centered">
      <div className="ui icon input fluid">
        <input className="prompt" value={state.keyword} type="text" placeholder="Search" onChange={(e) => dispatch({type:INPUT_SEARCH_VALUE, value:e.target.value})} />
        <i className="search icon" />
      </div>
      <div className="results" />
    </div>
  );
};
Search.propTypes = {
  searchPage: PropType.number,
  loadMoreState: PropType.bool,
  fetchSearchData: PropType.func,
};
Search.defaultProps = {
  searchPage: 1,
  loadMoreState: false,
  fetchSearchData: () => {},
};
export default Search;
