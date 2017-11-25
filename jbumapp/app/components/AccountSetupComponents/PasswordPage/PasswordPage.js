import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

import { Jiro } from 'react-native-textinput-effects';
import { Button } from 'react-native-elements'
import { Accounts } from 'react-native-meteor';

import Loading from '../../Loading';

export default class PasswordPage extends Component {
  constructor() {
    super();

    this.state = {
      password : '',
      confirmPassword: '',
      isLoading:false
    };
  }

  render() {
    const {password, confirmPassword } = this.state;
    const { validateInput, isLoading } = this.props;
    return(

      <KeyboardAvoidingView
        behavior="padding"
      >
        <View style={{alignItems: 'center', marginTop: '15%'}}><Text style={styles.pageTitle}>Account Password</Text></View>
        <View style={{marginTop: '15%'}}> 
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
          {isLoading ? <View style={{marginTop: 110}}> 
                         <Loading /> 
                      </View> :
          <View style={{marginTop: 100}}>
            <Button
              large
              iconRight
              backgroundColor={'#4AD9B9'}
              onPress={() => {
                validateInput(password, confirmPassword);
              }}
              icon={{name: 'account-circle'}}
              textStyle={{fontSize: 22, color: 'white'}}
              title='Continue' />
          </View>
          }
        </View>
      </KeyboardAvoidingView>
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
