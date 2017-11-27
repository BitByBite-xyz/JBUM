import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Platform,
  Dimensions,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-elements'
import Meteor from 'react-native-meteor';

import { terms } from './terms'
export default class InitialPage extends Component {
    constructor(props) {
      super(props);
  }


  render() {

    return(
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: '15%'}}><Text style={styles.pageTitle}>Terms of Use</Text></View>
        <View style={{marginTop: 40}}/>
        <Text style={styles.text}>{terms}</Text>
        <View style={{marginTop: 40, flexDirection: 'row', marginBottom: 100, justifyContent: 'center'}}>
            <Button
                large
                backgroundColor={'#f44336'}
                iconRight
                icon={{name: 'block'}}
                buttonStyle={{width:120, borderRadius:4}}
                onPress={() => alert('To create an account you must agree to the terms.')}
                title='DENY' />
            <Button
                large
                backgroundColor={'#4CAF50'}
                iconRight
                icon={{name: 'done'}}
                buttonStyle={{width:120, borderRadius:4}}
                onPress={() => this.props.handlePageComplete()}
                title='ACCEPT' />
        </View>
      </ScrollView>
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
    fontSize: 8,
    fontWeight: '600',
  },
  pageTitle: {
    color: '#fff',
    fontSize: Dimensions.get('window').height < 570 ? 30: 34,
    fontWeight: 'bold',
  },
});
