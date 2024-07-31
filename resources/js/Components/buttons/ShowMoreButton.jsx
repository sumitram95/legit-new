import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppButton from '@/components/buttons/AppButton';
import AppIcon from '@/components/icons/AppIcon';
import AppSpinner from '@/components/spinner/AppSpinner';
import { BUTTON_TYPES, ICON_NAMES } from '@/constants';
// import './ShowMoreButton.module.scss';

const ShowMoreButton = ({ text, disabled, isBlock, isLoading, onClick }) => {
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <AppButton
      type={BUTTON_TYPES.PRIMARY}
      className={classNames('ui-show-more-button', { isLoading })}
      isBlock={isBlock}
      disabled={isLoading || disabled}
      onClick={handleClick}
    >
      {!isLoading ? (
        <>
          {text} <AppIcon className="ui-show-more-button_icon" name={ICON_NAMES.SHOW_MORE} />
        </>
      ) : (
        <AppSpinner />
      )}
    </AppButton>
  );
};

ShowMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ShowMoreButton.defaultProps = {
  disabled: false,
  isBlock: false,
  isLoading: false,
};

export default ShowMoreButton;
