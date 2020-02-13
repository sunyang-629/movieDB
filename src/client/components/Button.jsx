import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, onClick } = props;
  return (
    <button type="button" className="ui inverted green basic button" onClick={onClick}>
      {value}
    </button>
  );
};
Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  value: 'Load More',
  onClick: () => {},
};

export default Button;
