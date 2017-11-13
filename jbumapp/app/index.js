import React from 'react';
import { Platform,AsyncStorage, Linking } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import PushNotification from 'react-native-push-notification';
import Navigator from './config/router';
import codePush from "react-native-code-push";
import ReactNativeHaptic from 'react-native-haptic';

import settings from './config/settings';
import Loading from './components/Loading';

import store from './config/store';

import {Provider, connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
//ReactNativeHaptic.generate('notification')

Meteor.connect(settings.METEOR_URL);

console.disableYellowBox = true; //comment out to get yelled at
const URL_KEY = 'thisisfun';
const App = ({dispatch, nav,numberOfNotificatons}) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
      numberOfNotificatons:numberOfNotificatons
    })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
  isLoggedIn: Meteor.user(),
  connected:state.connected
});

const AppWithNavigation = connect(mapStateToProps)(App);
let hasOpenedURL = false;
const RNApp = (props) => {
  const { status, user, loggingIn } = props;
  /*if (status.connected === false || loggingIn) {
    return <Loading />;
  }*/

  Linking.getInitialURL().then((url) => {
    if (url && !hasOpenedURL) {
      AsyncStorage.setItem(URL_KEY, url)
      hasOpenedURL = true;
    }
  }).catch(err => console.error('An error occurred', err));

  if (user) {
    PushNotification.configure({
      onRegister(data) {
        setTimeout(() => {
          Meteor.call('notifications.set.pushToken', data, err => {
            if (err) { console.log('notif error' + err.reason) }
          });
        }, 500);
      },
      onNotification(notification) {
        ReactNativeHaptic.generate('notification');
        const key = 'shouldHandleNotif';
        if (!notification.foreground && notification.userInteraction) {
          AsyncStorage.setItem(key, JSON.stringify(notification)).catch((err) => {
            console.log(err);
          })
        }
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }
  return <Provider store={store}>
            <AppWithNavigation/>
          </Provider>
};

const MyApp = createContainer(() => {
              return {
                status: Meteor.status(),
                user: Meteor.user(),
                loggingIn: Meteor.loggingIn(),
              };
            }, RNApp);
/*
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
}; code push donnt work w da rn 50.1 doe 

export default codePush(codePushOptions)(MyApp);*/
export default MyApp;