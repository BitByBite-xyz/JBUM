import React, { Component } from 'react';
import Debug from './Debug';

import { NavigationActions } from 'react-navigation';


class DebugContainer extends Component {
  constructor(props) {

    super(props);

  }
  toAccountSetup(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'ProfileStack' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  toAsk(){
    this.props.navigation.navigate('ProfileStack');

  }
  toSettings(){
    this.props.navigation.navigate('Settings');

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
