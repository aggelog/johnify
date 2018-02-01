import React from 'react';
import PropTypes from 'prop-types';

import './tileHeader.css';

const TileHeader = ({ title }) => (
  <div className="tile-header__container">
    <div className="title-header__title">
      {title === '' ? 'Untitled' : title}
    </div>
  </div>
);

TileHeader.propTypes = {
  title: PropTypes.string.isRequired
};

TileHeader.defaultProps = {
  title: 'Untitled'
};

export default TileHeader;
