import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import HomePageContext from '../../redux/contexts/HomePageContext';

import {
  INCREMENT_PAGE_NUMBER,
} from '../../redux/actions/moviesAction';

const LoadMoreButton = (props) => {
  const { value } = props;
  const { dispatch } = useContext(HomePageContext);
  return (
    <button type="button" className="ui inverted green basic button" onClick={() => dispatch({ type: INCREMENT_PAGE_NUMBER })}>
      {value}
    </button>
  );
};
LoadMoreButton.propTypes = {
  value: PropTypes.string,
};
LoadMoreButton.defaultProps = {
  value: 'Load More',
};

export default LoadMoreButton;
