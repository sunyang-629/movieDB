import React from 'react';

const Header = (props) => {
  const { goBack, movie } = props;
  return (
    <header className="movie__header" >
      <div role="button" aria-hidden className="back-arrow" onClick={() => goBack()}>
        <i className="arrow left icon" />
      </div>
    </header>
  );
};

export default Header;
