import React, { Component } from 'react';
import styles from './styles';
import {
  Text,
  View,
  ScrollView,
  Image,
  Keyboard,
  Animated,
  Alert
} from 'react-native';
import DeviceInfo from 'react-native-device-info'
import { NavigationActions } from 'react-navigation';
import Swiper from 'react-native-swiper';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

import Ask from '../Ask';
import Answer from '../Answer';
import Profile from '../Profile';
import Settings from '../Settings';

import {AnimateIn} from '../../components/Animations';

import images from '../../config/images';
import {quotes} from '../../config/styles';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    console.log(DeviceInfo.getModel());
  }
  componentDidMount() {
    setTimeout(() => {
      if (this.downArrow) {
        this.downArrow.transitionTo({opacity: 0});
        this.rightArrow.transitionTo({opacity: 0});
        this.upArrow.transitionTo({opacity: 0});
      }

    }, 2000);
  }

  onScrollBeginDrag = () => {
    this.downArrow.transitionTo({opacity: 0});
    this.rightArrow.transitionTo({opacity: 0});
    this.upArrow.transitionTo({opacity: 0});
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
    Alert.alert(
      'Emergency button pressed',
      'Are you sure you want to ' + message + '?'
    );
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
        ref={(c) => this.pages = c}
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
        >
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
              <Text style={{ marginTop: '-102%', marginLeft: '10%', fontFamily: 'Avenir', fontSize: 45, fontWeight: '700'}}>
                Welcome,
              </Text>

              <Text
                style={{ marginTop: '2%', marginLeft: '10%', fontFamily: 'Avenir', fontSize: 18, fontWeight: '500', marginRight: 35}}
              >
                {quotes[quoteIndex].quote} {"\n"}{"\n"} - {quotes[quoteIndex].author}
              </Text>

            </AnimateIn>

            <Animatable.View ref={(c) => this.downArrow = c} animation="slideInUp" style={{position: 'absolute', marginLeft: '35%', marginTop: '170%'}}>
              <Icon
                iconStyle={{color: 'white'}}
                name='keyboard-arrow-down' />
            </Animatable.View>
            <Animatable.View ref={(c) => this.upArrow = c} animation="slideInDown" style={{position: 'absolute', marginLeft: '35%', marginTop: '2%'}}>
              <Icon
                name='keyboard-arrow-up' />
            </Animatable.View>
            <Animatable.View ref={(c) => this.rightArrow = c} animation="slideInRight" style={{position: 'absolute', marginLeft: '92%', marginTop: '80%'}}>
              <Icon
                name='keyboard-arrow-right' />
            </Animatable.View>
        <ActionButton buttonColor="#F1606E">
          <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#9b59b6' title="Call 911" onPress={() => this.handleFloatingButtonPress("Call 911")}>
            <Icon name="call" style={styles.actionButtonIcon} color={'white'} />
          </ActionButton.Item>
          <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#3498db' title="Text a Tip" icon='call' onPress={() => this.handleFloatingButtonPress("Text a Tip")}>
            <Icon name="textsms" style={styles.actionButtonIcon} color={'white'} />
          </ActionButton.Item>
          <ActionButton.Item textStyle={{fontSize: 14}} buttonColor='#1abc9c' title="24 Hour Hotline" onPress={() => this.handleFloatingButtonPress("Call the 24 Hour Hotline")}>
            <Icon name="call" style={styles.actionButtonIcon} color={'white'} />
          </ActionButton.Item>
        </ActionButton>
          </View >
          <Profile
            navigation={navigation}/>
        </Swiper>
        <Answer
          navigation={navigation}
          toAskPage={this.toAskPage.bind(this)}/>
      </Swiper>
    );
  }
};

export default Home;
