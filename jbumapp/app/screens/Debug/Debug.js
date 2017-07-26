import styles from './styles';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
import {Button } from 'react-native-elements';

import { LayoutAnimation } from 'react-native';

const Debug = (props) => {
  const { toAccountSetup, toBarcodeScanner} = props;

   return (
     <View style={styles.container}>

       <Button
         title='To AccountSetup Screen'
         large
         borderRadius={20}
         icon={{name: 'poll',buttonStyle: styles.buttons}}
         backgroundColor={'red'}
         onPress={toAccountSetup}
         fontFamily= 'Avenir'
         fontSize={25}
         fontWeight='bold'
         iconRight={true}
       />
       <Button
         title='To QR Component'
         large
         borderRadius={20}
         icon={{name: 'pages',buttonStyle: styles.buttons}}
         backgroundColor={'blue'}
         onPress={toBarcodeScanner}
         fontFamily= 'Avenir'
         fontSize={25}
         fontWeight='bold'
         iconRight={true}
       />

     </View>

   );

}

Debug.propTypes = {
  toAccountSetup: React.PropTypes.func,
  toAsk: React.PropTypes.func,
  toSettings: React.PropTypes.func,
};

export default Debug;
