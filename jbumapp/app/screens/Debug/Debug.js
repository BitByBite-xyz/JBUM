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

import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';

import Ask from '../Ask';
import Home from '../Home';

import Profile from '../Profile';
import Settings from '../Settings';

import images from '../../config/images';
import {quotes} from '../../config/styles';


class DebugContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.downArrow.transitionTo({opacity: 0});
      this.rightArrow.transitionTo({opacity: 0});
      this.upArrow.transitionTo({opacity: 0});
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
            <Animatable.Text
              animation="pulse"
              easing="ease-out"
              iterationCount="1"
              ref={(c) => this.welcomeText = c}
              style={{position: 'absolute', marginTop: '43%', marginLeft: '10%', fontFamily: 'Avenir', fontSize: 45, fontWeight: '700'}}
            >
              Welcome,
            </Animatable.Text>
            <Animatable.Text
              ref={(c) => this.quoteText = c}
              style={{position: 'absolute', marginTop: '66%', marginLeft: '10%', fontFamily: 'Avenir', fontSize: 18, fontWeight: '500', marginRight: 35}}
            >
              {quotes[quoteIndex].quote} {"\n"}{"\n"} - {quotes[quoteIndex].author}
            </Animatable.Text>

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
          <Profile
            navigation={navigation}/>
        </Swiper>
        <Home
          navigation={navigation}
          toAskPage={this.toAskPage.bind(this)}/>
      </Swiper>
    );
  }
};

export default DebugContainer;
