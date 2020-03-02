import React from 'react';

const Detail = (props) => {
  const { movie } = props;
  return (
    <div className="movie__details">
      <div className="container ui centered">
        <div className="ui stackable two column grid">
          <div className="ten wide column">
            <div className="ui grid">
              <div className="eight wide column">
                <img className="ui fluid image"  alt="poster" />
              </div>
              <div className="eight wide column">
                <h1></h1>
                <p>
                  {' '}
                  ·
                  {' '}
                  {' '}
                  User Score
                </p>
                <p>
                  h
                  {' '}
                  {' '}
                  min
                </p>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <h2>Overview</h2>
            <p className="bolder"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
