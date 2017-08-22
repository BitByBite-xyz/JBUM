import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';

import { Jiro } from 'react-native-textinput-effects';
import { Button } from 'react-native-elements'
import { Accounts } from 'react-native-meteor';

export default class PasswordPage extends Component {
  constructor() {
    super();

    this.state = {
      password : '',
      confirmPassword: '',
    };

  }

  validateInput = () => {
    const { password, confirmPassword } = this.state;
    const { showAlert, swiper } = this.props;
    const MAIN_WARN_COLOR = '#FF9A1E'

    const items = [
      {key: 0, backgroundColor: MAIN_WARN_COLOR, type: 'info', title: 'Info', message: 'Complete this slide before moving on!'},
      {key: 1, backgroundColor: MAIN_WARN_COLOR, type: 'warn', title: 'Warning', message: 'Passwords do not match!'},
    ]

    let valid = true;

    if (password.length === 0 || password.length === 0) {
      showAlert(items[0]);
      valid = false;
    }

    if ( password !== confirmPassword) {
      showAlert(items[1]);
      valid = false;
    }

    if (valid) {
      this.props.handlePageComplete();
      Accounts.changePassword(this.props.previousPass, password, (err) => {
        if (err) {
          console.log("change err"+err.details);
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
          return;
        }
      });

      swiper.scrollBy(1);
    }


  }

  render() {
    const {password, confirmPassword} = this.state;
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
            onChangeText={(text) => { this.setState({password: text}) }}
          />
          <Jiro
            labelStyle={{fontSize: 22, color: 'white'}}
            label={'Confirm Password'}
            secureTextEntry={true}
            borderColor={'#4AD9B9'}
            inputStyle={{ color: 'white' }}
            onChangeText={(text) => { this.setState({confirmPassword: text}) }}
          />
          <View style={{marginTop: 50}}>
            <Button
              large
              iconRight
              backgroundColor={'#4AD9B9'}
              onPress={() => this.validateInput()}
              icon={{name: 'account-circle'}}
              textStyle={{fontSize: 22, color: 'white'}}
              title='Create Account' />
          </View>
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
