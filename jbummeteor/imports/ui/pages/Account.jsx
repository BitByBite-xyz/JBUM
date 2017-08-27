import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
//Screen components

class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: ''
    };
    Meteor.call('loggedUser', (err, response) => {
      this.setState({currentUser: response});
    });
  }
  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            window.location.reload();
        }
    });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Paper style={{marginLeft: '1.5%', marginRight: '1.5%'}}>
          <h1>Account:</h1><p>{currentUser.username}</p>
          <RaisedButton label="logout" onClick={this.logout} />
        </Paper>
      </div>
    )
  }
}
export default Account;
