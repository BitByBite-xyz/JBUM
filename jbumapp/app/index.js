import React from 'react';
import { Platform } from 'react-native';

import Meteor, { createContainer } from 'react-native-meteor';

import Navigator from './config/router';
import AndroidRouter from './config/androidRouter';


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

const AndroidApp = ({dispatch, nav}) => (
  <AndroidRouter
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
const AndroidAppWithNavigation = connect(mapStateToProps)(AndroidApp);

const RNApp = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return <Loading />;
  }

  if (Platform.OS !== 'ios') {
    return <Provider store={store}>
              <AndroidAppWithNavigation/>
            </Provider>
  }

  return <Provider store={store}>
            <AppWithNavigation/>
          </Provider>
};

RNApp.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, RNApp);
