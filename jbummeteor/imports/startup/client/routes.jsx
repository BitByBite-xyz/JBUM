import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'

// pages
import LoginPage from '../../ui/pages/Login.jsx'

export const renderRoutes = () => (
  <Router>
    <div>
      <Route  path="/" component={AppContainer}/>
      <Route exact path="/login" component={LoginPage}/>
    </div>
  </Router>
);
