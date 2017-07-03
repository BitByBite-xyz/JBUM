import React from 'react';
import {
	TabNavigator,
	StackNavigator,
	DrawerNavigator,
	TabView
}
from 'react-navigation';
import {
	Icon
}
from 'react-native-elements';

import SignIn from '../screens/SignIn';
import Debug from '../screens/Debug';
import AccountSetup from '../screens/AccountSetup';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AnswerPage from '../screens/AnswerPage';
import Settings from '../screens/Settings';

/*
This is the only navigation I have but every time a screen is added we add to this...
 */

export const Tabs = TabNavigator({
	Home: {
		screen: Home,
	},
	Debug: {
		screen: Debug,
	},
	Profile: {
		screen: Profile,
	},
	Settings: {
		screen: Settings,
	},}, {
  tabBarOptions: {
		activeTintColor: '#e91e63',
		tabBarComponent: TabView.TabBarBottom,
		swipeEnabled: false,
		tabBarPosition: 'bottom',
		animationEnabled: true
  },
});

export const ProfileStack = StackNavigator({
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			title: 'Login'
		}
	},
	AccountSetup: {
		screen: AccountSetup,
		navigationOptions: {
			title: 'Account Setup'
		}
	},
	AnswerPage: {
		screen: AnswerPage,
		navigationOptions: {
			title: 'AnswerPage'
		}
	},
}, {
	headerMode: 'none'
});
export default StackNavigator({
      SignIn: { screen: SignIn },
			AccountSetup: { screen: AccountSetup },
			AnswerPage: { screen: AnswerPage },
      Tabs: { screen: Tabs }
    }, {
      navigationOptions: {
        tabBarVisible: false,
        header: null
      }
    });
