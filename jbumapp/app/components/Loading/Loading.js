import React, { Component } from 'react';
import { View, ActivityIndicator, Linking, Alert} from 'react-native';
import Spinner from 'react-native-spinkit';
import Meteor, { Accounts } from 'react-native-meteor';

import styles from './styles';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOpenedURL:false,
      loggingIn: false,
      loginData:null
    }
  }
  componentWillMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }
  componentDidUnmount(){
    Linking.removeEventListener('url', this.handleOpenURL);    
  }

  handleOpenURL = (event) => { 
    if (this.state.hasOpenedURL) return;
    const { navigation } = this.props;
    const url = event.url;

    const linkData = url.replace(/.*?:\/\//g, '');
    alert(url.replace(/.*?:\/\//g, ''))
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

  render() {
    const types = ['Bounce', 'Pulse', 'ThreeBounce']
    const colors = ['#00B796', '#00D2F1', '#86269B', '#CC0063', '#FE9601']
    return (
      <View style={styles.container}>
      <Spinner
        style={styles.spinner}
        size={70}
        type={types[Math.floor(Math.random()*types.length)]}
        color={colors[Math.floor(Math.random()*colors.length)]}
      />
    </View>
    );
  }
}

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

export default Loading;
