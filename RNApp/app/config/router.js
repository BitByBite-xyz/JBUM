import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from '../screens/SignIn';
import Debug from '../screens/Debug';
import AccountSetup from '../screens/AccountSetup';

/*
This is the only navigation I have but every time a screen is added we add to this...
 */
 export const ProfileStack = StackNavigator({
   SignIn: {
     screen: SignIn,
     navigationOptions : { title: 'Login', header: null },
   },
   AccountSetup: {
     screen: AccountSetup,
     navigationOptions: {
       title: 'Account Setup',
     },
   },}, {
   headerMode: 'screen',
   visible: false
 });


const prevGetStateForActionProfileStack = ProfileStack.router.getStateForAction;
ProfileStack.router = {
  ...ProfileStack.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionProfileStack(action, state);
  },
};
