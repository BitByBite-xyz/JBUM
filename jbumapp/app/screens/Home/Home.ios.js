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
  DeviceEventEmitter
} from 'react-native';
import { Meteor } from 'react-native-meteor';
import { NavigationActions } from 'react-navigation';
import Swiper from 'react-native-swiper';
import ActionButton from 'react-native-action-button';
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

import images from '../../config/images';
import {quotes} from '../../config/styles';
import { changeNetworkStatus } from '../../actions/network'
import { changeNotificationStatus } from '../../actions/notification';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      inboxPosts: 0
    };
  }
  componentDidMount() {
    NetInfo.fetch().done((reach) => {
      this.handleNetworkChange(reach);
    });
    this.props.dispatch(changeNotificationStatus('info'));
    NetInfo.addEventListener('change', this.handleNetworkChange);
    setTimeout(() => {
      if (this.downArrow) {
        this.downArrow.transitionTo({opacity: 0});
        this.rightArrow.transitionTo({opacity: 0});
        this.leftArrow.transitionTo({opacity: 0});
        this.upArrow.transitionTo({opacity: 0});
      }
    }, 2500);

    this.setUpNotifications();
  }
  setUpNotifications = () => {
    if (Meteor && !Meteor.user()) {
      return;
    }
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister(data) {
        Meteor.call('notifications.set.pushToken', data, err => {
          if (err) { alert(`notifications.set.pushToken: ${err.reason}`); }
        });
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification(notification) {
        console.log(notification);
        //alert(notification.message);
      },
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
      /**
        * IOS ONLY: (optional) default: true
        * - Specified if permissions will requested or not,
        * - if not, you must call PushNotificationsHandler.requestPermissions() later
        */
      requestPermissions: true,
    });
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + (3 * 1000)) // in 60 secs
    });
  }
  handleNotif = () => {
    this.props.dispatch(changeNotificationStatus(notification.message));
  }

  componentWillUnmount(){
    NetInfo.removeEventListener('change', this.handleNetworkChange);
  }

  handleNetworkChange = (info) => {
    this.props.dispatch(changeNetworkStatus(info));
  }
  updateInboxPosts(item){
    //this.setState({inboxPosts:item});
  }

  onScrollBeginDrag = () => {
    this.downArrow.transitionTo({opacity: 0});
    this.rightArrow.transitionTo({opacity: 0});
    this.leftArrow.transitionTo({opacity: 0});
    this.upArrow.transitionTo({opacity: 0});
  }

  toInbox(){
    //this.props.navigation.navigate('Inbox');

    this.pages.scrollBy(-1,true);
    setTimeout(() => {
      this.horizontalPage.scrollBy(-1,true);
    }, 300);

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
    const { navigation } = this.props;
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
            updateInboxPosts={this.updateInboxPosts.bind(this)}
          />
          <View style={{ flex: 1, backgroundColor: 'transparent' }} effect='slide' >
            <Image
              source={images.homeUnderlay}
              style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <Image
              source={images.homeBackground}
              style={{width: '100%', height: '85.5%'}}
            />
            <AnimateIn>

                <Text style={styles.welcomeText}>
                  Welcome,
                </Text>

                <Text
                  style={styles.quoteText}
                >
                  "{quotes[quoteIndex].quote}"
                </Text>
                <Text
                  style={styles.authorText}
                >
                  - {quotes[quoteIndex].author}
                </Text>



            </AnimateIn>

            <Animatable.View ref={(c) => this.downArrow = c} delay={750} animation="slideInUp" style={{position: 'absolute', marginLeft: '35%', marginTop: '170%'}}>
              <Icon
                iconStyle={{color: 'white'}}
                name='keyboard-arrow-down' />
            </Animatable.View>
            <Animatable.View ref={(c) => this.upArrow = c} delay={750} animation="slideInDown" style={{position: 'absolute', marginLeft: '35%', marginTop: '2%'}}>
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

        <Animatable.View animation="slideInUp" style={{marginTop: '-4%'}}>
          <ActionButton buttonColor="#F1606E">
            <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#9b59b6' title="Call 911" onPress={() => this.handleFloatingButtonPress('911')}>
              <Icon name="call" style={styles.actionButtonIcon} color={'white'} />
            </ActionButton.Item>
            <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#3498db' title="Text a Tip" icon='call' onPress={() => this.handleFloatingButtonPress("textATip")}>
              <Icon name="textsms" style={styles.actionButtonIcon} color={'white'} />
            </ActionButton.Item>
            <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#1abc9c' title="24 Hour Suicide Lifeline" onPress={() => this.handleFloatingButtonPress("lifeline")}>
              <Icon name="call" style={styles.actionButtonIcon} color={'white'} />
            </ActionButton.Item>
          </ActionButton>
        </Animatable.View>
          </View >
          <Profile
            navigation={navigation}/>
        </Swiper>
        <Answer
          toInbox={this.toInbox.bind(this)}
          navigation={navigation}
          inboxPosts={this.state.inboxPosts}
          toAskPage={this.toAskPage.bind(this)}/>
      </Swiper>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    shouldHandleNotification: state.shouldHandleNotification,
    notificationData: state.notificationData,
  };
};

export default connect(mapStateToProps)(Home);
