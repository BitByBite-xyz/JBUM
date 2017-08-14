 import React, { Component } from 'react';
 import {
   	Text,
   	View,
   	Image,
   	StatusBar,
   	Linking,
    TouchableOpacity,
    Alert,
    StyleSheet,
}
from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import {
	Button,
	Icon,
  Header
}
from 'react-native-elements';
import DropdownAlert from 'react-native-dropdownalert'
import Swiper from 'react-native-swiper';

import InitialPage from '../../components/AccountSetupComponents/InitialPage';
import PageOne from '../../components/AccountSetupComponents/PageOne';
import PageTwo from '../../components/AccountSetupComponents/PageTwo';
import PageThree from '../../components/AccountSetupComponents/PageThree';
import PageFour from '../../components/AccountSetupComponents/PageFour';
import PasswordPage from '../../components/AccountSetupComponents/PasswordPage';

// Colors
const MAIN_INFO_COLOR = '#2B73B6'
const MAIN_WARN_COLOR = '#cd853f'
const MAIN_ERROR_COLOR = '#cc3232'
const MAIN_SUCCESS_COLOR = '#32A54A'
const MAIN_CUSTOM_COLOR = '#6441A4'
const MAIN_DISMISS_COLOR = '#748182'
const styles = StyleSheet.create({
  slide: {
    //flex: 1,
    backgroundColor: '#9DD6EB',
    padding: 15,
    height:'100%'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default class AccountSetup extends Component {
  constructor() {
    super();
    const items = [
      {key: 0, backgroundColor: MAIN_INFO_COLOR, type: 'info', title: 'Info', message: 'System is going down at 12 AM tonight for routine maintenance. We\'ll notify you when the system is back online.'},
      {key: 1, backgroundColor: MAIN_WARN_COLOR, type: 'warn', title: 'Warning', message: 'Complete this slide before moving on!'},
      {key: 2, backgroundColor: MAIN_ERROR_COLOR, type: 'error', title: 'Error', message: 'Complete this slide before moving on!'},
      {key: 3, backgroundColor: MAIN_SUCCESS_COLOR, type: 'success', title: 'Success', message: 'Thank you for your order. We will email and charge you when it\'s on it\'s way.'},
      {key: 4, backgroundColor: MAIN_CUSTOM_COLOR, type: 'custom', title: 'Custom', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {key: 5, backgroundColor: MAIN_DISMISS_COLOR, type: 'dismiss', title: 'Dismiss alert'}
    ]

    this.state = {
      currentIndex : 0,
      items: items
    };

  }
  componentDidMount() {

  }

  onSlideChangeHandle = (index, total) => {
    console.log(index);
    if (this.state.currentIndex < index) {
      this.swiper.scrollBy(0);
      this.showAlert(this.state.items[2]);
    }
    else if (this.state.slideComplete){
      this.state.slideComplete = false;
    }

    console.log(index, total);
  }

  handlePageComplete = () => {
    this.state.currentIndex = this.state.currentIndex+1;
  }

  onClose(data) {//for DropdownAlert
  // data = {type, title, message, action}
  // action means how the alert was dismissed. returns: automatic, programmatic, tap, pan or cancel
  }

  dismissAlert = () => {
    this.dropdown.onClose()
  }

  showAlert(item) { //for DropdownAlert
    if (item.type == 'dismiss') {
      this.dismissAlert();
    } else {
      const random = Math.floor((Math.random() * 1000) + 1);
      const title = item.title + ' #' + random;
      console.log(item.type);
      this.dropdown.alertWithType(item.type, title, item.message);
    }
  }

  render() {
    return(
      <View style={{flex:1}}>
        <Swiper dotColor='#bbddff'
                  activeDotColor='#1E90FF'
                  leftTextColor='#1E90FF'
                  rightTextColor='#1E90FF'
                  loop={false}
                  index={this.state.currentIndex}
                  onIndexChanged={this.onSlideChangeHandle}
                  ref={(s: React.Element<Swiper>) => this.swiper = s}>
          <View style={[styles.slide, { backgroundColor: '#54C6DB' }]}>
            <InitialPage
              handlePageComplete={this.handlePageComplete}/>
          </View>
          <View style={[styles.slide, { backgroundColor: '#9ED6EA' }]}>
            <PageOne
              handlePageComplete={this.handlePageComplete}/>
          </View>
          <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
            <PageTwo
              handlePageComplete={this.handlePageComplete}/>
          </View>
          <View style={[styles.slide,{ backgroundColor: '#55CFAC' }]}>
            <PageThree
              handlePageComplete={this.handlePageComplete}/>
          </View>
          <View style={[styles.slide, { backgroundColor: '#46C87F' }]}>
            <PasswordPage />
          </View>
          <View style={[styles.slide, { backgroundColor: '#E1A3DC' }]}>
            <PageFour />
          </View>
        </Swiper>
        <DropdownAlert
          ref={(ref) => this.dropdown = ref}
          onClose={(data) => this.onClose(data)}
        />
      </View>
    );
  }
};
