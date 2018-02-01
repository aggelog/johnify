import React from 'react';
import PropTypes from 'prop-types';
import { ShareButtons, generateShareIcon } from 'react-share';

import './common.css';

const TwiShareButton = ({ url, title, size }) => {
  const { TwitterShareButton } = ShareButtons;
  const TwitterIcon = generateShareIcon('twitter');

  return (
    <TwitterShareButton
      url={url}
      quote={title}
      style={{ width: size }}
      className="social-buttons_container"
    >
      <TwitterIcon size={size} round />
    </TwitterShareButton>
  )
};

TwiShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.number
};

TwiShareButton.defaultProps = {
  url: '',
  title: '',
  size: 32
};

export default TwiShareButton;
