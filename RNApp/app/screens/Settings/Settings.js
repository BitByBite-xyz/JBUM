import React from 'react';
import { Text, View, Alert, Linking } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

import SettingsList from 'react-native-settings-list';
//https://github.com/evetstech/react-native-settings-list?files=1#usage

const Settings = (props) => {
  const { switchValue, signOut, navigation } = props;

  return (
    <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
            <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
          </View>
          <View style={{backgroundColor:'#EFEFF4',flex:1}}>
            <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
              <SettingsList.Header headerStyle={{marginTop:0}}/>
              <SettingsList.Item
                hasSwitch={true}
                switchState={switchValue}
                switchOnValueChange={this.onValueChange}
                hasNavArrow={false}
                title='Notifications'
              />
              <SettingsList.Header headerStyle={{marginTop:10}}/>
              <SettingsList.Item
                title='Account Pin'
                titleInfo='3245'
                hasNavArrow={false}
                onPress={() => Alert.alert('Route To Notifications Page')}
              />

              <SettingsList.Header headerText='SUPPORT' headerStyle={{color:'gray', marginTop:15}}/>
              <SettingsList.Item
                title='Help Center'
                onPress={() => Linking.openURL('http://www.justbetweenuandme.com')}
              />
              <SettingsList.Item
                title='Report a Problem'
                onPress={() => Linking.openURL("http://www.justbetweenuandme.com")}
              />

              <SettingsList.Header headerText='ABOUT' headerStyle={{color:'gray', marginTop:15}}/>
              <SettingsList.Item
                title='Privacy Policy'
                onPress={() => Linking.openURL('https://help.instagram.com/155833707900388/?helpref=hc_fnav')}
              />
              <SettingsList.Item
                title='Terms'
                onPress={() => Linking.openURL('https://help.instagram.com/478745558852511')}
              />
              <SettingsList.Item
                title='Website'
                onPress={() => Linking.openURL('http://www.justbetweenuandme.com')}
              />

              <SettingsList.Header headerStyle={{marginTop:10}}/>
              <SettingsList.Item
                title='Change Password'
                titleStyle={{color:'#020C7E', fontSize: 16}}
                onPress={() => Alert.alert('Route To General Page')}
              />
              <SettingsList.Item
                title='Delete Account'
                titleStyle={{color:'#020C7E', fontSize: 16}}
                onPress={() => Alert.alert('Route To Display Page')}
              />
              <SettingsList.Item
                title='Log Out'
                titleStyle={{color:'#020C7E', fontSize: 16}}
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
