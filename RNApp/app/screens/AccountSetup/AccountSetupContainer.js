 import React, { Component } from 'react';
import { LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import AccountSetup from './AccountSetup';

class AccountSetupContainer extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;

  }

  componentWillMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  next() {

  }



  render() {
    return (

      <AccountSetup/>



    );
  }
}

export default AccountSetupContainer;
