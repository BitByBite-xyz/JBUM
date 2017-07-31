import React, { Component, PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import { NavigationActions } from 'react-navigation';

import Settings from './Settings';

import { connectAlert } from '../../components/Alert';


class SettingsContainer extends Component {
  static propTypes = {
    user: PropTypes.object,
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {switchValue: false};
  }

  signOut = () => {
    Meteor.logout(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
  };

  onValueChange(value){
    this.setState({switchValue: value});
  }

  render() {
    return (
      <Settings
        onValueChange={this.onValueChange.bind(this)}
        signOut={this.signOut.bind(this)}
        {...this.state}
      />
    );
  }
}


const ConnectedSettings = createContainer((params) => {

  return {
    user: Meteor.user(),
  };
}, SettingsContainer);

export default connectAlert(ConnectedSettings);
