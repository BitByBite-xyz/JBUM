import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Picker from 'react-native-picker';
import { Button } from 'react-native-elements'

export default class InitialPage extends Component {
  constructor(props) {
    super(props);
    const { handlePageComplete } = props;

    handlePageComplete();
  }

  render() {
    const { loginData, handleAbandonSetup } = this.props;

    return(
      <View>
        <Button
          backgroundColor={'#4AD9B9'}
          onPress={handleAbandonSetup}
          icon={{name: 'directions-walk'}}
          textStyle={{fontSize: 10, color: 'white'}}
          buttonStyle={{height:20,width:100}}
          title='Abandon Setup' />
        <View style={{alignItems: 'center', marginTop: '45%'}}><Text style={styles.pageTitle}>Account Setup</Text></View>
        <View style={{marginTop: '17%'}}>
            <Text style={styles.text}>All of the following information you enter will be completely anonymous. Please do you best to fill out the account setup questions.</Text>
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
    fontSize: 45,
    fontWeight: 'bold',
  },
});
