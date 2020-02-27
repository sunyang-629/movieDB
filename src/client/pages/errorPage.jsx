import React from 'react';
import Header from '../components/Header';
import Error from '../components/Error';

const ErrorPage = () => {
  return (
    <div className="error">
      <Header searchPage={0} />
      <Error />
    </div>
  )
};

export default ErrorPage;
