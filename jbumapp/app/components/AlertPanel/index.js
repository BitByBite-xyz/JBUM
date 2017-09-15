import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { Icon, Divider, Badge } from 'react-native-elements'

import styles from './styles';

export default class AlertPanel extends Component {

  render() {
    const { contentText } = this.props;
    return (
      <TouchableOpacity onPress={this.handleOnTouch} style={styles.container}>
      <View style={styles.questionPanelContainer}>
        <View style={styles.bottom}>
          <Text style={styles.title}>{contentText}</Text>

        </View>
        <View style={styles.bottom}>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}
