import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ErrorPage from '../pages/errorPage';

const Routes = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies/:id" component={MoviePage} />
    <Route exact component={ErrorPage} />
  </>
);

export default Routes;
