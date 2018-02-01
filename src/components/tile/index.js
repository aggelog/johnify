import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { Redirect } from 'react-router'
import TileMedia from './tileMedia';
import TileHeader from './tileHeader';

import './styles.css';

class Tile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showGif: false,
      navigate: false
    }
  }

  onTileClick = () => {
    this.setState({ navigate: true });
  };

  render() {
    const { gif, title, id } = this.props;
    if (this.state.navigate) {
      return <Redirect to={`/${id}`} push />
    }
    return (
      <Col xs={12} md={6} lg={4} xl={3}>
        <div
          onClick={this.onTileClick}
          onMouseOver={() => this.setState({ showGif: true })}
          onMouseOut={() => this.setState({ showGif: false })}
          className="tile__container tile__shadow"
        >
          <TileHeader title={title} />
          <TileMedia
            showGif={this.state.showGif}
            previewUrl={gif.preview}
            url={gif.url}
          />
        </div>
      </Col>
    )
  }
}

Tile.propTypes = {
  gif: PropTypes.shape({
    dims: PropTypes.array,
    preview: PropTypes.string,
    url: PropTypes.string
  }),
  id: PropTypes.string,
  title: PropTypes.string
};

export default Tile;
