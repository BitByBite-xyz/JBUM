import React from 'react';
import {
	TabNavigator,
	StackNavigator,
	DrawerNavigator,
	TabView
}
from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import images from '../config/images';
import AccountSetup from '../screens/AccountSetup';
import Answer from '../screens/Answer';
import Profile from '../screens/Profile';
import Reply from '../screens/Reply';
import Ask from '../screens/Ask';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';
import Inbox from '../screens/Inbox';

import Notifications from '../components/Notifications';
import BarcodeScanner from '../components/BarcodeScanner';

export const HomeTabs = TabNavigator({
   Home: {
     screen: Home,
		 navigationOptions: {
			 header: null
		}
   },
   Ask: {
     screen: Ask,
		 navigationOptions: {
			 header: null
		}
  },
	Answer: {
		screen: Answer,
	 navigationOptions: {
		 header: null
	 },
 },
 Profile: {
	 screen: Profile,
	 navigationOptions: {
		header: null
	 }
 },},{tabBarPosition:'bottom', tabBarOptions: {
																  labelStyle: {
																    fontSize: 12,
																  },
																  tabStyle: {
																    height: 40,
																  },
																  style: {
																    backgroundColor: '#57C2D7',
																  	},
																}, showIcon:true
});

export const WelcomeStack = StackNavigator({
 Welcome: {screen: Welcome,},
 Login: { screen: Login },
 BarcodeScanner: { screen: BarcodeScanner,
	navigationOptions: {
	 headerStyle: {
	 color: null,
	 backgroundColor: null,
	 height: 20,
 },}},
 AccountSetup: { screen: AccountSetup },},
 {
	 headerMode: 'none',
	 mode:'modal'
 }
);

export const HomeStack = StackNavigator({
	HomeTabs: {
		screen: HomeTabs,
		navigationOptions: {
		 header: null
		}
	},
	Reply: { screen: Reply,
		navigationOptions: {
			headerMode: 'screen',
		},},
	WelcomeStack: {
		screen: WelcomeStack,
		navigationOptions: {
		 header: null
		}
	},
	Inbox: { screen: Inbox,
		navigationOptions: {
	 }
	},
	Settings: {screen: Settings}
},{mode:'card',headerMode: 'screen'});

export const ProfileStack = StackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			title: 'Login'
		}
	},
}, {
		headerMode: 'none',
		mode:'modal'
});
export default StackNavigator({
		HomeStack: { screen: HomeStack,
		 	navigationOptions: {
		}},
		BarcodeScanner: { screen: BarcodeScanner,
			navigationOptions: {
				headerStyle: {
					 color: null,
					 backgroundColor: null,
					 height: 0.00001,
				 },
			}
		},

	},{headerMode:'none'});
	const styles =  StyleSheet.create({
		 inboxCircle: {
			width: 28,
			height: 28
		}
})
