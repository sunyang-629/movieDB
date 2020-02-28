import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreButton = (props) => {
  const { value, onClick } = props;
  return (
    <button type="button" className="ui inverted green basic button" onClick={onClick}>
      {value}
    </button>
  );
};
LoadMoreButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
LoadMoreButton.defaultProps = {
  value: 'Load More',
  onClick: () => {},
};

export default LoadMoreButton;
