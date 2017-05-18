import React from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import { ProfileStack } from './config/router';
import settings from './config/settings';

Meteor.connect(settings.METEOR_URL);

const RNApp = (props) => {
  const { status, user, loggingIn } = props;
  /*
  if (status.connected === false || loggingIn) {
    return <Loading />;
  } else if (user !== null) {
    return <LoggedIn />;
  }
  return <LoggedOut />;
  */
  return <ProfileStack />; //opens to login screen defined in ./config/router'
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
