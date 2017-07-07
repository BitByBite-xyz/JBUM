import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements'

import { LayoutAnimation } from 'react-native';

import styles from './styles'

const Reply = (props) => {
  const { navigation } = props;
  const { title, body } = navigation.state.params;//hack idk why it need this

   return (

     <View style={styles.backdrop}>
         <View style={styles.topPadding}>
         </View>

         <View style={styles.topBox}>
             <View style={styles.questionTitleContainer}>
                 <Text style={styles.questionTitleText}>{title}</Text>
                 <View style={styles.lineDivider} />
             </View>

             <Text style={styles.questionText}>{body}</Text>
         </View>
      <View style={styles.bottomWrapper}>
         <View style={styles.bottomBox}>

             <View style={styles.bottom}>


                 <View style={styles.views}>

                     <TextInput
                         style={styles.largeText}
                         placeholder='Response...'
                         returnKeyType="done"
                         placeholderTextColor='#DBD9D9'
                         underlineColorAndroid='transparent'
                         multiline={true}
                         autoCorrect={false}
                     />
                 </View>
                 <View style={styles.button}>
                 <View style={styles.lineDivider}/>
                 <TouchableOpacity>
                     <Text style={styles.button}>Reply</Text>
                </TouchableOpacity>
                 </View>

             </View>

         </View>

     </View>
  </View>
   );

}

Reply.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
};

export default Reply;
