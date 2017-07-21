/*
This is where the login screen is put together. the .onPress methods are props
from SignInContainer so when changing butten funcionality look there..
 */

import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Linking } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Button, Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import FadeInView from 'react-native-fade-in-view';//{/* onFadeComplete={() => alert('Ready') */}

import { colors } from '../../config/styles';
import images from '../../config/images';

import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import Wallpaper from '../../components/Wallpaper';

import styles from './styles';

const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;
  const B = (props) => <Text style={styles.textBold}>{props.children}</Text>

  return (

<Wallpaper>

    <View style={styles.container}>

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
          onChangeText={(username) => updateState({ username })}
        />
        <GenericTextInput
          source={images.passwordImg}
          placeholder="Password"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          returnKeyType='next'
          borderTop
        />
        {confirmPasswordVisible ?
          <GenericTextInput
            placeholder="confirm password"
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
            secureTextEntry
            returnKeyType='done'
            borderTop
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
          onPress={signIn}
          fontFamily= 'Avenir'
          fontSize={15}
          fontWeight='500'
          iconRight={true}
        />
        <Button
          title='CREATE ACCOUNT'
          backgroundColor={'transparent'}
          icon={{name: 'supervisor-account'}}
          borderRadius={20}
          onPress={createAccount}
          fontFamily= 'Avenir'
          fontSize={15}
          fontWeight='500'
        />
      </View>

    </FadeInView>


    <FadeInView
      duration={4000}
      style={styles.buttons}
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

  </View>
</Wallpaper>

  );
};

SignIn.propTypes = {
  updateState: React.PropTypes.func,
  signIn: React.PropTypes.func,
  createAccount: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default SignIn;