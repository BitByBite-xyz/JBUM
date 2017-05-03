import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from '../screens/SignIn';
import Debug from '../screens/Debug';
import AccountSetup from '../screens/AccountSetup';

/*
This is the only navigation I have but every time a screen is added we add to this...
 */

export const LoginDrawer = DrawerNavigator({
  Login: {
    screen: SignIn,
  },
  Setup: {
    screen: AccountSetup,
  }
});
