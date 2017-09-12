import React, { Component, PropTypes } from 'react';
import { Alert, Linking } from 'react-native'
import Meteor, { createContainer } from 'react-native-meteor';

import { NavigationActions } from 'react-navigation';

import Settings from './Settings';


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
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: 'WelcomeStack' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
  };

  onValueChange(value){
    this.setState({switchValue: value});
  }

  handleAccountPress(){
    const username = this.props.user.username;
    Alert.alert('Your Anonomized Username: ' + username,
                "Your username will only be used for logging in. It will not be displayed anywhere");
  }

  handleReportProblemPress(){
    Linking.openURL('mailto:contact@bitbybite.co?subject=Reportig a problem with JBUM &body=your problem here')
  }

  render() {
    return (
      <Settings
        onValueChange={this.onValueChange.bind(this)}
        signOut={this.signOut.bind(this)}
        handleAccountPress={this.handleAccountPress.bind(this)}
        handleReportProblemPress={this.handleReportProblemPress.bind(this)}
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

export default ConnectedSettings;
