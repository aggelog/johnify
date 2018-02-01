import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';

import './styles.css';

const ShowMore = ({ showMore }) => (
  <Row className="show-more__row">
    <div onClick={showMore} className="show-more__button show-more__light-shadow">
      Give me more
    </div>
  </Row>
);

ShowMore.propTypes = {
  showMore: PropTypes.func.isRequired
};

export default ShowMore;
