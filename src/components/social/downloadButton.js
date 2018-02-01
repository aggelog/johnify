import React from 'react';
import PropTypes from 'prop-types';

import './common.css';

const DownloadButton = ({ url, size, title }) => (
  <a
    target="_blank"
    href={url}
    download={title}
    className="social-buttons_container"
    style={{ width: size }}
  >
    <svg height="32px" version="1.1" viewBox="0 0 24 24" width="32px"><title />
      <desc />
      <defs />
      <g fill="none" fillRule="evenodd" id="miu" stroke="none" strokeWidth="1">
        <g id="Artboard-1" transform="translate(-251.000000, -155.000000)">
          <g id="slice" transform="translate(215.000000, 119.000000)" />
          <path
            d="M263,170.081066 L259.964466,167.045532 L259.257359,167.752639 L263.5,171.99528 L267.742641,167.752639 L267.035534,167.045532 L263.998437,170.082629 L263.998437,161 L263,161 L263,170.081066 Z M252,166.5 C252,160.148725 257.148725,155 263.5,155 C269.851275,155 275,160.148725 275,166.5 C275,172.851275 269.851275,178 263.5,178 C257.148725,178 252,172.851275 252,166.5 Z"
            fill="#000000" id="circle-arrow_down-download-glyph"
          />
        </g>
      </g>
    </svg>
  </a>
);

DownloadButton.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string
};

DownloadButton.defaultProps = {
  url: '',
  size: 32,
  title: ''
};

export default DownloadButton;
