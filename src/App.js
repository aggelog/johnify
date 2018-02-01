import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Provider } from 'react-redux';

import store from './redux/store';
import Router from './pages/router';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="application-container">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <Router />
      </ReactCSSTransitionGroup>
    </div>
  </Provider>
);

export default App;
