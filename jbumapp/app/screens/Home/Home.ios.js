import React, { Component } from 'react';
import styles from './styles';
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
import { Meteor } from 'react-native-meteor';
import { NavigationActions } from 'react-navigation';
import Swiper from 'react-native-swiper';
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';

import Ask from '../Ask';
import Answer from '../Answer';
import Profile from '../Profile';
import Settings from '../Settings';
import Inbox from '../Inbox';


import {AnimateIn} from '../../components/Animations';
import {textWithoutEncoding} from '../../components/Communications';
import ActionButton from '../../components/ActionButton';

import images from '../../config/images';
import {quotes, DEVICE_WIDTH, IS_X} from '../../config/styles';
import { changeNetworkStatus } from '../../actions/network';
import { getInitialQuote } from '../../actions/quote';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      appState: AppState.currentState
    };
  }

  componentWillMount(){
    this.props.navigation.dispatch(getInitialQuote());
  }

  componentDidMount() {
    NetInfo.fetch().done((reach) => {
      this.handleNetworkChange(reach);
    });
    NetInfo.addEventListener('change', this.handleNetworkChange);
    AppState.addEventListener('change', this.handleAppStateChange);

    setTimeout(() => {
      if (this.downArrow) {
        this.downArrow.transitionTo({opacity: 0});
        this.rightArrow.transitionTo({opacity: 0});
        this.leftArrow.transitionTo({opacity: 0});
        this.upArrow.transitionTo({opacity: 0});
      }
    }, 2500);
    const key = 'shouldHandleNotif';

    setTimeout(() => {
      this.handleCheckForNotif();
    }, 250);
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this._handleAppStateChange);
    NetInfo.removeEventListener('change', this.handleNetworkChange);
  }

  handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      this.handleCheckForNotif();
    }
    else {
      this.setState({appState: nextAppState});
    }
  }

  handleNetworkChange = (info) => {
    this.props.navigation.dispatch(changeNetworkStatus(info))
  }

  handleCheckForNotif = () => {
    const key = 'shouldHandleNotif';
    AsyncStorage.getItem(key).then((obj)=>{
      let notifData = JSON.parse(obj);
      if (notifData !== null) {
        this.handleRecievedNotification(notifData);
      }
      else {
        AsyncStorage.removeItem(key);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  handleRecievedNotification = (notifData) => {
    const { navigation } = this.props;
    const key = 'shouldHandleNotif';

    if (notifData.data.postId) {
      const fucc = {
        _id: notifData.data.postId
      }
      navigation.navigate("Reply",{ postContent: fucc });
    }
    AsyncStorage.removeItem(key);
  }

  onScrollBeginDrag = () => {    
    this.downArrow.transitionTo({opacity: 0});
    this.rightArrow.transitionTo({opacity: 0});
    this.leftArrow.transitionTo({opacity: 0});
    this.upArrow.transitionTo({opacity: 0});
  }
  
  toInbox(){
    this.pages.scrollBy(-1,true);
    setTimeout(() => {
      this.horizontalPage.scrollBy(-1,true);
    }, 300);
  }

  toAskPage(){
    this.pages.scrollBy(-2,true)
  }
  scrollToPage = () => {
    this.pages.scrollBy(1,true)
  }
  onTouchEnd = () => {
    this.downArrow.transitionTo({opacity: 0.5});
    this.rightArrow.transitionTo({opacity: 0.5});
    this.leftArrow.transitionTo({opacity: 0.5});
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
            {text: 'CALL', onPress: () => Linking.openURL('tel:18475659827')},
          ],
          { cancelable: false }
        );
        break;
      case 'lifeline':
        Alert.alert(
          'Are you sure you want to call the National Suicide Prevention Lifeline?','',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'CALL', onPress: () => Linking.openURL('tel:18475659827')},
          ],
          { cancelable: false }
        );
        break;
      default: console.log('s');
    }
  }

  render() {
    const { navigation, numberOfNotificatons,quote } = this.props;
    const quoteIndex = Math.floor(quotes.length * Math.random());
    
    return (
      <Swiper
        horizontal={false}
        indicatorPosition={'none'}
        showsButtons={false}
        showsPagination={false}
        index={1}
        loop={false}
        bounces={true}
        onIndexChanged={this.onIndexChanged}
        onScrollBeginDrag={this.onScrollBeginDrag}
        onTouchEnd={this.onTouchEnd}
        style={{backgroundColor:'#F3F3F3'}}
        ref={(c) => this.pages = c}
        keyboardShouldPersistTaps={'always'}
        testID="home-screen"
      >
        <Ask
          navigation={navigation}
          scrollToPage={this.scrollToPage}
        />
        <Swiper
          showsPagination={false}
          showsButtons={false}
          loop={false}
          bounces={true}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onTouchEnd={this.onTouchEnd}
          keyboardShouldPersistTaps={'always'}
          index={1}
          ref={(c) => this.horizontalPage = c}
        >
          <Inbox
            navigation={navigation}
            {...this.props}
          />
          <View style={{ flex: 1, backgroundColor: 'transparent' }} effect='slide' >
            <ImageBackground
              source={images.homeUnderlay}
              style={{width: '100%', height: '100%', position: 'absolute'}}
            >
            {/*<Image
              source={images.homeBackground}
              style={{width: '100%', height: '85.5%'}}
            />*/}
              <View style={{flex:1}}>
                <View style={{marginTop: IS_X?'65%':'50%', marginLeft: '7%',backgroundColor: 'transparent', width: '90%', overflow: 'hidden'}}>
                  <View style={{ borderRadius: 10, overflow: 'hidden'}}>
                    <Text style={styles.welcomeText}>
                      Welcome!
                    </Text>
                  </View>
                    <View style={{marginTop: 15, borderRadius: 10,overflow: 'hidden'}}>
                      <Text
                        style={styles.quoteText}
                      >
                        "{quote === null? "":quote.quote}"
                      </Text>
                      <Text
                        style={styles.authorText}
                      >
                        - {quote === null? "":quote.author}
                      </Text>
                    </View>
                  </View>
              </View>

            <Animatable.View ref={(c) => this.downArrow = c} delay={750} animation="slideInUp" style={{position: 'absolute', marginLeft: '35%', marginTop: IS_X?'207%':'170%'}}>
              <Icon
                iconStyle={{color: 'white'}}
                name='keyboard-arrow-down' />
            </Animatable.View>
            <Animatable.View ref={(c) => this.upArrow = c} delay={750} animation="slideInDown" style={{position: 'absolute', marginLeft: '35%', marginTop: IS_X?'8%':'2%'}}>
              <Icon
                name='keyboard-arrow-up' />
            </Animatable.View>
            <Animatable.View ref={(c) => this.rightArrow = c} delay={750} animation="slideInRight" style={{position: 'absolute', marginLeft: '92%', marginTop: '80%'}}>
              <Icon
                name='keyboard-arrow-right' />
            </Animatable.View>
            <Animatable.View ref={(c) => this.leftArrow = c} delay={750} animation="slideInLeft" style={{position: 'absolute',marginLeft: '0.2%', marginTop: '80%'}}>
              <Icon
                name='keyboard-arrow-left' />
            </Animatable.View>

        <Animatable.View animation="slideInUp" style={{flex:1,position: 'absolute', right: 55, bottom: 110}}>
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
        </Animatable.View>
        </ImageBackground>
          </View >
          <Profile
            navigation={navigation}
          />
        </Swiper>
        <Answer
          toInbox={this.toInbox.bind(this)}
          navigation={navigation}
          toAskPage={this.toAskPage.bind(this)}
          {...this.props}
        />
      </Swiper>
    );
  }
};

const mapStateToProps = ( state, ownProps ) => {
  if (state.quote ===  null) {
    return {quote:'',author:''}
  }
  return {
      quote: state.quote.quote
  }
}

export default connect(mapStateToProps)(Home);
