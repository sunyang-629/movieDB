import React from 'react';
import Card from './Card';

const CardList = props => {
    return (
        <div className="container">
            <h1>Popular Movies</h1>
            <div className="ui grid">
                <div className="doubling four column row">
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                    <div className="column"><Card /></div>
                </div>
            </div>
        </div>
    )
}

export default CardList;