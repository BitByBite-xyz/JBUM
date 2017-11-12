import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    Alert
} from 'react-native';
import { Meteor } from 'react-native-meteor';

export default class BetaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasOpenedURL:false,
          loggingIn: false,
          loginData:null
        }
        this.mounted = false;
    }
    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
        this.mounted = true;
    }

    componentDidMount() {
    }

    componentWillUnmount(){
        Linking.removeEventListener('url', this.handleOpenURL);    
    }

    handleOpenURL = (url) => { 
        alert(url)
        if (this.state.hasOpenedURL) return;
        const { navigation } = this.props;

        const linkData = url.replace(/.*?:\/\//g, '');
        alert(url.replace(/.*?:\/\//g, ''))
        this.setState({hasOpenedURL:true});
        this.handleCreateAccount(linkData);
    }

    handleCreateAccount = (linkData) => {
        if (linkData !== null) {
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
    }

    render() {
        return (
            <View style={{top:100}}>
                <Text onPress={()=> {
                    Linking
                    .getInitialURL()
                    .then(url => {if (url) {this.handleOpenURL(url);}} )
                    .catch(console.error);
                }}> Please open the link we sent you </Text>
            </View>
        );
    }
}