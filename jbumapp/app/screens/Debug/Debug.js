import React, { Component } from 'react';
import styles from './styles';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Pages } from 'react-native-pages';


import Ask from '../Ask';
import Home from '../Home';

import Profile from '../Profile';
import Settings from '../Settings';


class DebugContainer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      loading: true
    };


  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
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
    const { loading } = this.state;
    const { navigation } = this.props;

    if(loading) {
      return null; // render null when app is not ready
    }

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
          <View style={{ flex: 1, backgroundColor: 'blue' }} />
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
