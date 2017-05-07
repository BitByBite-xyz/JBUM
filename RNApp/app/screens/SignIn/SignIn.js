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
          onChangeText={(email) => updateState({ email })}
        />
        <GenericTextInput
          source={images.passwordImg}
          placeholder="Password"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          borderTop
        />
        {confirmPasswordVisible ?
          <GenericTextInput
            placeholder="confirm password"
            onChangeText={(confirmPassword) => updateState({ confirmPassword })}
            secureTextEntry
            borderTop
          />
        : null}
      </InputWrapper>

    </FadeInView>

    <View style={styles.error}>
      <Text style={styles.errorText}>{error}</Text>
    </View>

    <FadeInView
      duration={3000}
      style={styles.buttons}
    >
      <View style={styles.buttons}>
        <Button
          title='Sign In'
          icon={{name: 'fingerprint'}}
          backgroundColor={colors.buttonBackground}
          borderRadius={20}
          onPress={signIn}
          onLongPress={createAccount}
          fontFamily= 'Avenir'
          fontSize={17}
          fontWeight='bold'
        //  iconRight={true}
        />

      </View>
    </FadeInView>


    <FadeInView
      duration={8000}
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
      duration={10000}
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

    <KeyboardSpacer />

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
