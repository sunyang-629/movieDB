import React from 'react';
import Header from '../components/Header'
import CardList from './../components/CardList'

const Popular = props => {
    return (
        <div className="popular">
            <header className="popular__header">
                <Header />
            </header>
            <div className="popular__cardlist">
                <CardList />
            </div>
        </div>
    );
}

export default Popular;