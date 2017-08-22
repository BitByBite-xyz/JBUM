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
const MAIN_WARN_COLOR = '#FF9A1E'

export default class AccountSetup extends Component {
  constructor() {
    super();
    const items = [
      {key: 0, backgroundColor: MAIN_WARN_COLOR, type: 'info', title: 'Info', message: 'Complete this slide before moving on!'},
      {key: 1, backgroundColor: MAIN_WARN_COLOR, type: 'warn', title: 'Warning', message: 'Complete this slide before moving on!'},
    ]

    this.state = {
      currentIndex : 0,
      items: items,
      loginData: {},
      profileData: {}
    };
  }
  componentDidMount() {
    const { navigation } = this.props;


    this.setState(previousState => {
      return { loginData: navigation.state.params.loginData};
    });

  }

  onSlideChangeHandle = (index, total) => {
    console.log(index);
    if (this.state.currentIndex < index) {
      this.swiper.scrollBy(0);
      this.showAlert(this.state.items[1]);
    }
    else if (this.state.slideComplete){
      this.state.slideComplete = false;
    }

    console.log(index, total);
    console.log(this.state.profileData);
  }

  handlePageComplete = () => {
    this.state.currentIndex = this.state.currentIndex+1;
  }

  handleSubmitToMeteor = (field, response) => {//cancer way to implent this.. need to be redone at some point
    Meteor.call('UserData.insert', field, response.toString(), (err) => {
      if (err) {
        console.log("Post err"+err.details);
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.details
        );
        return;
      } else {
        console.log("UserData added");
      }
    });
  }

  onClose(data) {//for DropdownAlert
  // data = {type, title, message, action}
  // action means how the alert was dismissed. returns: automatic, programmatic, tap, pan or cancel
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
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide, { backgroundColor: '#9ED6EA' }]}>
                <PageOne
                  handleSubmitToMeteor={this.handleSubmitToMeteor}
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
                <PageTwo
                  handleSubmitToMeteor={this.handleSubmitToMeteor}
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide,{ backgroundColor: '#55CFAC' }]}>
                <PageThree
                  handleSubmitToMeteor={this.handleSubmitToMeteor}
                  handlePageComplete={this.handlePageComplete}/>
              </View>
              <View style={[styles.slide, { backgroundColor: '#46C87F' }]}>
                <PasswordPage
                  showAlert={this.showAlert}
                  previousPass={loginData.password}
                  handlePageComplete={this.handlePageComplete}
                  swiper={this.swiper}
                />
              </View>
              <View style={[styles.slide, { backgroundColor: '#E1A3DC' }]}>
                <PageFour
                  navigation={this.props.navigation}
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
