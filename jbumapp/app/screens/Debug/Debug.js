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
  const { toInbox, toBarcodeScanner} = props;

   return (
     <View style={styles.container}>

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
       <Button
         title='Notification'
         large
         borderRadius={20}
         icon={{name: 'pages',buttonStyle: styles.buttons}}
         backgroundColor={'turquoise'}
         onPress={toInbox}
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
