// components/Title.js

import React from 'react';
import PropTypes from 'prop-types';
import './Title.css'; // Import the CSS module

const Title = ({ text, level = 1, children }) => {
  const Tag = `h${level}`; // Dynamic tag based on level

  return (
    <Tag className="ui-title">
      {children || text}
    </Tag>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node
};

export default Title;
