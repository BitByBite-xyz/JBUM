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
    <div className="row row-no-padding">
        <MuiThemeProvider>
          <div className="col-sm-12 row-no-padding" style={{backgroundColor: '#EFEFEF'}}>
          <AppBar
            title="JBUM Admin"
            // iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
            <div className="col-sm-3 row-no-padding">
              <SubHeader />
            </div>
            <div className="col-sm-9 corrected-row-padding">
              {/* This is where all of screens go to populate the dashboard*/}
              <div className="col-sm-4 row-no-padding">
                <UsersCard />
              </div>
              <div className="col-sm-4 row-no-padding">
                <UsersCard />
              </div>
              <div className="col-sm-4 row-no-padding">
                <UsersCard />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
    </div>
    )
  }
}

export default Dashboard;
