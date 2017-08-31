/*
This container is what is acctually returned when you call this directory (look
in index.js) and signin.js is implemented in the return statement but the func
props (signin and stuff) are done from here because its better to separate the
meteor stuff and app logic w RN stuff
 */

import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Linking, KeyboardAvoidingView,LayoutAnimation } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Button, Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}
import DropdownAlert from 'react-native-dropdownalert'

import { colors } from '../../config/styles';
import images from '../../config/images';

import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import Wallpaper from '../../components/Wallpaper';

import styles from './styles';

import Login from './Login';

const B = (props) => <Text style={styles.textBold}>{props.children}</Text>
const warnItems = [
  {key: 0, backgroundColor: '#FF9A1E', type: 'info', title: 'Info', message: 'Username and password cannot be empty.'},
  {key: 1, backgroundColor: '#FF9A1E', type: 'warn', title: 'Warning', message: 'Passwords do not match!'},
]

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      confirmPasswordVisible: false,
      error: null,
    };
  }
  componentWillMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  componentDidMount() {
  }

  validInput() {
    return true;
    const { username, password, confirmPassword, confirmPasswordVisible } = this.state;
    let valid = true;

    if (username.length === 0 || password.length === 0) {
      this.showAlert(warnItems[0])
      valid = false;
    }

    return valid;
  }

  handleSignIn() {
    let isa = this.validInput();
    if (isa) {
      const { username, password } = this.state;
      Meteor.loginWithPassword(username, password, (err) => {
        if (err) {
          this.showAlert({key: 1, backgroundColor: '#cc0000', type: 'warn', title: 'Check your credentials!'});

          //this.handleError(err.reason);
        }
        else {
          this.props.navigation.navigate('HomeStack');
        }
      });
    }
  }

  showAlert = (item) => { //for DropdownAlert

    const title = 'Warning';
    this.dropdown.alertWithType(item.type, title, item.message);

  }

  render() {
    const { signIn, error, confirmPasswordVisible } = this.state;

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
                  Just Between <B>You </B>and <B>Me</B>
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
              />
              <GenericTextInput
                source={images.passwordImg}
                placeholder="Password"
                onChangeText={(password) => this.setState({password: password })}
                secureTextEntry
                returnKeyType='next'
                borderTop
                blurOnSubmit={true}
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
              />
            </View>

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
              />
              <SocialIcon
                type='facebook'
                raised={false}
              />
              <SocialIcon
                raised={false}
                type='instagram'
              />

            </View>
          </FadeInView>

          <FadeInView
            duration={5000}
            style={styles.buttons}
          >

            <View style={styles.contactUsContainer}>
              <Text style={styles.contactUsText}>Don't have us at your school?</Text>
              <View style={width=2}/>
              <Text style={styles.contactUsText2} onPress={()=> {
                let url = 'http://www.bitbybite.co';
                if(Linking.canOpenURL(url)) {
                  Linking.openURL(url);
                }
              }}> Contact us</Text>
            </View>

          </FadeInView>
          <DropdownAlert
            ref={(ref) => this.dropdown = ref}
          />
      </Wallpaper>
    );
  }
}

export default LoginContainer;
