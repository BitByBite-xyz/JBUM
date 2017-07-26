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

class BarcodeScanner extends Component {
  constructor(props) {
    super(props);
    /*
      Setup your onBarCodeRead throttle here
      Choose your throttle time in ms - 500 etc.
    */
    this.onBarCodeRead = _.throttle(this.onBarCodeRead, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} >Please Scan Authentication Barcode</Text>
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

  onBarCodeRead(data) {
    Alert.alert("Barcode Saw dis: ", data.data);
    console.log("Barcode: " + data);
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
