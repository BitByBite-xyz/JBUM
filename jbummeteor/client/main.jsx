import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import App from '../imports/ui/App.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';

render((
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Dashboard" component={Dashboard}/>
      </Switch>
    </div>
  </Router>
  ), document.getElementById('render-target'));
