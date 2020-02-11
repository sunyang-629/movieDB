import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardList from './../components/CardList'
import axios from 'axios'

const Popular = props => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchPopularData = () => {
        axios.get(`http://localhost:3001/api/popular?page=${page}`)
            .then(res => setPopularMovies(res.data.data))
            .catch(err => console.log(err))
    }
    
    useEffect(fetchPopularData, []);
    
    return (
        <div className="popular">
            <header className="popular__header">
                <Header />
            </header>
            <div className="popular__card-list">
                <CardList popularMovies={popularMovies} />
            </div>
        </div>
    );
}

export default Popular;