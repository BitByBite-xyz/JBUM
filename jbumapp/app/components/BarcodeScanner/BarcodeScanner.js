'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import Camera from 'react-native-camera';
import _ from 'lodash';
import Meteor, { Accounts } from 'react-native-meteor';

class BarcodeScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      data:null
    }
    /*
      Setup your onBarCodeRead throttle here
      Choose your throttle time in ms - 500 etc.
    */
    this.onBarCodeRead = _.throttle(this.onBarCodeRead, 500);


  }
  componentDidMount() {


  }

  handleCreateAccount = (code) => {
    Meteor.call('createUserAccount', code, (err, response) => {
      if (err) {
        console.log("err: "+err.details);
        Alert.alert(
          'Oops! Screenshot this and send to support!',
          'Server error: \n\n'+err.details
        );
        return;
      } else {
        console.log(response.username);
        this.state.data = response;
        this.handleLogin();
      }
    });


  }
  handleLogin = () => {
    console.log("jdieo");
    if(this.state.data !== null){
      const { data } = this.state;
      console.log(data);
      Meteor.loginWithPassword(data.username, data.password, (err) => {
        if (err) {
          Alert.alert(
            'Oops! Screenshot this and send to support!',
            'Server error: \n\n'+err.details
          );
        }
        this.props.navigation.navigate('AccountSetup')
      });
    }
  }

  onBarCodeRead = (data) => {
    Alert.alert("Barcode Saw dis: ", data.data);
    console.log("Barcode: " + data);

    this.handleCreateAccount(data.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={() => this.onBarCodeRead()}
          aspect={Camera.constants.Aspect.fill}>
          <Text onPress={() => this.handleCreateAccount('2wGQQTyWQgFgYg62N')} style={styles.capture} >Please Scan Authentication Barcode</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
    color: '#e91e63',
    padding: 10,
    margin: 40
  }
});

export default BarcodeScanner;
