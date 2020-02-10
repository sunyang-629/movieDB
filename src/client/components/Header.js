import React from 'react';
import header from './images/Logo.svg';
import Search from './Search'
// import {image}

const Header = props => {
    return (
        <div className="container">
            <img className="ui tiny centered fluid image" src={header} alt="logo" />
            <Search />
        </div>
    )
}

export default Header;