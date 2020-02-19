import React, { useState, useEffect } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import axios from 'axios';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Button from '../components/Button';
import Loader from '../components/Loader';

export const FetchSearchContext = React.createContext();

const Popular = () => {
  const initialPage = 1;
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [loadMoreState, setLoadMoreStat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [page, setPage] = useState({ popularPage: initialPage, searchPage: initialPage });
  useEffect(() => {
    const callFetchPopularData = () => fetchPopularData(page.popularPage);
    callFetchPopularData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.popularPage]);

  const toggleLoadingState = (pagenum) => {
    if (pagenum === 1) { setIsLoading(true); } else { setIsLoading(false); }
  };

  const fetchPopularData = (pagenum) => {
    if (page.searchPage > 1) {
      setPage((prevPage) => ({ popularPage: initialPage, searchPage: prevPage.searchPage }));
    } else {
      setSearchState(false);
      toggleLoadingState(pagenum);
      axios.get(`http://localhost:3001/api/v1/movies?page=${pagenum}`)
        .then((res) => {
          setPopularMovies([...popularMovies, res.data.data]);
          setSearchMovies([]);
          setIsLoading(false);
        })
        .catch(() => setHasError(true));
    }
  };

  const fetchSearchData = (searchValue, pagenum) => {
    setSearchState(true);
    toggleLoadingState(pagenum);
    if (!searchValue) {
      setPage({ popularPage: initialPage, searchPage: initialPage });
      fetchPopularData(initialPage);
    } else {
      axios.get(`http://localhost:3001/api/v1/movies?keyword=${searchValue}&page=${pagenum}`)
        .then((res) => {
          if (loadMoreState) {
            setSearchMovies([...searchMovies, res.data.data]);
            setLoadMoreStat(false);
          } else {
            setPage({ ...page, searchPage: initialPage });
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
      return setPage((prevPage) => ({
        popularPage: initialPage,
        searchPage: prevPage.searchPage + 1,
      }));
    }
    return setPage((prevPage) => ({
      popularPage: prevPage.popularPage + 1,
      searchPage: initialPage,
    }));
  };

  return (
    <div className="popular">
      <header className="popular__header">
        <FetchSearchContext.Provider value={{fetchSearchData,loadMoreState}} >
          <Header
          searchPage={page.searchPage}
          />
        </FetchSearchContext.Provider>
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
