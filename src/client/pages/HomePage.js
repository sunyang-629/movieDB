import React from 'react';
import Header from '../components/Header'
import CardList from './../components/CardList'

function Popular(props) {
    return (
        <div className="popular">
            <header className="popular-header">
                <Header />
            </header>
            <div className="cardlist">
                <CardList />
            </div>
        </div>
    );
}

export default Popular;