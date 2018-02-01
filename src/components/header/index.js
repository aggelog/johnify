import React from 'react';

import './styles.css';
import '../utils/fadeInFromNone.css';

const Header = () => (
  <div className="application-header__container fadeIn">
    <h2>
      <a className="application-header__link" href="/">
        Johnify
      </a>
    </h2>
  </div>
);

export default Header;
