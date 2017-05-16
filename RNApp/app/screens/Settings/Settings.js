import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Settings
      </Text>
      <Button
        text="Details"
        onPress={props.onDetailsPress}
      />
    </View>
  );
};

Settings.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Settings;
