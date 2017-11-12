import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Alert
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import FadeInView from 'react-native-fade-in-view';

import Wallpaper from '../../components/Wallpaper';
import {email} from '../../components/Communications';
import images from '../../config/images';

const B = (props) => <Text style={styles.textBold}>{props.children}</Text>

export default class Welcome extends Component {
  constructor(props) {
    super(props);

  }
  



  toLogin = () => {
    this.props.navigation.navigate('Login');
  }

  toCreateAccount = () => {
    this.props.navigation.navigate('BetaScreen');
  }

  render() {
    return (
      <Wallpaper img={images.welcomeBackground}>
        <View style={styles.bigContainer}>

            <FadeInView
              duration={3000}
              style={styles.header}
            >
              <Text style={styles.text}>
                Just Between <B>U</B> and <B>Me</B>
              </Text>
            </FadeInView>

          <FadeInView duration={2000}>
            <View style={styles.container}>
              <Animatable.View animation='fadeInDown' duration={1000}>
                <Button
                  title='Login'
                  large
                  borderRadius={20}
                  icon={{name: 'account-circle',buttonStyle: styles.buttons}}
                  backgroundColor={'transparent'}
                  onPress={this.toLogin}
                  fontFamily= 'Avenir'
                  fontSize={25}
                  fontWeight='bold'
                  iconRight={true}
                  opacity={0.1}
                  testID="login"
                />
              </Animatable.View>
              <Animatable.View animation='fadeInUp' duration={1000}>
                <Button
                  title='Create Account'
                  large
                  borderRadius={20}
                  icon={{name: 'add',buttonStyle: styles.buttons}}
                  backgroundColor={'transparent'}
                  onPress={this.toCreateAccount}
                  fontFamily= 'Avenir'
                  fontSize={25}
                  fontWeight='bold'
                  iconRight={true}
                />
              </Animatable.View>
            </View>
          </FadeInView>
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
    flexDirection: 'column',
    height: 40,
    borderRadius: 50,
    zIndex: 100
  },
  buttonText: {
    fontSize: 20
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Light',
    fontSize: 26,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: '75%'
  },
  textBold: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    fontSize: 26,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: '75%'
  },
  bigContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

});
