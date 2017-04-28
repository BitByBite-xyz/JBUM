import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Linking } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Button, Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import { colors } from '../../config/styles';
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';
import Wallpaper from '../../components/Wallpaper';



const SignIn = (props) => {
  const { updateState, signIn, createAccount, error, confirmPasswordVisible } = props;
  const B = (props) => <Text style={styles.textBold}>{props.children}</Text>

  return (

<Wallpaper>

    <View style={styles.container}>
      <View style={styles.header}>



        <Text style={styles.text}>
				      Just Between <B>You </B>and <B>Me</B>
				</Text>
      </View>

      <InputWrapper>
        <GenericTextInput
          source={usernameImg}
          placeholder="Username"
          onChangeText={(email) => updateState({ email })}
        />
        <GenericTextInput
          source={passwordImg}
          placeholder="Password"
          onChangeText={(password) => updateState({ password })}
          secureTextEntry
          borderTop
        />
        <Button
          title='Sign In'
          backgroundColor='#00abff'
          borderRadius={20}
          onPress={signIn}
          fontFamily= 'Avenir'
          fontSize={17}
          fontWeight='bold'
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

      <View style={styles.error}>
        <Text style={styles.errorText}>{error}</Text>
      </View>

      <View style={styles.buttons}>
        <Button

          icon={{name: 'fingerprint'}}
          backgroundColor='transparent'
          onPress={signIn}
          title='Login' />

          <Button

            icon={{name:'add',borderRadius: 10}}
            onPress={createAccount}
            backgroundColor='transparent'
            title='Create Account' />

      </View>

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
