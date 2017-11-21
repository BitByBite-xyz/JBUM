import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Keyboard,
  Animated,
  Alert,
  Linking,
  NetInfo,
  DeviceEventEmitter,
  AsyncStorage,
  AppState,
  ImageBackground
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import Swiper from 'react-native-swiper';
import Meteor, {createContainer} from 'react-native-meteor';

import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';

import Ask from '../Ask';
import Answer from '../Answer';
import Profile from '../Profile';
import Settings from '../Settings';
import styles from './styles';

import {AnimateIn} from '../../components/Animations';
import ActionButton from '../../components/ActionButton';

import images from '../../config/images';
import {quotes} from '../../config/styles';

import { getInitialQuote } from '../../actions/quote';
import { changeLoginStatus } from '../../actions/userData';

const ACNTSETUP_KEY = 'setupcomplete'
const AUTH_KEY = 'isdatauthneededtho';

const getMeteorData = () => {
      return {
        connected: Meteor.status().connected,
        user: Meteor.user(),
        loggingIn: Meteor.loggingIn(),
      }
    };

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hasCheckedLogin: false,
      hasCheckedAcctSetup: false
    };
  }
  componentWillMount(){
    this.props.navigation.dispatch(getInitialQuote());
    const { hasCheckedAcctSetup } = this.state;
    if (!this.props.hasCheckedLogin){
      AsyncStorage.getItem('reactnativemeteor_usertoken').then((key)=>{
        if (!key){
          this.props.navigation.dispatch(changeLoginStatus(false))
          this.props.navigation.navigate('WelcomeStack');
        }
        else{
          this.props.navigation.dispatch(changeLoginStatus(true))
          this.setState({hasCheckedLogin:true});
          if (!hasCheckedAcctSetup){
            AsyncStorage.getItem(ACNTSETUP_KEY).then((key)=>{
              if (!key || key === 'false'){
                this.props.navigation.navigate('AccountSetup');
              }
              this.setState({hasCheckedAcctSetup:true});
            }).catch((err) => {
              alert('oops!!')
            })
          }
        }
      }).catch((err) => {
       alert('oops'+err)
      })
    }
  }

  toInbox(){
    this.props.navigation.navigate('Inbox');
  }
  toAskPage(){
    this.pages.scrollBy(-2,true)
  }

  scrollToPage = () => {
    console.log('hey');
    this.pages.scrollBy(1,true)
  }
  onTouchEnd = () => {
    this.downArrow.transitionTo({opacity: 0.5});
    this.rightArrow.transitionTo({opacity: 0.5});
    this.upArrow.transitionTo({opacity: 0.5});
  }

  onIndexChanged = () => {
    Keyboard.dismiss();
  }

  handleFloatingButtonPress = (message) => {
    switch (message) {
      case 'textATip':
        Alert.alert(
          'Are you sure you want to Text-A-Tip?',
          'Pressing OK will open up your messaging app and compose a text to the Text-A-Tip 24/7 hotline. Sending the text will connect you with a live mental health counselor.',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => textWithoutEncoding('18448235323', 'HELLO')},
          ],
          { cancelable: false }
        );
        break;
      case '911':
        Alert.alert(
          'Are you sure you want to call 911?','',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'CALL', onPress: () => Linking.openURL('tel:911')},
          ],
          { cancelable: false }
        );
        break;
      case 'lifeline':
        Alert.alert(
          '','Are you sure you want to call the National Suicide Prevention Lifeline?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'CALL', onPress: () => Linking.openURL('tel:18002738255')},
          ],
          { cancelable: false }
        );
        break;
      default: console.log('s');
    }
  }

  render() {
    const { navigation, quote } = this.props;
    let body,author;
    if (quote && quote.quote){
      body = quote.quote.quote;
      author = quote.quote.author;
    }
    else {
      body = ''; author = '';
    }

    return (
      <ImageBackground
        source={images.homeUnderlay}
        style={{width: '100%', height: '100%'}}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent' }} effect='slide' >
          <View style={{ marginLeft: '7%', marginTop:'45%', backgroundColor: 'transparent', width: '90%', overflow: 'hidden'}}>
              <View style={{ borderRadius: 10, overflow: 'hidden'}}>
                <Text style={styles.welcomeText}>
                  Welcome!
                </Text>
              </View>
              <View style={{marginTop: 15, borderRadius: 10,overflow: 'hidden'}}>
                <Text
                  style={styles.quoteText}
                >
                  "{body}"
                </Text>
                <Text
                  style={styles.authorText}
                >
                  - {author}
              </Text>
            </View>
          </View>

          <ActionButton ref={(c) => this.but = c} degrees={136} icon={<Icon name="call" style={styles.actionButtonIcon} color={'white'} />} fixNativeFeedbackRadius={true} buttonColor="#F1606E">
            <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#9b59b6' title="Call 911" onPress={() => this.handleFloatingButtonPress('911')}>
              <Icon name="call" style={styles.actionButtonIcon} color={'white'} />
            </ActionButton.Item>
            <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#3498db' title="Text a Tip" icon='call' onPress={() => this.handleFloatingButtonPress("textATip")}>
              <Icon name="textsms" style={styles.actionButtonIcon} color={'white'} />
            </ActionButton.Item>
            <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#1abc9c' title="Suicide Hotline" onPress={() => this.handleFloatingButtonPress("lifeline")}>
              <Icon name="call" style={styles.actionButtonIcon} color={'white'} />
            </ActionButton.Item>
          </ActionButton>
          
        </View >
      </ImageBackground>
    );
  }
};

const mapStateToProps = ( state, ownProps ) => {
  return {
      quote: state.quote,
      hasCheckedLogin: state.hasCheckedLogin
  }
}

const ConnectedHome = connect(mapStateToProps)(Home);

export default createContainer(params=>{
  return {
      user: Meteor.user(),

  };
}, ConnectedHome)
