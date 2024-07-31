import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppIcon from '@/Components/icons/AppIcon';
import { ICON_NAMES } from '@/Components/icons/constants';
// import './ClearButton.module.scss';

const ClearButton = ({ text, disabled, onClick }) => {
  const localText = text || 'Clear';

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      className={classNames('ui-clear-button', { 'ui-clear-button--disabled': disabled })}
      onClick={handleClick}
    >
      <AppIcon name={ICON_NAMES.CLEAR} />
      <span className="ui-clear-button_text">{localText}</span>
    </div>
  );
};

ClearButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ClearButton.defaultProps = {
  text: '',
  disabled: false,
  onClick: () => {},
};

export default ClearButton;
