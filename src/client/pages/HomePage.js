import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardList from './../components/CardList'
import axios from 'axios'

const Popular = props => {
    const [state, setState] = useState({
        popularMovies: [],
    })

    const fetchPopularData = () => {
        axios('http://localhost:3001/api/popular')
            .then(res => setState({ popularMovies: res.data.data }) )
            .catch(err => console.log(err))
    }
    
    useEffect(fetchPopularData,[]);

    return (
        <div className="popular">
            <header className="popular__header">
                <Header />
            </header>
            <div className="popular__card-list">
                <CardList {...state} />
            </div>
        </div>
    );
}

export default Popular;