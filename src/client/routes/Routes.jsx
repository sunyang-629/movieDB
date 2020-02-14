import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';

const Routes = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/movies/:id" component={MoviePage} />
  </>
);

export default Routes;
