import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import { Jiro } from 'react-native-textinput-effects';

export default class PasswordPage extends Component {

  render() {
    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '35%'}}><Text style={styles.pageTitle}>Account Password</Text></View>
        <View style={{marginTop: '25%'}}>
          <Jiro
            style={{marginBottom: '4%'}}
            labelStyle={{fontSize: 22, color: 'white'}}
            label={'Password'}
            secureTextEntry={true}
            borderColor={'#4AD9B9'}
            inputStyle={{ color: 'white' }}
          />
          <Jiro
            labelStyle={{fontSize: 22, color: 'white'}}
            label={'Confirm Password'}
            secureTextEntry={true}
            borderColor={'#4AD9B9'}
            inputStyle={{ color: 'white' }}
          />
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
    fontSize: 22,
    fontWeight: '600',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
