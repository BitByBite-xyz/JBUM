import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements'
import Meteor from 'react-native-meteor';

export default class InitialPage extends Component {
    constructor(props) {
      super(props);
  }

  render() {
    const { handleAccountSetupComplete, loginData } = this.props;
    return(
      <View>
        <View style={{alignItems: 'center', marginTop: '55%'}}><Text style={styles.pageTitle}>Congratulations!</Text></View>
        <View style={{marginTop: '17%'}}>
            <Text style={styles.text}>You have officially completed the account setup process. Please use and enjoy JBUM safely.
                   {'\n'} {'\n'}Your randomized username: {loginData.username}</Text>
            <View style={{marginTop: '17%'}}>
              <Button
                backgroundColor={'#4AD9B9'}
                onPress={handleAccountSetupComplete}
                icon={{name: 'directions-walk'}}
                textStyle={{fontSize: 22, color: 'white'}}
                title='Get Started' />
            </View>

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
    fontSize: 37,
    fontWeight: 'bold',
  },
});
