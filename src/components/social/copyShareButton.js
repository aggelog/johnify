import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

import './common.css';

const CopyButton = ({ url, size }) => (
  <CopyToClipboard text={url}>
    <div className="social-buttons_container" style={{ width: size }}>
      <svg enableBackground="new 0 0 800 800" version="1.1" viewBox="0 0 800 800" xmlSpace="preserve"
           xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_1">
          <path
            d="M771.9,400c0,205.3-166.6,371.9-371.9,371.9S28.1,605.3,28.1,400S194.7,28.1,400,28.1   S771.9,194.7,771.9,400z"
            fill="#4DB6AC"
          />
        </g>
        <g id="Layer_2">
          <g>
            <circle cx="470.9" cy="270.2" fill="none" r="70.6" stroke="#FFFFFF" strokeLinecap="round"
                    strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" />
            <circle cx="257.4" cy="416.5" fill="none" r="70.6" stroke="#FFFFFF" strokeLinecap="round"
                    strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" />
            <circle cx="490.3" cy="529.8" fill="none" r="70.6" stroke="#FFFFFF" strokeLinecap="round"
                    strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" />
            <line fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                  strokeWidth="16" x1="314.7" x2="413.7" y1="375.2" y2="311.7" />
            <line fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                  strokeWidth="16" x1="313.7" x2="421.8" y1="459.1" y2="512.4" />
          </g>
        </g>
      </svg>
    </div>
  </CopyToClipboard>
);

CopyButton.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.number
};

CopyButton.defaultProps = {
  url: '',
  size: 32
};

export default CopyButton;
