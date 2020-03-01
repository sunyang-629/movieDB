import React, { useReducer } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import Header from '../components/HomePage/Header';
import CardList from '../components/HomePage/CardList';
import LoadMoreButton from '../components/HomePage/LoadMoreButton';
import Loader from '../components/PublicPage/Loader';
import { reducer, initialState } from '../redux/reducers/moviesReducer';
import { fetchMovies } from '../redux/actions/moviesAction';

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // dispatch(fetchMovies())

  return (
    <div className="popular">
        <Header />
      <div className="popular__card-list">
        <CardList />
        <ScrollUpButton />
        <div className="button--more">
          <LoadMoreButton value="Load More" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
