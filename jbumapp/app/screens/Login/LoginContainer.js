/*
This container is what is acctually returned when you call this directory (look
in index.js) and signin.js is implemented in the return statement but the func
props (signin and stuff) are done from here because its better to separate the
meteor stuff and app logic w RN stuff
 */

import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import Login from './Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      confirmPasswordVisible: false,
      error: null,
    };
  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  componentDidMount() {

  }

  handleError(error) {
    if (this.mounted) {
      this.setState({ error });
    }
  }

  validInput(overrideConfirm) {
    const { username, password, confirmPassword, confirmPasswordVisible } = this.state;
    let valid = true;

    if (username.length === 0 || password.length === 0) {
      this.handleError('Username and password cannot be empty.');
      valid = false;
    }

    if (!overrideConfirm && confirmPasswordVisible && password !== confirmPassword) {
      this.handleError('Passwords do not match.');
      valid = false;
    }

    if (valid) {
      this.handleError(null);
    }

    return valid;
  }

  handleSignIn() {

    if (this.validInput(true)) {
      const { username, password } = this.state;
      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          this.handleError(err.reason);
        }
        else {
          this.props.navigation.navigate('Tabs');
        }
      });

    }
  }

  /*handleCreateAccount() {
    const { username, password, confirmPasswordVisible } = this.state;

    var CustomLayoutSpring = {
        duration: 500,
        create: {
          type: LayoutAnimation.Types.spring,
          property: LayoutAnimation.Properties.scaleXY,
          springDamping: 0.7,
        },
        update: {
          type: LayoutAnimation.Types.spring,
          springDamping: 0.7,
        },
    };

    if (confirmPasswordVisible && this.validInput()) {
      Accounts.createUser({ username, password }, (err) => {
        if (err) {
          this.handleError(err.reason);
        } else {
          // hack because react-native-meteor doesn't login right away after sign in
          this.handleSignIn();
        }
      });
    } else {
      LayoutAnimation.configureNext(CustomLayoutSpring);
      this.setState({ confirmPasswordVisible: true });
    }
  }*/

  render() {
    return (
      <Login
        updateState={this.setState.bind(this)}
        signIn={this.handleSignIn.bind(this)}
        {...this.state}
      />
    );
  }
}

export default LoginContainer;
