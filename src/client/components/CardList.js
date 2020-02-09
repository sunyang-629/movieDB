import React from 'react';
import Card from './Card';

const CardList = props => {
    return (
        <div className="container">
            <h1>Popular Movies</h1>
            <div class="ui grid">
                <div class="doubling four column row">
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                    <div class="column"><Card /></div>
                </div>
            </div>
        </div>
    )
}

export default CardList;