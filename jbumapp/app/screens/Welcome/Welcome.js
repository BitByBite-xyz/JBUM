import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';

import Wallpaper from '../../components/Wallpaper';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import FadeInView from 'react-native-fade-in-view';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
  }
  componentWillMount() {
    this.mounted = true;
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
        <View style={styles.bigContainer}>

            <FadeInView
              duration={3000}
              style={styles.header}
            >

              <Text style={styles.text}>
                    Just Between You and Me
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
    //backgroundColor: colors.background,
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
  bigContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

});
