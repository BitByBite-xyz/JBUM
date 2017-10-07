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
import DeviceInfo from 'react-native-device-info';

import InitialPage from '../../components/AccountSetupComponents/InitialPage';
import PageOne from '../../components/AccountSetupComponents/PageOne';
import PageTwo from '../../components/AccountSetupComponents/PageTwo';
//import PageThree from '../../components/AccountSetupComponents/PageThree';
import PageFour from '../../components/AccountSetupComponents/PageFour';
import PasswordPage from '../../components/AccountSetupComponents/PasswordPage';

// Colors
const MAIN_WARN_COLOR = '#FF9A1E'

export default class AccountSetup extends Component {
  constructor() {
    super();
    const items = [
      {key: 0, backgroundColor: MAIN_WARN_COLOR, type: 'info', title: 'Info', message: 'Complete this slide before moving on!'},
      {key: 1, backgroundColor: MAIN_WARN_COLOR, type: 'warn', title: 'Warning', message: 'Complete this slide before moving on!'},
    ]

    this.state = {
      currentIndex: 0,
      items: items,
      profileData: []
    };

    if (Meteor.userId() && Meteor.user().profile) {
      const data = {
        username: Meteor.user().username,
        temporaryPass: Meteor.user().profile.temporaryPass
      };
      this.state.loginData = data;
    }
    else {
      const data = {
        username: '',
        temporaryPass: ''
      };
      this.state.loginData = data;;
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
  }

  onSlideChangeHandle = (index, total) => {
    if (this.state.currentIndex < index) {
      this.swiper.scrollBy(0);
      this.showAlert(this.state.items[1]);
    }
    else if (this.state.slideComplete){
      this.state.slideComplete = false;
    }
  }

  handlePageComplete = () => {
    this.state.currentIndex = this.state.currentIndex+1;
  }

  handleAddData = (field, response) => {
    this.state.profileData.push({field:field, response:response.toString()});
  }

  handleAccountSetupComplete = () => {
    const { profileData } = this.state;
    let params = profileData;
    params.push({field: 'Device Model', response: DeviceInfo.getModel()});
    params.push({field: 'Device Name', response: DeviceInfo.getDeviceName()});
    params.push({field: 'System Version', response: DeviceInfo.getSystemVersion()});

    Meteor.call('UserData.insert', params , (err) => {
      if (err) {
        console.log("UserData err"+err.reason);
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.reason
        );
        return;
      }
      else {
        console.log("UserData added");
        this.props.navigation.navigate('HomeStack', {overrideToAccountSetup:true});
      }
    });
  }

  validateInput = (password, confirmPassword) => {
    const { loginData } = this.state;
    const MAIN_WARN_COLOR = '#FF9A1E'

    const items = [
      {key: 0, backgroundColor: MAIN_WARN_COLOR, type: 'info', title: 'Info', message: 'Complete this slide before moving on!'},
      {key: 1, backgroundColor: MAIN_WARN_COLOR, type: 'warn', title: 'Warning', message: 'Passwords do not match!'},
    ]

    let valid = true;

    if (password.length === 0 || confirmPassword.length === 0) {
      this.showAlert(items[0]);
      valid = false;
    }

    if ( password !== confirmPassword) {
      this.showAlert(items[1]);
      valid = false;
    }

    if (valid) {
      this.handlePageComplete();
      console.log(loginData);
      Accounts.changePassword(loginData.temporaryPass, password, (err) => {
        if (err) {
          console.log("change err"+err.details);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
          return;
        }
        this.swiper.scrollBy(1);
      });
    }
  }

  handleAbandonSetup = () => {
    Meteor.logout(() => {

      this.props.navigation.navigate('WelcomeStack');
    });
  }

  dismissAlert = () => {
    this.dropdown.onClose()
  }

  showAlert = (item) => { //for DropdownAlert
    if (item.type == 'dismiss') {
      this.dismissAlert();
    } else {
      const title = 'Warning';
      this.dropdown.alertWithType(item.type, title, item.message);
    }
  }

  onClose = (data) => {
//    this.dropdown.onClose()
  }

  render() {
    const { loginData, profileData } = this.state;
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
                  loginData={loginData}
                  handleAbandonSetup={this.handleAbandonSetup}
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide, { backgroundColor: '#9ED6EA' }]}>
                <PageOne
                  handleAddData={this.handleAddData}
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
                <PageTwo
                  handleAddData={this.handleAddData}
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide, { backgroundColor: '#46C87F' }]}>
                <PasswordPage
                  validateInput={this.validateInput}
                  handlePageComplete={this.handlePageComplete}
                />
              </View>
              <View style={[styles.slide, { backgroundColor: '#E1A3DC' }]}>
                <PageFour
                  loginData={loginData}
                  handleAccountSetupComplete={this.handleAccountSetupComplete}
                />
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
