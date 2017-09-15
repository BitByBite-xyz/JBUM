import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  LayoutAnimation,
  KeyboardAvoidingView
} from 'react-native';
import React, { Component } from 'react';
import { Button, Icon } from 'react-native-elements'
import moment from 'moment';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles'
import Meteor, { createContainer } from 'react-native-meteor';

const Reply = (props) => {
  const { navigation, replyButton, body,updateState,post } = props;
   return (
         <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
            extraScrollHeight={55}
         >
           <View style={styles.backdrop}>
               <View style={styles.topPadding}></View>
               <View style={styles.topBox}>
                   <View style={styles.questionTitleContainer}>
                       <Text style={styles.questionTitleText}>{post.post_title}</Text>
                       <View style={styles.lineDivider} />
                   </View>
                   <Text style={styles.questionText}>{post.post_body}</Text>
                   <Text style={[styles.text, styles.created]}>{moment(post.createdAt).fromNow()}</Text>
               </View>
               <View style={styles.views}>
                  {post.user_id === Meteor.userId() ? post.post_comments.map((comment) => (
                    <Comment
                      key={comment.comment_id}
                      postComment={comment}
                    />
                  )):null}
                </View>
            <View style={styles.bottomWrapper}>
               <View style={styles.bottomBox}>
                   <View style={styles.bottom}>
                       <View style={styles.views}>
                           <AutoGrowingTextInput
                               style={styles.largeText}
                               placeholder='Reply to this question'
                               returnKeyType="done"
                               placeholderTextColor='#DBD9D9'
                               underlineColorAndroid='transparent'
                               onChangeText={(body) => updateState( {body} )}
                               blurOnSubmit={true}
                               multiline={true}
                               minHeight={60}
                               maxHeight={200}
                               autoCorrect={true}
                           />
                       </View>
                    <View style={styles.buttonView}>
                       <View style={styles.lineDivider}/>
                        <TouchableOpacity onPress={replyButton}>
                          <Text style={styles.button}>Submit Reply</Text>
                        </TouchableOpacity>
                       </View>
                   </View>
               </View>
           </View>
        </View>
      </KeyboardAwareScrollView>
  );
}

Reply.propTypes = {
  title: React.PropTypes.string,
  body: React.PropTypes.string,
};

export default Reply;
