import React from 'react';
import PropType from 'prop-types';
import header from '../images/Logo.svg';
import Search from './Search';

const Header = (props) => {
  // const { searchPage } = props;
  return (
    <header className="popular__header">
      <div className="container">
        <img className="ui tiny centered fluid image" src={header} alt="logo" />
          <Search />
      </div>
    </header>
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
