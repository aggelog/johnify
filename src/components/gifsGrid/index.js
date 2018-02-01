import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-flexbox-grid';

import ShowMore from '../../containers/showMore';
import Tile from '../tile';

const GifsGrid = ({ gifs }) => {
  const { byId, allIds } = gifs;
  return (
    <div>
      <Row>
        {allIds.map(gifId => <Tile {...byId[gifId]} key={`gif${gifId}`} />)}
      </Row>
      { allIds.length > 0 && <ShowMore /> }
    </div>
  )
};

GifsGrid.propTypes = {
  gifs: PropTypes.shape({
    byId: PropTypes.object.isRequired,
    allIds: PropTypes.array.isRequired
  })
};

export default GifsGrid;
