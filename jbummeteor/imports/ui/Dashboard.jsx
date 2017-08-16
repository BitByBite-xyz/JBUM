import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

import SubHeader from './SubHeader';
import UsersCard from './UsersCard';

 class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor: '#EFEFEF'}}>
            <MuiThemeProvider>
              <AppBar
                title="JBUM Admin"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
              />
            </MuiThemeProvider>
              <div style={{backgroundColor: 'white', width: '22%'}}>
                <SubHeader />
                <UsersCard />
              </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Dashboard;
