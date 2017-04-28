import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Linking } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Button, Icon } from 'react-native-elements'
import { SocialIcon } from 'react-native-elements';
import { colors } from '../../config/styles';
import GenericTextInput, { InputWrapper } from '../../components/GenericTextInput';
import images from '../../config/images';
import styles from './styles';
import Wallpaper from '../../components/Wallpaper';



const AccountSetup = (props) => {


  return (



    <View style={styles.container}>

    </View>


  );
};

AccountSetup.propTypes = {
  updateState: React.PropTypes.func,
  next: React.PropTypes.func,
  error: React.PropTypes.string,
  confirmPasswordVisible: React.PropTypes.bool,
};

export default AccountSetup;
