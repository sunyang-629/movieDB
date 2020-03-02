import React, { useContext } from "react";
import MoviePageContext from '../../redux/contexts/MoviePageContext';

const Header = (props) => {
  const { state } = useContext(MoviePageContext);
  const { goBack } = props;
  return (
    <header className="movie__header" style={{ backgroundImage: `url(${state.movie.backdrop_path})` }} >
      <div role="button" aria-hidden className="back-arrow" onClick={() => goBack()}>
        <i className="arrow left icon" />
      </div>
    </header>
  );
};

export default Header;
