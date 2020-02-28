import React from 'react';
import Header from '../components/HomePage/Header';
import Error from '../components/PublicPage/Error';

const ErrorPage = () => (
  <div className="error">
    <Header searchPage={0} />
    <Error />
  </div>
);

export default ErrorPage;
