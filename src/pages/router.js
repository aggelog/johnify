import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../containers/home';
import Single from '../containers/single';
import NoMatch from './nomatch';
import Header from '../components/header';

const router = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Single} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default router;
