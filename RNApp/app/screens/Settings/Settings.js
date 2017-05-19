import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

import SettingsList from 'react-native-settings-list';


const Settings = (props) => {
  const { switchValue } = props;

  return (
    <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
            <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
          </View>
          <View style={{backgroundColor:'#EFEFF4',flex:1}}>
            <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
              <SettingsList.Header headerStyle={{marginTop:15}}/>
              <SettingsList.Item
                hasSwitch={true}
                switchState={switchValue}
                switchOnValueChange={this.onValueChange}
                hasNavArrow={false}
                title='Airplane Mode'
              />
              <SettingsList.Item
                title='Wi-Fi'
                titleInfo='Bill Wi The Science Fi'
                titleInfoStyle={styles.titleInfoStyle}
                onPress={() => Alert.alert('Route to Wifi Page')}
              />
              <SettingsList.Item
                title='Blutooth'
                titleInfo='Off'
                titleInfoStyle={styles.titleInfoStyle}
                onPress={() => Alert.alert('Route to Blutooth Page')}
              />
              <SettingsList.Item
                title='Cellular'
                onPress={() => Alert.alert('Route To Cellular Page')}
              />
              <SettingsList.Item
                title='Personal Hotspot'
                titleInfo='Off'
                titleInfoStyle={styles.titleInfoStyle}
                onPress={() => Alert.alert('Route To Hotspot Page')}
              />
              <SettingsList.Header headerStyle={{marginTop:15}}/>
              <SettingsList.Item
                title='Notifications'
                onPress={() => Alert.alert('Route To Notifications Page')}
              />
              <SettingsList.Item
                title='Control Center'
                onPress={() => Alert.alert('Route To Control Center Page')}
              />
              <SettingsList.Item
                title='Do Not Disturb'
                onPress={() => Alert.alert('Route To Do Not Disturb Page')}
              />
              <SettingsList.Header headerStyle={{marginTop:15}}/>
              <SettingsList.Item
                title='General'
                onPress={() => Alert.alert('Route To General Page')}
              />
              <SettingsList.Item
                title='Display & Brightness'
                onPress={() => Alert.alert('Route To Display Page')}
              />
            </SettingsList>
          </View>
        </View>
  );
};

Settings.propTypes = {
  onDetailsPress: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
};

export default Settings;
