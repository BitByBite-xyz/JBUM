import styles from './styles';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
import {Button } from 'react-native-elements';

import { LayoutAnimation } from 'react-native';

class Debug extends Component {
  constructor() {
		super();


		this._onPress = this._onPress.bind(this);
	}


  _onPress() {

    this.props.navigation.navigate('AccountSetup');


  }



 render() {
   return (
     <View style={styles.container}>
       <Button
         title='To AccountSetup Screen'
         large
         borderRadius={20}
         icon={{name: 'assignment',buttonStyle: styles.buttons}}
         backgroundColor={'red'}
         onPress={this._onPress()}
         fontFamily= 'Avenir'
         fontSize={25}
         fontWeight='bold'
         iconRight={true}

       />
     </View>

   );
 }
}

export default Debug;
