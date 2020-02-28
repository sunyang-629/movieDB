import React from 'react';

const Header = (props) => {
  const { goBack, movie } = props;
  return (
    <header className="movie__header" style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
      <div role="button" aria-hidden className="back-arrow" onClick={() => goBack()}>
        <i className="arrow left icon" />
      </div>
    </header>
  )
}

export default Header;