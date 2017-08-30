import React, { Component } from 'react';
import styles from './styles';
import {
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Pages } from '../../components/SwipePages';
import { Icon } from 'react-native-elements'

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
    this.pages.scrollToPage(0)
  }

  scrollToPage = () => {
    console.log('hey');
    this.pages.scrollToPage(1)
  }

  render() {
    const { navigation } = this.props;
    return (
      <Pages
        horizontal={false}
        indicatorPosition={'none'}
        startPage={1}
         ref={(c) => this.pages = c}
      >
        <Ask
          navigation={navigation}
          scrollToPage={this.scrollToPage}
        />
        <Pages
          startPage={1}
          indicatorPosition={'none'}
          rtl
          >
          <Settings
          navigation={navigation}/>
          <View style={{ flex: 1, backgroundColor: 'transparent' }} >
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
                  style={{position: 'absolute', marginLeft: '1.5%', marginTop: '80%'}}
                  name='keyboard-arrow-left' />
          </View >
          <Profile
          navigation={navigation}/>
        </Pages>
        <Home
          navigation={navigation}
          toAskPage={this.toAskPage.bind(this)}/>
      </Pages>
    );
  }
};

export default DebugContainer;
