 import React, { Component } from 'react';
 import {
   	Text,
   	View,
   	Image,
   	StatusBar,
   	Linking,
    TouchableOpacity,
    Alert,
    StyleSheet,
}
from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import {
	Button,
	Icon
}
from 'react-native-elements';
import AppIntro from 'react-native-app-intro';
import PageOne from '../../components/AccountSetupComponents/PageOne';
import PageTwo from '../../components/AccountSetupComponents/PageTwo';
import PageThree from '../../components/AccountSetupComponents/PageThree';
import PageFour from '../../components/AccountSetupComponents/PageFour';


export default class AccountSetup extends Component {

  render() {
    return(
      <AppIntro>
        <View style={[styles.slide,{ backgroundColor: '#1E90FF' }]}>
          <PageOne />
        </View>
        <View style={[styles.slide, { backgroundColor: '#1E90FF' }]}>
          <PageTwo />
        </View>
        <View style={[styles.slide,{ backgroundColor: '#1E90FF' }]}>
          <PageThree />
        </View>
        <View style={[styles.slide, { backgroundColor: '#1E90FF' }]}>
          <PageFour />
        </View>
      </AppIntro>
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
