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
	Icon,
  Header
}
from 'react-native-elements';

import AppIntro from 'react-native-app-intro';
import PageOne from '../../components/AccountSetupComponents/PageOne';
import PageTwo from '../../components/AccountSetupComponents/PageTwo';
import PageThree from '../../components/AccountSetupComponents/PageThree';
import PageFour from '../../components/AccountSetupComponents/PageFour';


export default class AccountSetup extends Component {
  constructor() {
    super();

          this.state = {
              currentIndex : 0
          };
  }

  nextBtnHandle = (index) => {
      Alert.alert('Next');
      console.log(index);
      this.setState(previousState => {
        return { currentIndex: -1 };
      });
  }

  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    return(
      <AppIntro dotColor='#bbddff'
                activeDotColor='#1E90FF'
                leftTextColor='#1E90FF'
                rightTextColor='#1E90FF'
                showSkipButton={false}
                onSlideChange={this.onSlideChangeHandle}
                onNextBtnClick={this.nextBtnHandle}
                defaultIndex={this.state.currentIndex}>
        <View style={[styles.slide]}>
          <PageOne/>
        </View>
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <PageTwo />
        </View>
        <View style={[styles.slide,{ backgroundColor: '#bbddff' }]}>
          <PageThree />
        </View>
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
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
