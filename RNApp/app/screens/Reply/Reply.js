import {
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements'

import { LayoutAnimation } from 'react-native';

import styles from './styles'

const Reply = (props) => {

		const { } = props;

   return (
     <View style={styles.backdrop}>
         <View style={styles.topPadding}>
         </View>

         <View style={styles.topBox}>
             <View style={styles.questionTitleContainer}>
                 <Text style={styles.questionTitleText}>Sed ut perspiciatis unde</Text>
                 <View style={styles.lineDivider} />
             </View>

             <Text style={styles.questionText}>Sed ut perspiciatis unde omnis iste natus error sit
                                             voluptatem accusantium doloremque laudantium.
                                             Nemo enim ipsam voluptatem quia voluptas sit
                                             aspernatur aut odit aut fugit, sed quia consequuntur
                                             magni dolores eos qui ratione voluptatem sequi
                                             nesciunt. Neque porro quisquam est, qui dolorem
                                             ipsum quia dolor sit amet, consectetur, adipisci
                                             velit, sed quia non numquam eius modi tempora
                                             incidunt ut labore et dolore
                                             </Text>
         </View>
         <View style={styles.bottomBox}>

             <View style={styles.bottom}>


                 <View style={styles.views}>

                     <TextInput
                         style={styles.largeText}
                         placeholder='Response...'
                         returnKeyType='next'
                         placeholderTextColor='#DBD9D9'
                         underlineColorAndroid='transparent'
                         multiline={true}
                         autoCorrect={false}
                     />
                 </View>
                 <View style={styles.button}>
                     <Button
                       title='Reply'
                       icon={{name: 'add-circle-outline'}}
                       backgroundColor={'blue'}

                       borderRadius={20}
                       //onPress={signIn}
                       fontFamily= 'Avenir'
                       fontSize={15}
                       fontWeight='500'
                       iconRight={true}
                     />
                 </View>

             </View>

         </View>

     </View>
   );

}

Reply.propTypes = {
  toAccountSetup: React.PropTypes.func,
  toAsk: React.PropTypes.func,
  toSettings: React.PropTypes.func,
};

export default Reply;
