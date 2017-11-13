import React, { Component } from 'react';
import { View, ActivityIndicator, Linking, Alert} from 'react-native';
import Spinner from 'react-native-spinkit';
import Meteor, { Accounts } from 'react-native-meteor';

import styles from './styles';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOpenedURL:false,
      loggingIn: false,
      loginData:null
    }
  }

  render() {
    const types = ['Bounce', 'Pulse', 'ThreeBounce']
    const colors = ['#00B796', '#00D2F1', '#86269B', '#CC0063', '#FE9601']
    return (
      <View style={styles.container}>
      <Spinner
        style={styles.spinner}
        size={70}
        type={types[Math.floor(Math.random()*types.length)]}
        color={colors[Math.floor(Math.random()*colors.length)]}
      />
    </View>
    );
  }
}

export default Loading;
