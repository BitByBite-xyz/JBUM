import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Screens & components
import Settings from '../pages/Settings';
import Users from '../pages/Users';
import UsersProfile from '../pages/UsersProfile';
import Demographics from '../pages/Demographics';
import Responder from '../pages/Responder';
import Flagged from '../pages/Flagged';
import Account from '../pages/Account';
import Dashboard from '../pages/Dashboard';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';


const MainContainer = () => {
  const isAuthenticated = Meteor.userId() !== null
  return (
        <div className="row row-no-padding">
          { isAuthenticated ?
              <MuiThemeProvider>
                <div className="col-sm-12 row-no-padding" style={{backgroundColor: '#EFEFEF'}}>
                  <Header />
                  <div className="col-sm-3 row-no-padding">
                    <SubHeader />
                  </div>
                  <div className="col-sm-9 corrected-row-padding" style={{paddingTop: 15}}>
                    {/* This is where all of screens go to populate the dashboard*/}
                    <Switch>
                      <Route exact path='/' component={Dashboard}/>
                      <Route path='/users' component={Users}/>
                      <Route path='/usersprofile/:id' component={UsersProfile}/>
                      <Route path='/Demographics' component={Demographics}/>
                      <Route path='/responder' component={Responder}/>
                      <Route path='/flagged' component={Flagged}/>
                      <Route path='/account' component={Account}/>
                      <Route path='/settings' component={Settings}/>
                    </Switch>
                  </div>
                </div>
              </MuiThemeProvider> : null}
          </div>
          )
}
export default MainContainer;
