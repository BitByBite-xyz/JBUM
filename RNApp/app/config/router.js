import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from '../routes/SignIn';


export const LoginStack = DrawerNavigator({
  Login: {
    screen: SignIn,

}
  });
