import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';


const genOptions = ['1st Generation', '2nd Generation', '3rd Generation', '4th Generation', '5th Generation'];
const ethOptions = ['Caucasian', 'Black or African American', 'Hispanic and or Latino', 'Asian', 'Pacific Islander', 'American Indian']

export default class PageTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'Enter your city of birth',
      selectedGeneration: '',
      selectedEthnicity: '',
    };
  }
  render() {
    return(
      <View>
        <View level={-10}><Text style={styles.text}>Page 2</Text></View>
          <View level={5}><Text style={styles.text}>Page 2</Text></View>
          <View level={20}><Text style={styles.text}>Page 2</Text></View>

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
    fontSize: 30,
    fontWeight: 'bold',
  },
});
