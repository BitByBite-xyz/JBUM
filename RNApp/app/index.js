import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import { MainNavigator, Tabs} from './config/router';

import settings from './config/settings';
import Loading from './components/Loading';

import Home from './screens/Home';


Meteor.connect(settings.METEOR_URL);

console.ignoredYellowBox = ['Warning:'] //comment out to get yelled at

const RNApp = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return <Loading />;
  } 

  return <MainNavigator />;
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
