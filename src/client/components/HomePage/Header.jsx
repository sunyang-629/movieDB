import React from 'react';
import header from '../images/Logo.svg';
import Search from './Search';

const Header = () => (
  <header className="popular__header">
    <div className="container">
      <img className="ui tiny centered fluid image" src={header} alt="logo" />
      <Search />
    </div>
  </header>
);
export default Header;
