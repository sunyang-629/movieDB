import React from 'react';
import Header from '../components/Header';

const ErrorPage = () => (
  <div className="error">
    <header className="error__header">
      <Header searchPage={0} />
    </header>
    <div className="error__body">
      <div className="container">
        <h1>Sorry, the page you are looking for does not exist</h1>
        <h2>Please check the address and try again.</h2>
      </div>
    </div>
  </div>
);

export default ErrorPage;
