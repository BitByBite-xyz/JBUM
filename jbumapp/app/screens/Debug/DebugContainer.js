import React, { Component } from 'react';
import Debug from './Debug';

import { NavigationActions } from 'react-navigation';


class DebugContainer extends Component {
  constructor(props) {

    super(props);
  }
  toInbox(){
    this.props.navigation.navigate('Inbox');

  }

  toBarcodeScanner(){
    this.props.navigation.navigate('BarcodeScanner');

  }
  toSettings(){
    this.props.navigation.navigate('Settings');
    console.log("NAV: ", this.props.navigation);

  }
  toAccountSetup(){
    this.props.navigation.navigate('AccountSetup');
  }

  render() {
    return (
      <Debug
        toInbox={this.toInbox.bind(this)}
        toBarcodeScanner={this.toBarcodeScanner.bind(this)}
        toSettings={this.toSettings.bind(this)}
        toAccountSetup={this.toAccountSetup.bind(this)}
      />
    );
  }
};

export default DebugContainer;
