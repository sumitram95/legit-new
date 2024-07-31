import React from 'react';
import PropTypes from 'prop-types';
import { ICON_NAMES } from '@/Components/icons/constants';
// import './TextButton.scss'; // Import the SCSS file for styles

const TextButton = ({ text, disabled, onClick }) => {
  // Computed property equivalent in React
  const localText = text;

  // Click handler
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <button
      className="ui-text-button"
      disabled={disabled}
      onClick={handleClick}
    >
      {localText}
    </button>
  );
};

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

TextButton.defaultProps = {
  disabled: false
};

export default TextButton;
