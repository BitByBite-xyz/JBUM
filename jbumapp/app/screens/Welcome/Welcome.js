/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import Wallpaper from '../../components/Wallpaper';
import {Button } from 'react-native-elements';


export default class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.navigation);

    this.mounted = false;

  }
  componentWillMount() {
    this.mounted = true;
    if (Meteor.user()){
      this.props.navigation.navigate('Tabs');
    }

  }
  toCreateAccount = () => {
    this.props.navigation.navigate('AccountSetup');

  }

  toLogin = () => {
    this.props.navigation.navigate('Login');

  }

  render() {
    return (

      <Wallpaper>
        <View style={styles.container}>
          <Button
            title='Login'
            large
            borderRadius={20}
            icon={{name: 'poll',buttonStyle: styles.buttons}}
            backgroundColor={'transparent'}
            onPress={this.toLogin}
            fontFamily= 'Avenir'
            fontSize={25}
            fontWeight='bold'
            iconRight={true}
          />
          <Button
            title='Create Account'
            large
            borderRadius={20}
            icon={{name: 'pages',buttonStyle: styles.buttons}}
            backgroundColor={'transparent'}
            onPress={this.toCreateAccount}
            fontFamily= 'Avenir'
            fontSize={25}
            fontWeight='bold'
            iconRight={true}
          />
        </View>



      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 40,
    borderRadius: 50,
    zIndex: 100

  },
});
