import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard
} from 'react-native';
import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements'

import { LayoutAnimation } from 'react-native';

import styles from './styles'
import Comment from './Comment'

const Reply = (props) => {
  const { navigation } = props;
  const { postContent } = navigation.state.params;//hack idk why it need this

  console.log(postContent);
   return (

     <ScrollView
             style={styles.container}
             contentContainerStyle={styles.contentContainerStyle}
     >

     <View style={styles.backdrop}>
         <View style={styles.topPadding}>
         </View>

         <View style={styles.topBox}>
             <View style={styles.questionTitleContainer}>
                 <Text style={styles.questionTitleText}>{postContent.post_title}</Text>
                 <View style={styles.lineDivider} />
             </View>

             <Text style={styles.questionText}>{postContent.post_body}</Text>
         </View>

         <View style={styles.views}>

           <FlatList
             data={postContent.post_comments}
             keyExtractor={(item, index) => item._id}
             renderItem={({item}) =>
                 <Comment
                   postComment={item}
                 />}
            />


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
  </ScrollView>
   );

}

Reply.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
};

export default Reply;
