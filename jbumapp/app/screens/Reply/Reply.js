import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  LayoutAnimation,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import { Button, Icon } from 'react-native-elements'
import _ from 'lodash';
import moment from 'moment';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationActions } from 'react-navigation';
import Meteor, {createContainer} from 'react-native-meteor';

import {Comment} from '../../components/Comment'
import styles from './styles'

class Reply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      isOwnPost: Meteor.userId() === this.props.post.user_id
    };
  }
  componentDidMount(){
    console.log(this.scroll);

    setTimeout(() => {
      this.scroll.scrollToEnd();
    }, 500);

  }

  replyButton = () => {
    const post_id = _.get(this.props, 'navigation.state.params.postContent._id', {});
    const {body} = this.state;

    if (body.length > 0) {
      if (!body.replace(/\s/g, '').length) {
        Alert.alert(
          'Oops',
          'Please reply to the question before tapping submit'
        );
      }
      else {
        Meteor.call('Posts.reply', post_id, body, (err) => {
          if (err) {
            console.log("reply err "+err.details);
            Alert.alert(
              'Oops! Screenshot this and send to support!',
              'Server error: \n\n'+err.details
            );
            return;
          } else {
            console.log("reply added!");

            this.props.navigation.goBack();
          }
        });
      }
    }
    else {
      Alert.alert(
        'Oops',
        'Please reply to the question before tapping submit'
      );
    }
  }

  render() {
    const { isOwnPost } = this.state;    
    const { body,post } = this.props;

    return (
        <KeyboardAwareScrollView
           style={styles.container}
           contentContainerStyle={styles.contentContainerStyle}
           extraScrollHeight={55}
           ref={(c) => this.scroll = c}
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
                 )):
                 <Comment
                      key={''}
                      postComment={{comment_body:'Nothing to display'}}
                    />}
               </View>
               {isOwnPost? null:
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
                              onChangeText={(body) => this.setState({body:body})}
                              blurOnSubmit={true}
                              multiline={true}
                              minHeight={60}
                              maxHeight={200}
                              autoCorrect={true}
                          />
                      </View>
                   <View style={styles.buttonView}>
                      <View style={styles.lineDivider}/>
                       <TouchableOpacity onPress={this.replyButton}>
                         <Text style={styles.button}>Submit Reply</Text>
                       </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>
          }
       </View>
     </KeyboardAwareScrollView>
    );
  }
};

export default createContainer((params) => {
  const handle = Meteor.subscribe('Posts.pub.list');
  const post_id = _.get(params, 'navigation.state.params.postContent._id', {});

  return {
    post: Meteor.collection('posts').findOne(post_id)
  };
}, Reply);
