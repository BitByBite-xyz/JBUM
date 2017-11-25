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
    AsyncStorage,
    NetInfo
}
from 'react-native';
import Meteor, { Accounts,createContainer } from 'react-native-meteor';
import {
	Button,
	Icon,
  Header
}
from 'react-native-elements';
import Video from 'react-native-video';
import DropdownAlert from 'react-native-dropdownalert'
import Swiper from 'react-native-swiper';
import DeviceInfo from 'react-native-device-info';

import InitialPage from '../../components/AccountSetupComponents/InitialPage';
import PageOne from '../../components/AccountSetupComponents/PageOne';
import PageTwo from '../../components/AccountSetupComponents/PageTwo';
//import PageThree from '../../components/AccountSetupComponents/PageThree';
import PageFour from '../../components/AccountSetupComponents/PageFour';
import PasswordPage from '../../components/AccountSetupComponents/PasswordPage';
import vid from '../../images/jbumapp.mov'

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
      currentIndex: 5,
      swiperIndex:0,
      items: items,
      profileData: [],
      isLoading:false,
      paused: true,
    };

    let data = null;
  }

  componentDidMount() {
    const { navigation, user } = this.props;
    let data = null;

    if (user && user.profile && user.profile.isAccountSetupComplete) {
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
    this.setState({isLoading:true});
    const user = Meteor.user();
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

    NetInfo.fetch().done((reach) => {
      if (reach.toLowerCase() === 'none'){
        alert('No network detected! please connect to the internet to complete account setup.');
        this.setState({isLoading:false});
        return;
      }
    });

    if (valid) {
      if (user && !user.profile || !user.profile.temporaryPass){
        this.handleAccountSetupComplete();
        this.handlePageComplete();
      }
      Accounts.changePassword(user.profile.temporaryPass, password, (err) => {
        if (err) {
          console.log("change err"+err.reason);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Change Password Err: \n\n'+err.reason
          );
          this.setState({isLoading:false});
          return false;
        }
        else{
          this.handleAccountSetupComplete();
          this.handlePageComplete();
        }
        this.setState({isLoading:false});
      });
    }
    else{
      this.setState({isLoading:false});
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

  handleShowVidAndContinue = () => {
    this.setState({paused:false}, () => {
      this.player.presentFullscreenPlayer();
      /*setTimeout(() => {
        this.props.navigation.navigate('HomeStack', {overrideToAccountSetup:true})      
      }, 500);*/
    })
  }

  render() {
    const { profileData, isLoading } = this.state;
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
                  isLoading={isLoading}
                />
              </View>
              <View style={[styles.slide, { backgroundColor: '#E1A3DC' }]}>
                <PageFour
                  user={this.props.user}
                  handleShowVidAndContinue={this.handleShowVidAndContinue}
                  goToHome={() => {
                    this.setState({paused:true});
                    this.props.navigation.navigate('HomeStack', {overrideToAccountSetup:true})
                  }}
                  currentIndex={this.state.currentIndex}
                />
              </View>
            </Swiper>
            <Video source={vid}   // Can be a URL or a local file.
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
              rate={1.0}                              // 0 is paused, 1 is normal.
              volume={1.0}                            // 0 is muted, 1 is normal.
              muted={false}                           // Mutes the audio entirely.
              paused={this.state.paused}                          // Pauses playback entirely.
              resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
              playInBackground={false}                // Audio continues to play when app entering background.
              playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
              ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
              progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
              onEnd={()=> this.setState({paused:true} )}
            />
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
