import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import { FetchSearchContext } from '../../pages/HomePage';
import HomePageContext from '../../redux/contexts/HomePageContext';


import {
  INPUT_SEARCH_VALUE,
} from '../../redux/actions/moviesAction';

const Search = (props) => {
  const { state, dispatch } = useContext(HomePageContext);

  // const [searchValue, setSearchValue] = useState(null);
  // const { searchPage } = props;
  // const { fetchSearchData, loadMoreState } = useContext(FetchSearchContext);

  // const handleOnChange = (e) => setSearchValue(e.target.value);

  // const callSearchFunction = () => (loadMoreState
  //   ? fetchSearchData(searchValue, searchPage)
  //   : fetchSearchData(searchValue, 1));

  // useEffect(callSearchFunction, [searchPage, searchValue]);

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
