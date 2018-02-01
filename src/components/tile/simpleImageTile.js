import React from 'react';
import PropTypes from 'prop-types';

const SimpleImageTile = ({ dims, url }) => (
  <div style={{ width: dims[0], height: dims[1], margin: 'auto', maxWidth: '100%' }}>
    <img style={{ maxWidth: '100%' }} alt="..." src={url} />
  </div>
);

SimpleImageTile.propTypes = {
  url: PropTypes.string.isRequired,
  dims: PropTypes.array.isRequired
};

SimpleImageTile.defaultProps = {
  url: '',
  dims: [100, 100]
};

export default SimpleImageTile;
