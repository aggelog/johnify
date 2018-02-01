import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../loading';

import './tileMedia.css';

class TileMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  imageLoaded = () => {
    this.setState({ loading: false })
  };

  componentWillReceiveProps({ showGif }) {
    if (!this.props.showGif && showGif) {
      this.setState({ loading: true });
    }
  };

  render() {
    const { url, previewUrl, showGif } = this.props;
    const loadingImageClass = this.state.loading
      ? this.props.showGif
        ? "tile-media__image-gif-loading"
        : "tile-media__image-loading"
      : "tile-media__image-loaded";
    return (
      <div className="tile-media__container">
        <div className="tile-media__item-inside">
          {this.state.loading && (
            <div className="tile-media__loading-container">
              <Loading />
            </div>
          )}
          <img
            alt="..."
            className={`tile-media__image ${loadingImageClass}`}
            src={showGif ? url : previewUrl}
            onLoad={this.imageLoaded}
          />
        </div>
      </div>
    )
  }
}

TileMedia.propTypes = {
  previewUrl: PropTypes.string,
  url: PropTypes.string,
  showGif: PropTypes.bool
};

export default TileMedia;
