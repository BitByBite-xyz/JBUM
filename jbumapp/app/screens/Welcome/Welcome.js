import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  AsyncStorage
} from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import FadeInView from 'react-native-fade-in-view';

import Wallpaper from '../../components/Wallpaper';
import {email} from '../../components/Communications';
import images from '../../config/images';

const B = (props) => <Text style={styles.textBold}>{props.children}</Text>
const URL_KEY = 'thisisfun';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOpenedURL:false,
      loggingIn: false,
      loginData:null
    }
    this.mounted = false;
  }
  componentWillMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    this.mounted = true;
  }

  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem(URL_KEY).then((url)=>{
        if (url && url !== 'done' && !this.state.hasOpenedURL) {
          this.handleOpenURL({url:url});
          AsyncStorage.setItem(URL_KEY, 'done');
        }
      }).catch((err) => {
        console.log(err);
      })
    }, 700);
    
  }

  componentDidUnmount(){
    Linking.removeEventListener('url', this.handleOpenURL);    
  }

  handleOpenURL = (event) => { 
    if (this.state.hasOpenedURL) return;
    const { navigation } = this.props;
    const url = event.url;
    const linkData = url.replace(/.*?:\/\//g, '');
    this.setState({hasOpenedURL:true});
    this.handleCreateAccount(linkData);
  }

  handleCreateAccount = (linkData) => {
    if (linkData !== null && !Meteor.userId()) {
      Meteor.call('createUserAccount', linkData, (err, response) => {
        if (err) {
          console.log("err: "+err.reason);
          Alert.alert(
            'Oops! Invite link didn\'t work','',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Help', onPress: () => email('contact@bitbybite.co','connor.larkin1@gmail.com','','I Need Help creating my JBUM account','🌀 your problem here 🌀')},
            ],
            { cancelable: false }
          );
          return;
        } else {
          this.state.loginData = response;
          this.handleLogin();
        }
      });
    }
  }
  handleLogin = () => {
    if(this.state.loginData !== null && !Meteor.userId()){
      const { loginData } = this.state;
      console.log(loginData);
      Meteor.loginWithPassword(loginData.username, loginData.password, (err) => {
        if (err) {
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
        }
        this.props.navigation.navigate('AccountSetup', { loginData: loginData })
      });
    }
  }

  toCreateAccount = () => {
    Alert.alert(
      'Please navigate to your email application and tap the invite link we sent you','',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Help', onPress: () => email('contact@bitbybite.co','connor.larkin1@gmail.com','','I Need Help creating my JBUM account','🌀 your problem here 🌀')},
      ],
      { cancelable: false }
    );
    //this.props.navigation.navigate('BarcodeScanner');
  }

  toLogin = () => {
    this.props.navigation.navigate('Login');
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
