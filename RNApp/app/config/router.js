import React from 'react';
import { TabNavigator, StackNavigator,DrawerNavigator,TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from '../screens/SignIn';
import Debug from '../screens/Debug';
import AccountSetup from '../screens/AccountSetup';
import Home from '../screens/Home';


/*
This is the only navigation I have but every time a screen is added we add to this...
 */


 export const Tabs = TabNavigator({
   Home: {
     screen: Home,
     navigationOptions: {
       tabBarLabel: 'Home',
       tabBarIcon: ({ tintColor }) => (
         <Icon
           name="home"
           color={tintColor}
           size={28}
         />
       ),
     },
   },
   Account: {
     screen: Debug,
     navigationOptions: {
       tabBarLabel: 'Hacks',
       tabBarIcon: ({ tintColor }) => (
         <Icon
           name="build"
           color={tintColor}
           size={28}
         />

       ),
     },
   },
 }, {
   tabBarPosition: 'bottom',
   tabBarComponent: TabBarBottom,
 });
 export const ProfileStack = StackNavigator({
   SignIn: {
     screen: SignIn,
     navigationOptions : { title: 'Login', header: null },
   },
   AccountSetup: {
     screen: AccountSetup,
     navigationOptions: {title: 'Account Setup', header: null},
   },
   Tabs: {
     screen: Tabs,
     navigationOptions: {title: 'Tabs', header: null},
   },}, {
   headerMode: 'screen',
   visible: false
 });
/*
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
*/
