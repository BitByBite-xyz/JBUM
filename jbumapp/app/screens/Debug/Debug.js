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
  }
  toInbox(){
    this.props.navigation.navigate('Inbox');

  }

  toBarcodeScanner(){
    this.props.navigation.navigate('BarcodeScanner');

  }
  toSettings(){
    this.props.navigation.navigate('Settings');
    console.log("NAV: ", this.props.navigation);

  }
  toAccountSetup(){
    this.props.navigation.navigate('AccountSetup');
  }

  render() {
    return (
      <Pages
        horizontal={false}
        indicatorPosition={'none'}
        startPage={1}
        >
        <Ask/>
        <Pages
          startPage={1}
          indicatorPosition={'none'}
          rtl>
          <Settings/>
          <View style={{ flex: 1, backgroundColor: 'green' }} />
          <Profile/>
        </Pages>
        <Home />
      </Pages>
    );
  }
};

export default DebugContainer;
