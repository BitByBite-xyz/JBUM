import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const InputWrapper = (props) => {
  return (
    <View style={styles.inputWrapper}>
      {props.children}
    </View>
  );
};

export default InputWrapper;
