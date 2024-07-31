import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppIcon from '@/components/icons/AppIcon';
import './IconButton.module.scss';

const IconButton = ({ name, text, height, disabled, onClick }) => {
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <button
      className={classNames('ui-icon-button')}
      title={text}
      disabled={disabled}
      onClick={handleClick}
    >
      <AppIcon height={height} name={name} text={text} />
    </button>
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  text: '',
  height: '24px',
  disabled: false,
  onClick: () => {},
};

export default IconButton;
