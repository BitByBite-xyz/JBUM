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

import Settings from './Settings';


class SettingsContainer extends Component {
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
    Meteor.logout(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: 'WelcomeStack' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
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

  handleReportProblemPress(){
    Linking.openURL('mailto:contact@bitbybite.co?subject=🚧 Reporting a problem with JBUM 🚧&body=🌀 your problem here 🌀')
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
        style={{marginLeft:10,marginRight:10,marginBottom:10}}
      >
        <Jiro
          labelStyle={{fontSize: 18, color: 'white'}}
          label={'Current Password'}
          secureTextEntry={true}
          borderColor={'#4AD9B9'}
          inputStyle={{ color: 'white' }}
          onChangeText={(text) => { this.setState({oldPass: text}) }}
        />
        <Jiro
          labelStyle={{fontSize: 18, color: 'white'}}
          label={'New Password'}
          secureTextEntry={true}
          borderColor={'#4AD9B9'}
          inputStyle={{ color: 'white' }}
          onChangeText={(text) => { this.setState({newPass: text}) }}
        />
        <Jiro
          labelStyle={{fontSize: 18, color: 'white'}}
          label={'Confirm Password'}
          secureTextEntry={true}
          borderColor={'#4AD9B9'}
          inputStyle={{ color: 'white' }}
          onChangeText={(text) => { this.setState({confirmPass: text}) }}
        />
        <View style={{marginTop: 20,marginBottom:20}}>
          <Button
            iconRight
            backgroundColor={'#4AD9B9'}
            onPress={this.handleChangePass}
            icon={{name: 'vpn-key'}}
            textStyle={{fontSize: 18, color: 'white'}}
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
                  hasSwitch={true}
                  switchState={switchValue}
                  switchOnValueChange={this.onValueChange}
                  hasNavArrow={false}
                  title='Notifications'
                />
                <SettingsList.Header headerStyle={{marginTop:10}}/>
                <SettingsList.Item
                  titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  title='Account Username'
                  arrowIcon={(<Icon
                    name='account-circle'
                    iconStyle={{marginRight:30}}
                    size={28}/>)}
                  onPress={this.handleAccountPress}
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
                  onPress={() => Alert.alert('Route To Display Page')}
                />
                <SettingsList.Item
                  title='Log Out'
                  titleStyle={{color:'#020C7E', fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                  onPress={() => this.signOut}
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
                    <View style={{alignItems:'center',marginBottom:10}}>
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
}, SettingsContainer);

export default ConnectedSettings;
