import React, { useReducer } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import axios from 'axios';
import Header from '../components/HomePage/Header';
import CardList from '../components/HomePage/CardList';
import LoadMoreButton from '../components/HomePage/LoadMoreButton';
import Loader from '../components/PublicPage/Loader';

export const FetchSearchContext = React.createContext();

const HomePage = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

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
