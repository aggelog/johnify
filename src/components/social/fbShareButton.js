import React from 'react';
import PropTypes from 'prop-types';
import { ShareButtons, generateShareIcon } from 'react-share';

import './common.css';

const FBShareButton = ({ url, title, size }) => {
  const { FacebookShareButton } = ShareButtons;
  const FacebookIcon = generateShareIcon('facebook');

  return (
    <FacebookShareButton
      url={url}
      quote={title}
      style={{ width: size }}
      className="social-buttons_container"
    >
      <FacebookIcon size={size} round />
    </FacebookShareButton>
  )
};

FBShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

FBShareButton.defaultProps = {
  url: '',
  title: '',
  size: 32
};

export default FBShareButton;
