import React from 'react';
import header from './images/Logo.svg';
import Search from './Search'
// import {image}

function Header() {
    return (
        <div>
            <img className="ui tiny centered fluid image" src={header} alt="logo" />
            <Search className="App-header-search centered" />
        </div>
    )
}

export default Header;