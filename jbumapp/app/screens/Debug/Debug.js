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
    this.props.navigation.navigate('Ask');
  }

  scrollToPage = () => {
    console.log('hey');
    this.pages.scrollToPage(2)
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
              source={images.profileBannerImg}
              style={{width: '100%', height: '100%'}}
            />
          </View >
          <Profile
          navigation={navigation}/>
        </Pages>
        <Home
          navigation={navigation}/>
      </Pages>
    );
  }
};

export default DebugContainer;
