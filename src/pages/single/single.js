import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import FacebookShareButton from '../../components/social/fbShareButton';
import TwitterShareButton from '../../components/social/twitterShareButton';
import SimpleImageTile from '../../components/tile/simpleImageTile';
import CopyShareButton from '../../components/social/copyShareButton';
import DownloadButton from '../../components/social/downloadButton';
import NotFoundGif from '../../components/NotFoundGif';

import './single.css';

class Single extends Component {

  componentWillMount() {
    const { getSingleGif, match } = this.props;
    getSingleGif(match.params.id);
  }

  render() {
    const { error, gif } = this.props;
    const { dims, url, title } = gif;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12} xl={12} className="single-page__title-section">
            <h3>{title}</h3>
          </Col>
          { error ? this.renderErrorScreen() : this.renderSingleSection(dims, url, title)}
        </Row>
      </Grid>
    )
  }

  renderErrorScreen = () => (
    <Col xs={12} md={12} lg={12} xl={12}>
      <div>
        <NotFoundGif />
      </div>
    </Col>
  );

  renderSingleSection = (dims, url, title) => (
    <Col xs={12} md={12} lg={12} xl={12}>
      <SimpleImageTile dims={dims} url={url} />
      <div className="single-page__action-bar">
        <FacebookShareButton url={window.location.href} title={title} />
        <TwitterShareButton url={window.location.href} title={title} />
        <CopyShareButton url={window.location.href} title={title} />
        <DownloadButton url={url} title={title} />
      </div>
    </Col>
  );
}

Single.propTypes = {
  getSingleGif: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  gif: PropTypes.shape({
    dims: PropTypes.array,
    url: PropTypes.string,
    preview: PropTypes.string,
    title: PropTypes.string
  }),
  error: PropTypes.bool
};

Single.defaultProps = {
  gif: {
    dims: new Array([1, 1]),
    title: ''
  },
  error: true
};

export default Single;
