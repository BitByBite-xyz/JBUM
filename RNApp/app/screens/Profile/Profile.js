import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Proflie = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        Profile
      </Text>
      <Button
        text="Details"
        onPress={props.onDetailsPress}
      />
    </View>
  );
};

Proflie.propTypes = {
  onDetailsPress: React.PropTypes.func,
};

export default Proflie;
