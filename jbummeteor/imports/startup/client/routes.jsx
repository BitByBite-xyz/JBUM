import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx'
import MainContainer from '../../ui/containers/MainContainer.jsx'

// pages
import LoginPage from '../../ui/pages/Login.jsx'

export const renderRoutes = () => (
  <Router>
    <div>
      <Route exact path="/login" component={LoginPage}/>
      <Route path="/" component={AppContainer}/>
    </div>
  </Router>
);
