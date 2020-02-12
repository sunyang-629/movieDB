import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardList from './../components/CardList'
import Button from './../components/Button'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import axios from 'axios'

const Popular = props => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchState, setSearchState] = useState(false);
    const [page, setPage] = useState(1);

    const fetchPopularData = () => {
        axios.get(`http://localhost:3001/api/popular?page=${page}`)
            .then(res => setPopularMovies([...popularMovies, res.data.data]))
            .catch(err => console.log(err))
    }

    const fetchSearchDate = searchValue => {
        axios.get(`http://localhost:3001/api/search?key_word=${searchValue}`)
            .then(res => {
                if (!searchState)
                {
                    setPopularMovies([]);
                    setSearchState(true);
                }
                setPopularMovies([...popularMovies, res.data.data])
            })
            .catch(err => console.log(err))
    }

    const loadMore = () => {
        setPage(page + 1);
    }

    useEffect(fetchPopularData, [page]);
    
    return (
        <div className="popular">
            <header className="popular__header" fetchSearchDate={fetchSearchDate}>
                <Header />
            </header>
            <div className="popular__card-list">
                <CardList popularMovies={popularMovies} />
                <div>
                    <ScrollUpButton />
                </div>
                <div className="button--more">
                    <Button className="ui inverted green basic button" onClick={loadMore} value="Load More" />
                </div>
            </div>
        </div>
    );
}

export default Popular;