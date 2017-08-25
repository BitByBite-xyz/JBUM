import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Screens & components
import Settings from './Settings';
import Users from './Users';
import Survey from './Survey';
import Flagged from './Flagged';
import Account from './Account';
import Dashboard from './Dashboard';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';



export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    console.log(loggedIn);
    return (
      <div className="row row-no-padding">
            <MuiThemeProvider>
              <div className="col-sm-12 row-no-padding" style={{backgroundColor: '#EFEFEF'}}>
                <Header />
                <div className="col-sm-3 row-no-padding">
                  <SubHeader />
                </div>
                <div className="col-sm-9 corrected-row-padding" style={{paddingTop: 15}}>
                  {/* This is where all of screens go to populate the dashboard*/}
                  <Switch>
                    <Route path='/' component={Dashboard}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/survey' component={Survey}/>
                    <Route path='/flagged' component={Flagged}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/settings' component={Settings}/>
                  </Switch>
                </div>
              </div>
            </MuiThemeProvider>
        </div>
    );
  }
}
