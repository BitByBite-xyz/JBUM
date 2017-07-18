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
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SignIn from '../screens/SignIn';
import Debug from '../screens/Debug';
import images from '../config/images';
import AccountSetup from '../screens/AccountSetup';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Reply from '../screens/Reply';
import Ask from '../screens/Ask';
import Settings from '../screens/Settings';

/*
This is the only navigation I have but every time a screen is added we add to this...
 */
 export const HomeStack = StackNavigator({
   Home: {
     screen: Home,
		 navigationOptions: {
       title: 'Just Between U and Me',
			 headerRight:
			 <TouchableOpacity>
			 	<Image source={images.inboxCircle} style={{width: 31, height: 31, marginRight: 10}}>
				<Text style={{marginTop: 7, marginLeft: 12, color: 'white', fontFamily: 'Avenir', fontWeight: '500'}}>2</Text>
				</Image>
			 </TouchableOpacity>
			 ,
			 headerStyle: {
				borderBottomWidth: 0.5,
				borderBottomColor: '#d1d1d1',
       	backgroundColor: 'white',
       	elevation: null,
				paddingTop: 0,
				height: 50,
		 	},
			headerTitleStyle: {
				//Doesn't work idk why..
				fontFamily: 'Avenir',
				fontSize: 18,
				fontWeight: '600'
			 },
		}
   },
   Ask: {
     screen: Ask,
     navigationOptions: {
       title: '',
			 headerStyle: {
       	backgroundColor: '#D3D3D3',
       	elevation: null,
				paddingTop: 0,
				height: 50,
		 	},
     },
  }}, {
   headerMode: 'screen',
 });
export const Tabs = TabNavigator({
	HomeStack: {
		screen: HomeStack,
		navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor}/>
		}
	},
	Debug: {
		screen: Debug,
		navigationOptions: {
				tabBarLabel: 'Debug',
				tabBarIcon: ({tintColor}) => <Icon name="bug-report" size={30} color={tintColor}/>
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
				tabBarLabel: 'Profile',
				tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={30} color={tintColor}/>
		}
	},
	Settings: {
		screen: Settings,
		navigationOptions: {
				tabBarLabel: 'Settings',
				tabBarIcon: ({tintColor}) => <Icon name="settings" size={28} color={tintColor}/>
		}
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
}, {
	headerMode: 'none',
	mode:'modal'
});
export default StackNavigator({
      SignIn: { screen: SignIn },
			AccountSetup: { screen: AccountSetup },
			Reply: { screen: Reply },
      Tabs: { screen: Tabs }
    }, {
      navigationOptions: {
        tabBarVisible: false,
        header: null,
				mode:'modal'
      }
    });

		const styles =  StyleSheet.create({
	  inboxCircle: {
			width: 28,
			height: 28
		}
	})
