import React, { Component } from 'react';
import Meteor, { Accounts,createContainer } from 'react-native-meteor';
import { Text, View, Alert, Linking,Clipboard,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements'
import styles from './styles';
import { colors } from '../../config/styles';
import Modal from 'react-native-modal';
import { Icon, Divider, Badge } from 'react-native-elements'
import { Jiro } from 'react-native-textinput-effects';

import SettingsList from 'react-native-settings-list';

import { NavigationActions } from 'react-navigation';

import {email} from '../../components/Communications';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      isModalVisible:false,
      oldPass: '',
      newPass : '',
      confirmPass: ''
    };
  }

  signOut = () => {
    Alert.alert('You are about to log out!',
    'Make sure that you write down your username if you want to be able to log back in.',
    [
      {text: 'Ok', onPress: () => {
        Meteor.call('notifications.remove.pushToken', err => {
          if (err) { alert(`notifications.rm.pushToken: ${err.reason}`); }
        });
        Meteor.logout(() => {
          this.props.navigation.navigate('WelcomeStack');
        });
      }},
      {text: 'Cancel', onPress: () => (null)},
    ],{ cancelable: false });
  };

  handleAccountPress(){
    const username = Meteor.user().username;
    Alert.alert('Your Anonomized Username: ' + username,
                'Your username is only used for logging in — it will not display anywhere.',
                [
                  {text: 'Ok', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Copy', onPress: () => Clipboard.setString('Just Between You And Me Username: '+username)},
                ],{ cancelable: false });
  }

  handleDeleteAccount = () => {
    const username = Meteor.user().username;
    Alert.alert('Delete Account',
                'Are you sure you want to detete your account. This can not be undone.',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'YES', onPress: () => {
                    this.signOut();
                  }},
                ],{ cancelable: false });
  }

  handleReportProblemPress = () => {
    console.log('f')
    email('contact@bitbybite.co','connor.larkin1@gmail.com','','🚧 Reporting a problem with JBUM 🚧','🌀 your problem here 🌀');
    Linking.openURL('mailto:contact@bitbybite.co?subject=🚧 Reporting a problem with JBUM 🚧&body=🌀 your problem here 🌀')
  }

  handleNotificationPress = () => {
    Linking.canOpenURL('app-settings:').then(supported => {
      if (!supported) {
        console.log('Can\'t handle settings url');
      } else {
        return Linking.openURL('app-settings:');
      }
    }).catch(err => console.error('An error occurred', err));
  }

  handleChangePass = () => {
    const { oldPass, newPass, confirmPass } = this.state;

    let valid = true;

    if (oldPass.length === 0 || newPass.length === 0||confirmPass.length ===0) {
      Alert.alert(
        'Complete all the fields to change your password!'
      );
      valid = false;
    }

    if (newPass !== confirmPass) {
      Alert.alert(
        'Your new passwords don\'t match'
      );
      valid = false;
    }

    if (valid) {
      Accounts.changePassword(oldPass, newPass, (err) => {
        if (err) {
          console.log("change err"+err.reason);
          Alert.alert(
            'Oops!',
            'We were unable to change the password. Error: \n\n'+err.reason
          );
        }
      });
    }
  }

  renderChangePass = () => {
    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={{marginLeft: "8%", marginRight: "8%", marginBottom:2,marginTop:2}}
      >
        <View style={{width: '85%', marginLeft: '7%'}}>
        <Jiro
          labelStyle={{fontSize: 18, color: '#3E5D6C'}}
          label={'Current Password'}
          secureTextEntry={true}
          borderColor={'#C4E8FC'}
          inputStyle={{ color: 'white' }}
          onChangeText={(text) => { this.setState({oldPass: text}) }}
        />
        <Jiro
          labelStyle={{fontSize: 18, color: '#3E5D6C'}}
          label={'New Password'}
          secureTextEntry={true}
          borderColor={'#C4E8FC'}
          inputStyle={{ color: 'white' }}
          onChangeText={(text) => { this.setState({newPass: text}) }}
        />
        <Jiro
          labelStyle={{fontSize: 18, color: '#3E5D6C'}}
          label={'Confirm Password'}
          secureTextEntry={true}
          borderColor={'#C4E8FC'}
          inputStyle={{ color: 'white' }}
          onChangeText={(text) => { this.setState({confirmPass: text}) }}
        />
        </View>
        <View style={{marginTop: 20, marginBottom: 12}}>
          <Button
            buttonStyle={{borderRadius: 8}}
            backgroundColor={'#E4F2F2'}
            onPress={this.handleChangePass}
            textStyle={{fontSize: 22, color: '#36454F', fontWeight: '600'}}
            title='Change Password' />
        </View>
      </KeyboardAvoidingView>
    );
  }

  render() {
    const { switchValue } = this.state;
    return (
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
            <View style={{backgroundColor:'#f7f7f7',flex:1}}>
              <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                <SettingsList.Header headerStyle={{marginTop:0}}/>
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Account Username'
                  arrowIcon={(<Icon
                    name='account-circle'
                    iconStyle={{marginRight:30}}
                    size={28}/>)}
                  onPress={this.handleAccountPress}
                />
                <SettingsList.Header headerStyle={{marginTop:10}}/>
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Notification Settings'
                  onPress={this.handleNotificationPress}
                />
                <SettingsList.Header headerText='SUPPORT' headerStyle={{color:'gray', marginTop:15, marginLeft: 10}}/>
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Tutorial'
                  onPress={() => Alert.alert('Route To Tutorial Video')}
                />
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Report a Problem'
                  onPress={this.handleReportProblemPress}
                />

                <SettingsList.Header headerText='ABOUT' headerStyle={{color:'gray', marginTop:15, marginLeft: 10}}/>
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Terms of Service'
                  onPress={() => Linking.openURL('https://help.instagram.com/155833707900388/?helpref=hc_fnav')}
                />
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Guidelines'
                  onPress={() => Linking.openURL('https://help.instagram.com/155833707900388/?helpref=hc_fnav')}
                />
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='JBUM Website'
                  onPress={() => Linking.openURL('http://www.justbetweenuandme.com')}
                />

                <SettingsList.Header headerStyle={{marginTop:10}}/>
                <SettingsList.Item
                  title='Change Password'
                  titleStyle={{color:'#020C7E', fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  onPress={() => this.setState({isModalVisible:true})}
                />
                <SettingsList.Item
                  title='Delete Account'
                  titleStyle={{color:'#020C7E', fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  onPress={this.handleDeleteAccount}
                />
                <SettingsList.Item
                  title='Log Out'
                  titleStyle={{color:'#020C7E', fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  onPress={this.signOut}
                />

              </SettingsList>

              <Modal style={styles.modal}
                     isVisible={this.state.isModalVisible}
                     animationIn={'slideInDown'}
                     animationOut={'slideOutUp'}
                     backdropOpacity={.4}
              >
                <View style={styles.popupContainer}>
                  <View >
                    <TouchableOpacity onPress={() => this.setState({isModalVisible:false})}>
                    <Icon
                      name='close'
                      color='#4AD9B9'
                      style={{marginLeft: '90%',marginTop: 10}}
                    />
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.popupTitle}>Change Password</Text>
                    </View>
                    {this.renderChangePass()}
                  </View>
                </View>
              </Modal>
            </View>
          </View>
    );
  }
}

const ConnectedSettings = createContainer((params) => {
  return {
    user: Meteor.user(),
  };
}, Settings);

export default ConnectedSettings;
