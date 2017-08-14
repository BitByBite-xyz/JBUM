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

import Swiper from 'react-native-swiper';
import InitialPage from '../../components/AccountSetupComponents/InitialPage';
import PageOne from '../../components/AccountSetupComponents/PageOne';
import PageTwo from '../../components/AccountSetupComponents/PageTwo';
import PageThree from '../../components/AccountSetupComponents/PageThree';
import PageFour from '../../components/AccountSetupComponents/PageFour';
import PasswordPage from '../../components/AccountSetupComponents/PasswordPage';


export default class AccountSetup extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex : 0,
    };

  }
  componentDidMount() {

  }

  onSlideChangeHandle = (index, total) => {
    console.log(index);
    if (this.state.currentIndex < index) {
      Alert.alert('Complete this slide before moving on!');

      this.swiper.scrollBy(0);
    }
    else if (this.state.slideComplete){
      this.state.slideComplete = false;
    }

    console.log(index, total);
  }

  handlePageComplete = () => {
    this.state.currentIndex = this.state.currentIndex+1;
  }

  render() {
    return(
      <Swiper dotColor='#bbddff'
                activeDotColor='#1E90FF'
                leftTextColor='#1E90FF'
                rightTextColor='#1E90FF'
                loop={false}
                index={this.state.currentIndex}
                onIndexChanged={this.onSlideChangeHandle}
                ref={(s: React.Element<Swiper>) => this.swiper = s}>
        <View style={[styles.slide, { backgroundColor: '#54C6DB' }]}>
          <InitialPage
            handlePageComplete={this.handlePageComplete}/>
        </View>
        <View style={[styles.slide, { backgroundColor: '#9ED6EA' }]}>
          <PageOne
            handlePageComplete={this.handlePageComplete}/>
        </View>
        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <PageTwo
            handlePageComplete={this.handlePageComplete}/>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#55CFAC' }]}>
          <PageThree
            handlePageComplete={this.handlePageComplete}/>
        </View>
        <View style={[styles.slide, { backgroundColor: '#46C87F' }]}>
          <PasswordPage />
        </View>
        <View style={[styles.slide, { backgroundColor: '#E1A3DC' }]}>
          <PageFour />
        </View>
      </Swiper>
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
