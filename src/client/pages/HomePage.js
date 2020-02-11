import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardList from './../components/CardList'
import Button from './../components/Button'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import axios from 'axios'

const Popular = props => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchPopularData = () => {
        axios.get(`http://localhost:3001/api/popular?page=${page}`)
            .then(res => setPopularMovies([...popularMovies, res.data.data]))
            .catch(err => console.log(err))
    }

    const loadMore = () => {
        setPage(page + 1);
    }

    const topFunction = () => {
        document.body.animate({ scrollTop: 0 }, 1000); // For Safari
        document.documentElement.animate({ scrollTop: 0 }, 1000); // For Chrome, Firefox, IE and Opera
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;
    }
    
    useEffect(fetchPopularData, [page]);
    
    return (
        <div className="popular">
            <header className="popular__header">
                <Header />
            </header>
            <div className="popular__card-list">
                <CardList popularMovies={popularMovies} />
                <div>
                    <ScrollUpButton style={{"bottom":"120px"}} />
                </div>
                <div className="button--more">
                    <Button className="ui inverted green basic button" onClick={loadMore} value="Load More" />
                </div>
            </div>
        </div>
    );
}

export default Popular;