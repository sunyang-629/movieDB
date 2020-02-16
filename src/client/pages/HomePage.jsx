import React, { useState, useEffect } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import axios from 'axios';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Button from '../components/Button';
import Loader from '../components/Loader';

const Popular = () => {
  const initialPage = 1;
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [loadMoreState, setLoadMoreStat] = useState(false);
  const [popularPage, setPopularPage] = useState(initialPage);
  const [searchPage, setSearchPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoadingState = (page) => {
    if (page === 1) { setIsLoading(true); } else { setIsLoading(false); }
  };

  const fetchPopularData = (page) => {
    setSearchState(false);
    toggleLoadingState(page);
    axios.get(`http://localhost:3001/api/v1/movies?page=${page}`)
      .then((res) => {
        setPopularMovies([...popularMovies, res.data.data]);
        setSearchMovies([]);
        setSearchPage(initialPage);
        setIsLoading(false);
      })
      .catch(() => setHasError(true));
  };

  const fetchSearchData = (searchValue, page) => {
    setSearchState(true);
    toggleLoadingState(page);
    if (!searchValue) {
      setPopularPage(initialPage);
      fetchPopularData(initialPage);
    } else {
      axios.get(`http://localhost:3001/api/v1/movies?keyword=${searchValue}&page=${page}`)
        .then((res) => {
          if (loadMoreState) {
            setSearchMovies([...searchMovies, res.data.data]);
            setLoadMoreStat(false);
          } else {
            setSearchPage(initialPage);
            setSearchMovies([res.data.data]);
          }
          setIsLoading(false);
          setPopularMovies([]);
        })
        .catch(() => setHasError(true));
    }
  };

  const loadMore = () => {
    if (searchState) {
      setLoadMoreStat(true);
      return setSearchPage((prevSearchPage) => prevSearchPage + 1);
    } return setPopularPage((prevPopularPage) => prevPopularPage + 1);
  };

  const callFetchPopularData = () => fetchPopularData(popularPage);

  useEffect(callFetchPopularData, [popularPage]);


  return (
    <div className="popular">
      <header className="popular__header">
        <Header
          fetchSearchData={fetchSearchData}
          searchPage={searchPage}
          loadMoreState={loadMoreState}
        />
      </header>
      <div className="popular__card-list">
        {isLoading ? <div className="loading"><Loader /></div>
          : (
            <CardList
              searchState={searchState}
              popularMovies={searchState
                ? searchMovies
                : popularMovies}
            />
          )}
        <div>
          <ScrollUpButton />
        </div>
        <div className="button--more">
          <Button onClick={loadMore} value="Load More" />
        </div>
      </div>
    </div>
  );
};

export default Popular;
