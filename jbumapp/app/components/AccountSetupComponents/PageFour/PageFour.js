import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


export default class PageFour extends Component {
  render() {
    return(
      <Text>PageFour</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
});
