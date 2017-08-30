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
    const { currentUser } = this.props;
    return (
      <Paper style={{marginLeft: '1.5%', marginRight: '1.5%', height: 89, width: '97%'}}>
          <div style={{float: 'left', marginLeft: 15}}><h3>Welcome, {currentUser ? currentUser.username : ''}</h3></div>
          <div style={{float: 'right', paddingTop: 28, marginRight: 20}}><RaisedButton label="logout" primary={true} onClick={this.logout} /></div>
      </Paper>
    )
  }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('userList');
  return {
    currentUser:  Meteor.users.findOne({ _id: Meteor.userId() }),
    userDataReady: handle.ready()
  }
}, Account);
