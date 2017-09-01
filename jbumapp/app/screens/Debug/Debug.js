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


class DebugContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount(){
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

  onIndexChanged = () => {
    Keyboard.dismiss();
  }

  render() {
    const { navigation } = this.props;

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
              <Text style={{position: 'absolute', marginTop: '50%', marginLeft: '16%', fontFamily: 'Avenir', fontSize: 45, fontWeight: '700'}}>Welcome,</Text>
              <Text style={{position: 'absolute', marginTop: '67%', marginLeft: '17%', fontFamily: 'Avenir', fontSize: 18, fontWeight: '500', marginRight: 35}}>“The only way to make sense out of change is to plunge into it”</Text>
              <Text style={{position: 'absolute', marginTop: '82%', marginLeft: '17%', fontFamily: 'Avenir', fontSize: 18, fontWeight: '500', marginRight: 35}}>-Alan Watts</Text>

                <Icon
                  iconStyle={{color: 'white'}}
                  style={{position: 'absolute', marginLeft: '48%', marginTop: '170%'}}
                  name='keyboard-arrow-down' />
                <Icon
                  style={{position: 'absolute', marginLeft: '48%', marginTop: '2%'}}
                  name='keyboard-arrow-up' />
                <Icon
                  style={{position: 'absolute', marginLeft: '92%', marginTop: '80%'}}
                  name='keyboard-arrow-right' />

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
