/*
This container is what is acctually returned when you call this directory (look
in index.js) and signin.js is implemented in the return statement but the func
props (signin and stuff) are done from here because its better to separate the
meteor stuff and app logic w RN stuff
 */

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Linking, KeyboardAvoidingView,LayoutAnimation, Alert, ActivityIndicator, NetInfo } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Button, Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import { NavigationActions } from 'react-navigation';
import ReactNativeHaptic from 'react-native-haptic';

import { colors } from '../../config/styles';
import images from '../../config/images';

import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import Wallpaper from '../../components/Wallpaper';

import styles from './styles';

const B = (props) => <Text style={styles.textBold}>{props.children}</Text>

class Login extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      confirmPasswordVisible: false,
      error: null,
      isLoading:false
    };
  }
  componentWillMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  validInput() {
    const { username, password, confirmPassword, confirmPasswordVisible } = this.state;
    let valid = true;
    if (username.length === 0 || password.length === 0) {
      Alert.alert('Incomplete Data!','Please fill in the login and password fields')
      valid = false;
      this.setState({isLoading:false})
    }

    return valid;
  }

  handleSignIn() {
    ReactNativeHaptic.generate('selection')
    this.setState({isLoading:true})
    let isa = this.validInput();

    NetInfo.fetch().done((reach) => {
      if (reach.toLowerCase() === 'none'){
        alert('No network detected! please connect to the internet to complete account setup.');
        this.setState({isLoading:false});
        return;
      }
    });

    if (isa) {
      const { username, password } = this.state;
      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          Alert.alert('Error Logging in',err.reason)
          this.setState({isLoading:false})
        }
        else {
          this.props.navigation.navigate('HomeStack', {overrideBiometric:true});
        }
      });
    }
  }

  render() {
    const { signIn, error, confirmPasswordVisible, isLoading } = this.state;

    return (
      <Wallpaper>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          <FadeInView
            duration={700}
            style={styles.header}
          >
            <Text style={styles.text}>
                  Just Between <B>U</B> and <B>Me</B>
            </Text>
          </FadeInView>

          <FadeInView
              duration={2000}
          >
            <InputWrapper>
              <GenericTextInput
                source={images.usernameImg}
                placeholder="Username"
                onChangeText={(username) => this.setState({username: username })}
                testID="username-textfield"
              />
              <GenericTextInput
                source={images.passwordImg}
                placeholder="Password"
                onChangeText={(password) => this.setState({password: password })}
                secureTextEntry
                returnKeyType='next'
                borderTop
                blurOnSubmit={true}
                testID="password-textfield"
              />
              {confirmPasswordVisible ?
                <GenericTextInput
                  placeholder="confirm password"
                  onChangeText={(confirmPassword) => updateState({ confirmPassword })}
                  secureTextEntry
                  returnKeyType='done'
                  borderTop
                  blurOnSubmit={true}
                />
              : null}
            </InputWrapper>

          </FadeInView>

          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
            <KeyboardSpacer />
          </View>

          <FadeInView
            duration={1500}
            style={styles.buttons}
          >
              {isLoading ? <ActivityIndicator size={'large'}/>:
                <View style={styles.buttons}>
                  <Button
                    title='LOGIN'
                    icon={{name: 'add-circle-outline'}}
                    backgroundColor={'transparent'}
                    borderRadius={20}
                    onPress={() => this.handleSignIn()}
                    fontFamily= 'Avenir'
                    fontSize={15}
                    fontWeight='500'
                    iconRight={true}
                    testID="login-button"
                  />
                </View>
              }
          </FadeInView>
        </KeyboardAvoidingView>

          <FadeInView
            duration={4000}
            style={styles.socialMediaButtons}
          >
            <View style={styles.buttons}>

              <SocialIcon
                type='twitter'
                raised={false}
                onPress={()=> {
                  let url = 'https://twitter.com/JBUMapp';
                  if(Linking.canOpenURL(url)) {
                    Linking.openURL(url);
                  }
                }}
              />
              <SocialIcon
                type='facebook'
                raised={false}
                onPress={()=> {
                  let url = 'https://www.facebook.com/JBUMapp/';
                  if(Linking.canOpenURL(url)) {
                    Linking.openURL(url);
                  }
                }}
              />

            </View>
          </FadeInView>

          <FadeInView
            duration={5000}
            style={styles.buttons}
          >

            <View style={styles.contactUsContainer}>
              <Text style={styles.contactUsText}>Don't have a login?</Text>
              <View style={width=2}/>
              <Text style={styles.contactUsText2} onPress={()=> {
                let url = 'http://www.bitbybite.co';
                if(Linking.canOpenURL(url)) {
                  Linking.openURL(url);
                }
              }}> Contact us</Text>
            </View>

          </FadeInView>
      </Wallpaper>
    );
  }
}

export default Login;
