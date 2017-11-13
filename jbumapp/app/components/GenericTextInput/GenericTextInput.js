import React from 'react';
import { View, TextInput, Image } from 'react-native';
import styles from './styles';

const GenericTextInput = (props) => {
  return (
    <View>
      {props.borderTop ? <View style={styles.divider} /> : null}
      <Image source={props.source} style={styles.image} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor='white'
        underlineColorAndroid='transparent'
        testID={props.testID}
        {...props}
      />
    </View>
  );
};

export default GenericTextInput;
