import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class InitialPage extends Component {
    constructor(props) {
      super(props);
  }

  render() {
    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '45%'}}><Text style={styles.pageTitle}>Congradulation!</Text></View>
        <View style={{marginTop: '17%'}}>
            <Text style={styles.text}>You have officially completed the account setup process, please use and ejoy JBUM safely.</Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  pageTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
