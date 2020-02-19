import React from 'react';
import PropType from 'prop-types';
import header from './images/Logo.svg';
import Search from './Search';

const Header = (props) => {
  // const { fetchSearchData, searchPage, loadMoreState } = props;
  const { searchPage, loadMoreState } = props;
  return (
    <div className="container">
      <img className="ui tiny centered fluid image" src={header} alt="logo" />
      {searchPage
        ? (
          <Search
            searchPage={searchPage}
          />
        )
        : null}
    </div>
  );
};
Header.propTypes = {
  fetchSearchData: PropType.func,
  searchPage: PropType.number,
  loadMoreState: PropType.bool,
};
Header.defaultProps = {
  fetchSearchData: () => { },
  searchPage: 1,
  loadMoreState: false,
};
export default Header;
