import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import styles from './styles';

export default class MyComponent extends Component {
  render() {
    const { commentBody, createdAt, post } = this.props;
    return (
      <View style={styles.container}>
        <Text>{commentBody}</Text>
      </View>
    );
  }
}
