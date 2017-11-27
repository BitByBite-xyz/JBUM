import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Alert,
  AsyncStorage,
  NetInfo,
  ActivityIndicator
} from 'react-native';
import Meteor, { Accounts, createContainer } from 'react-native-meteor';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import FadeInView from 'react-native-fade-in-view';
import ReactNativeHaptic from 'react-native-haptic';
import _ from 'lodash';

import Wallpaper from '../../components/Wallpaper';
import {email} from '../../components/Communications';
import images from '../../config/images';

import { changeNetworkStatus } from '../../actions/network';

const B = (props) => <Text style={styles.textBold}>{props.children}</Text>
const URL_KEY = 'thisisfun';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOpenedURL:false,
      loggingIn: false,
      loginData:null,
      isCreatingAccount:false,
    }
    this.mounted = false;
  }
  componentWillMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    this.mounted = true;
  }

  componentDidMount() {
    NetInfo.addEventListener('change', this.handleNetworkChange);

    setTimeout(() => {
      AsyncStorage.getItem(URL_KEY).then((url)=>{
        if (url && url !== 'done' && !this.state.hasOpenedURL) {
          AsyncStorage.setItem(URL_KEY, 'done').then(()=> {
            this.handleOpenURL({url:url});
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    }, 700);
    
  }

  componentDidUnmount(){
    Linking.removeEventListener('url', this.handleOpenURL); 
    NetInfo.removeEventListener('change', this.handleNetworkChange);    
  }

  handleNetworkChange = (info) => {
    const { user } = this.props;
    this.props.navigation.dispatch(changeNetworkStatus(info))

    if (info !== 'none' && user) {
      this.props.navigation.navigate('HomeStack')
    }
  }

  handleOpenURL = (event) => { 
    NetInfo.fetch().done((reach) => {
      if (reach.toLowerCase() === 'none'){
        alert('No network detected! please connect to the internet to create an account!');
        return;
      }
    }); 
    ReactNativeHaptic.generate('selection')
    if (this.state.hasOpenedURL) return;

    const url = event.url;
    const linkData = url.replace(/.*?:\/\//g, '');
    this.setState({hasOpenedURL:true});
    var handleCreateAccountOnce = _.once(this.handleCreateAccount.bind(this));
    
    setTimeout(() => {
      handleCreateAccountOnce(linkData);
    }, 500);
  }

  handleCreateAccount = (linkData) => {
    if (this.state.isCreatingAccount) return;

    const { user } = this.props;
    if (linkData !== null ) this.handleLogin();
    if (user) this.props.navigation.navigate('HomeStack')
    this.setState({isCreatingAccount:true})
  
    Meteor.call('createUserAccount', linkData, (err, response) => {
      if (err) {
        console.log("err: "+err.reason);
        Alert.alert(
          'Oops! Invite link didn\'t work','',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Help', onPress: () => Linking.openURL('mailto:contact@bitbybite.co?subject=🚧 Reporting a problem with JBUM 🚧&body=🌀 your problem here 🌀')},
          ],
          { cancelable: false }
        );
        this.setState({hasOpenedURL:false});
        return;
      } else if (response && typeof(response) != 'undefined'){
        this.handleLogin(response);
      }
      else {
        this.setState({hasOpenedURL:false});
      }
    });
  }

  handleLogin = (response) => {
    if (!response) {
      this.setState({hasOpenedURL:false});
      return;
    }

    Meteor.loginWithPassword(response.username, response.password, (err) => {
      if (err) {
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.details
        );
        this.setState({hasOpenedURL:false});
      }
      else {
        this.props.navigation.navigate('AccountSetup', { loginData: response });
        this.setState({hasOpenedURL:false});
      }
    });
    
  }

  toCreateAccount = () => {
    this.props.navigation.navigate('BetaWebview')
    /*Alert.alert(
      'Please navigate our site to create an account!','If you wish to be included email contact@bitbybite.co.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Go There', onPress: () => this.props.navigation.navigate('BetaWebview')},
      ],
      { cancelable: false }
    );*/
  }

  toLogin = () => {
    ReactNativeHaptic.generate('selection')
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

          {!this.state.hasOpenedURL ? 
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
            : 
            <View style={{marginTop:'20%'}}>
              <ActivityIndicator size={'large'}/>
            </View>
          }
        </View>

      </Wallpaper>
    );
  }
}

export default WelcomeContainer = createContainer((props) => {
  return {
    user: Meteor.user()
  }
}, Welcome);

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
