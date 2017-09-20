import React from 'react';
import { Platform } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import PushNotification from 'react-native-push-notification';
import Navigator from './config/router';


import settings from './config/settings';
import Loading from './components/Loading';

import store from './config/store';

import {Provider, connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';


Meteor.connect(settings.METEOR_URL);

console.disableYellowBox = true; //comment out to get yelled at
//console.ignoredYellowBox = ['Panel'] //comment out to get yelled at

const App = ({dispatch, nav}) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
  isLoggedIn: Meteor.user()
});

const AppWithNavigation = connect(mapStateToProps)(App);

const RNApp = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return <Loading />;
  }

  if (user) {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister(data) {
        Meteor.call('notifications.set.pushToken', data, err => {
          if (err) { alert(`notifications.set.pushToken: ${err.reason}`); }
        });
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification(notification) {
        console.log(notification);
      //  alert(`onNotification ${React.Platform.OS}`);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
        * IOS ONLY: (optional) default: true
        * - Specified if permissions will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
    });
  }



  return <Provider store={store}>
            <AppWithNavigation/>
          </Provider>
};



export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, RNApp);
