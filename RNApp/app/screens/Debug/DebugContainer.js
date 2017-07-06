import React, { Component } from 'react';
import Debug from './Debug';

import { NavigationActions } from 'react-navigation';


class DebugContainer extends Component {
  constructor(props) {

    super(props);
  }
  toAccountSetup(){
    this.props.navigation.navigate('AccountSetup');

  }

  toAsk(){
    this.props.navigation.navigate('Reply');


  }
  toSettings(){
    this.props.navigation.navigate('Settings');
    console.log("NAV: ", this.props.navigation);

  }

  render() {
    return (
      <Debug
        toAccountSetup={this.toAccountSetup.bind(this)}
        toAsk={this.toAsk.bind(this)}
        toSettings={this.toSettings.bind(this)}
      />
    );
  }
};

export default DebugContainer;
