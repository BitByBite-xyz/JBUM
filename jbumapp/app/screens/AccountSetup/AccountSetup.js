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
    AsyncStorage
}
from 'react-native';

import Meteor, { Accounts,createContainer } from 'react-native-meteor';
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

const MAIN_WARN_COLOR = '#FF9A1E'
const ACNTSETUP_KEY = 'setupcomplete'

class AccountSetup extends Component {
  constructor() {
    super();
    const items = [
      {key: 0, backgroundColor: MAIN_WARN_COLOR, type: 'info', title: 'Info', message: 'Complete this slide before moving on!'},
      {key: 1, backgroundColor: MAIN_WARN_COLOR, type: 'warn', title: 'Warning', message: 'Complete this slide before moving on!'},
    ]
    this.state = {
      currentIndex: 0,
      swiperIndex:0,
      items: items,
      profileData: []
    };

    let data = null;
  }

  componentDidMount() {
    const { navigation, user } = this.props;
    let data = null;

    if (user && user.profile.isAccountSetupComplete) {
      AsyncStorage.setItem(ACNTSETUP_KEY, 'true').then(()=> {
        this.props.navigation.navigate('HomeStack', {overrideToAccountSetup:true});
      })
    }
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
    if (this.swiper){
      this.swiper.scrollBy(1)
      this.setState({currentIndex: ++this.state.currentIndex});
    }
    else {
      this.setState({currentIndex: ++this.state.currentIndex});
    }
  }
  
  handleAddData = (field, response) => this.state.profileData.push({field:field, response:response.toString()});

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
          'UserData err: \n\n'+err.reason
        );
        return;
      }
      else {
        console.log("UserData added");
        AsyncStorage.setItem(ACNTSETUP_KEY, 'true')
      }
    });
  }

  validateInput = (password, confirmPassword) => {
    const { user } = this.props;
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
      Accounts.changePassword(user.profile.temporaryPass, password, (err) => {
        if (err) {
          console.log("change err"+err.reason);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Change Password Err: \n\n'+err.reason
          );
          return;
        }
        else{
          this.handleAccountSetupComplete();
          this.handlePageComplete();
        }
      });
    }
  }

  handleAbandonSetup = () => {
    Meteor.logout(() => {
      this.props.navigation.navigate('WelcomeStack');
    });
  }

  dismissAlert = () => {
    this.dropdown.onClose();
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
  }

  render() {
    const { profileData } = this.state;
    return(
          <View style={{flex:1}}>
            <Swiper dotColor='#bbddff'
                      activeDotColor='#1E90FF'
                      leftTextColor='#1E90FF'
                      rightTextColor='#1E90FF'
                      loop={false}
                      index={this.state.swiperIndex}
                      onIndexChanged={this.onSlideChangeHandle}
                      ref={(s: React.Element<Swiper>) => this.swiper = s}>
              <View style={[styles.slide, { backgroundColor: '#54C6DB' }]}>
                <InitialPage
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
                  user={this.props.user}
                  handleAccountSetupComplete={()=>this.props.navigation.navigate('HomeStack', {overrideToAccountSetup:true})}
                  currentIndex={this.state.currentIndex}
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

export default createContainer(() => {

  return {
    user: Meteor.user()
  };
}, AccountSetup);

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
