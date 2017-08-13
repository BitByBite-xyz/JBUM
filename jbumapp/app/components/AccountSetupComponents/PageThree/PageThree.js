import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


const parOptions = ['Biological Mother and Father', 'Biological Mother', 'Biological Father', 'Biological Mother and Stepfather or another Male',
'Biological Father and Stepmother or another woman', 'Aunt or Uncle', 'Grandparents', 'Guardian mother and father', 'Guardian Mother', 'Guardian Father',
'Older Sibling', 'Other'];
const sibOptions = ['0', '1', '2', '3', '4', '5', '6', 'More than 6'];
const sibOrderOptions = ['Oldest', 'Middle Child', 'Youngest'];

export default class PageThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slectedParentals: '',
      selectedSiblings: '',
      selectedSiblingOrder: '',
    };
  }
  render() {
    return(
      <View>
        <View level={8}><Text style={styles.text}>Page 3</Text></View>
          <View level={0}><Text style={styles.text}>Page 3</Text></View>
          <View level={-10}><Text style={styles.text}>Page 3</Text></View>



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
