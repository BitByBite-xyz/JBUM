import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Picker from 'react-native-picker';
import { Button } from 'react-native-elements'
import Confetti from 'react-native-confetti';

import {DEVICE_WIDTH} from '../../../config/styles';

const isSmallDisplay = DEVICE_WIDTH <= 320;

export default class InitialPage extends Component {
  componentDidMount() {
    const { handlePageComplete } = this.props;
    handlePageComplete();
  }

  render() {
    const { handleAbandonSetup } = this.props;

    return(
      <View>
        <TouchableOpacity onPress={handleAbandonSetup} style={{position: 'absolute'}}>
          <Text style={{color: 'white', fontSize: 18, marginTop: 10, fontWeight: '500'}}>Cancel</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: '45%'}}><Text style={styles.pageTitle}>Account Setup</Text></View>
        <View style={{marginTop: '17%'}}>
            <Text style={styles.text}>All of the following information you enter will be completely anonymous and will help personalize your experience.{'\n'}{'\n'}Please do your best to fill out these questions.</Text>
        </View>
      </View>
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
    fontSize: isSmallDisplay? 15:18,
    fontWeight: '600',
  },
  pageTitle: {
    color: '#fff',
    fontSize: isSmallDisplay? 35:45,
    fontWeight: 'bold',
  },
});
