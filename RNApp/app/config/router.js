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
import Ask from '../screens/Ask';
import Settings from '../screens/Settings';

/*
This is the only navigation I have but every time a screen is added we add to this...
 */

export const Tabs = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBar: ({
				state
			}) => ({
				icon: ({
					tintColor,
					focused
				}) => (<Icon name="home" color={tintColor}
           size={28}
         />)
			}),
		},
	},
	Debug: {
		screen: Debug,
		navigationOptions: {
			tabBarLabel: 'Hacks',
			tabBar: ({
				state
			}) => ({
				icon: ({
					tintColor,
					focused
				}) => (<Icon name="build" color={tintColor}
           size={28}
         />)
			})
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBar: ({
				state
			}) => ({
				icon: ({
					tintColor,
					focused
				}) => (<Icon name="face" color={tintColor}
           size={28}
         />)
			})
		}
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
			tabBarLabel: 'Settings',
			tabBar: ({
				state
			}) => ({
				icon: ({
					tintColor,
					focused
				}) => (<Icon name="settings" color={tintColor}
           size={28}
         />)
			})
		}
	}
}, {
	tabBarComponent: TabView.TabBarBottom,
	swipeEnabled: false,
	tabBarPosition: 'bottom',
	animationEnabled: true
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
	Ask: {
		screen: Ask,
		navigationOptions: {
			title: 'Ask'
		}
	},
}, {
	headerMode: 'none'
});
export const AppRouter = StackNavigator({
    ProfileStack: { screen: ProfileStack},
    Tabs: { screen: Tabs}
	}, {
		headerMode: 'none'
});
