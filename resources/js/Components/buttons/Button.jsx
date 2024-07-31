import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ type, isBlock, disabled, onClick, children }) => {
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <button
      className={classNames('ui-button', type, { 'btn-block': isBlock })}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  isBlock: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'primary',
  isBlock: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
