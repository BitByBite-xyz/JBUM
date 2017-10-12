import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Screens & components
import Users from '../pages/Users';
import UsersProfile from '../pages/UsersProfile';
import Demographics from '../pages/Demographics';
import Flagged from '../pages/Flagged';
import Account from '../pages/Account';
import Responder from '../pages/Responder';
import Dashboard from '../pages/Dashboard';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import ResponderTabs from '../components/ResponderTabs.jsx';

const MainContainer = (props) => {
  const isAuthenticated = Meteor.userId() !== null;
  const isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin'], 'default-group');
  return (
        <div className="row row-no-padding" style={{marginBottom: 0, paddingBottom: 0}}>
          { isAuthenticated ?
              <MuiThemeProvider>
                <div className="col-sm-12 row-no-padding" style={{backgroundColor: '#EFEFEF'}}>
                  <Header />
                  {props.pathname.includes('responder')?<ResponderTabs push={props.push}/>:null}
                  {/*<div className="col-sm-3 row-no-padding">
                    <SubHeader />
                  </div>*/}
                  <div  style={{paddingTop: 10}}>
                    {/* This is where all of screens go to populate the dashboard*/}
                    <Switch>
                      <Route exact path='/' component={Dashboard}/>
                      <Route path='/users' component={Users}/>
                      <Route path='/usersprofile/:id' component={UsersProfile}/>
                      <Route path='/Demographics' component={Demographics}/>
                      <Route path='/flagged' component={Flagged}/>
                      <Route path='/responder' component={Responder}/>
                      <Route path='/account' component={Account}/>
                    </Switch>
                  </div>
                  <Footer />
                </div>
              </MuiThemeProvider> : null}
          </div>
          )
}
export default MainContainer;
