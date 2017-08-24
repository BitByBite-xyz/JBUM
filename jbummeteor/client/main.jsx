import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// add render routes function
import { renderRoutes } from '../imports/startup/client/routes.jsx'

// render routes after DOM has loaded
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
