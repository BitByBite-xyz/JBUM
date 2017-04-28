import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from '../screens/SignIn';
import Debug from '../screens/Debug';
import AccountSetup from '../screens/AccountSetup';


export const LoginDrawer = DrawerNavigator({
  Login: {
    screen: SignIn,
  },
  Setup: {
    screen: AccountSetup,
  }
});
