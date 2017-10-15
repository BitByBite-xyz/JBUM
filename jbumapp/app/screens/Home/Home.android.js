import React, { Component } from 'react';
import styles from './styles';
import {
  Text,
  View,
  ScrollView,
  Image,
  Keyboard,
  Animated
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

import {AnimateIn} from '../../components/Animations';

import images from '../../config/images';
import {quotes} from '../../config/styles';
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
      loading: true
    };
  }
  componentDidMount() {
    if (!this.props.user) {
      this.props.navigation.navigate('WelcomeStack')
    }


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

  render() {
    const { navigation } = this.props;
    const quoteIndex = Math.floor(quotes.length * Math.random());

    return (
          <View style={{ flex: 1, backgroundColor: 'transparent' }} effect='slide' >
            <Image
              source={images.homeUnderlay}
              style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <Image
              source={images.homeBackground}
              style={{width: '100%', height: '95.5%'}}
            />
            <AnimateIn>
              <Text style={{ marginTop: '-93%', marginLeft: '10%', fontFamily: 'Avenir', fontSize: 45, fontWeight: '700'}}>
                Welcome!
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
          </View >
    );
  }
};

export default createContainer(params=>{
  return {
      user: Meteor.user()
  };
}, Home)
