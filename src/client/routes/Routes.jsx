import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ErrorPage from '../pages/ErrorPage1';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies/:id" component={MoviePage} />
    <Route exact component={ErrorPage} />
  </Switch>
);

export default Routes;
