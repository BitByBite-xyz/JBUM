import React from 'react';
import { Text, View, Alert, Linking } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

import SettingsList from 'react-native-settings-list';
//https://github.com/evetstech/react-native-settings-list?files=1#usage

const Settings = (props) => {
  const { switchValue, signOut, navigation, user } = props;
  let username = user? user.username : '';


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
                titleInfo={username}
                hasNavArrow={false}
                onPress={() => Alert.alert('Route To Notifications Page')}
              />

              <SettingsList.Header headerText='SUPPORT' headerStyle={{color:'gray', marginTop:15, marginLeft: 10}}/>
              <SettingsList.Item
                titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                title='Help Center'
                onPress={() => Linking.openURL('http://www.justbetweenuandme.com')}
              />
              <SettingsList.Item
                titleStyle={{fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                title='Report a Problem'
                onPress={() => Linking.openURL("http://www.justbetweenuandme.com")}
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
                onPress={() => Alert.alert('Route To General Page')}
              />
              <SettingsList.Item
                title='Delete Account'
                titleStyle={{color:'#020C7E', fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                onPress={() => Alert.alert('Route To Display Page')}
              />
              <SettingsList.Item
                title='Log Out'
                titleStyle={{color:'#020C7E', fontFamily: 'Avenir', fontSize: 17, fontWeight: '400'}}
                onPress={() => signOut()}
              />

            </SettingsList>

          </View>
        </View>
  );
};

Settings.propTypes = {
  onDetailsPress: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
  signOut: React.PropTypes.func
};

export default Settings;
