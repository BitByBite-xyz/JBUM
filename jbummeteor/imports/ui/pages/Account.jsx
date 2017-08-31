import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
//Screen components

class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
      snackBarResponse: ''
    });
  };

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

  clearPasswordUpdate(event) {
    event.preventDefault();
    this.refs.currentPassword.value = '';
    this.refs.newPassword.value = '';
    this.refs.confirmPassword.value = '';
  }

  changeUserPassword(event) {
    event.preventDefault();
    const currentPassword = this.refs.currentPassword.value;
    const newPassword = this.refs.newPassword.value;
    const confirmPassword = this.refs.confirmPassword.value;
    console.log(currentPassword + ' ' + newPassword + ' ' + confirmPassword);
    if(newPassword == confirmPassword) {
      Accounts.changePassword(currentPassword, newPassword, function (err) {
        if (!err) {
          this.handleTouchTap();
          console.log('password changed');
          this.setState({
            snackBarResponse: 'Password succesfully updated'
          });
        } else {
          this.handleTouchTap();
          this.setState({
            snackBarResponse: err
          });
        }
      });
    } else {
      this.handleTouchTap();
      this.setState({
        snackBarResponse: 'Passwords don\'t match'
      });
    }
    this.refs.currentPassword.value = '';
    this.refs.newPassword.value = '';
    this.refs.confirmPassword.value = '';
  }

  render() {
    const { snackBarResponse } = this.state;
    const { currentUser } = this.props;

    return (
      <div>
        <Paper style={{marginLeft: '1.5%', marginRight: '1.5%', height: 89, width: '97%'}}>
            <div style={{float: 'left', marginLeft: 15}}><h3>Welcome, {currentUser ? currentUser.username: ''}</h3></div>
            <div style={{float: 'right', paddingTop: 28, marginRight: 20}}><RaisedButton label="logout" primary={true} onClick={this.logout} /></div>
        </Paper>
        <div className="col-sm-12 row-no-padding" style={{marginTop: 20}}>
          <Paper className="col-sm-12 row-no-padding">
            <div style={{backgroundColor: '#E8E8E8'}}><p style={{color: '#8B8B8B', paddingTop: 8, marginLeft: '4%', paddingBottom: 5, fontSize: 32}}>Change Password</p></div>
            <div style={{paddingLeft: 15, paddingRight: 15, marginTop: 18, marginBottom: 18}}>
              <form onSubmit={this.changeUserPassword.bind(this)}>
                <input type="password" ref={"currentPassword"} placeholder="Current Password" style={{width: '31%', marginRight: '2%'}} required />
                <input type="password" ref="newPassword" placeholder="New Password" style={{width: '31%', marginRight: '2%'}} required />
                <input type="password" ref="confirmPassword" placeholder="Confirm Password" style={{width: '31%'}} required />
                  <div style={{marginBottom: 24}}>
                    <RaisedButton label="Clear" onClick={this.clearPasswordUpdate.bind(this)} style={{marginRight: 15}}/>
                    <RaisedButton type="submit" label="Change Password" primary={true} />
                </div>
              </form>
            </div>
          </Paper>
        </div>
          <Snackbar
            open={this.state.open}
            message={snackBarResponse}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
      </div>
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
