import React, { Component } from 'react';
import _ from 'lodash';

import { NavigationActions } from 'react-navigation';
import Meteor, {createContainer} from 'react-native-meteor';

import Reply from './Reply'

class ReplyContainer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      body: '',
    };
    
  }

  replyButton(){
    const { navigation, replyButton } = this.props;
    const { postContent } = navigation.state.params;
    const body = this.state;

    console.log(body.body);

    Meteor.call('Posts.reply', postContent._id, body.body, (err) => {
      if (err) {
        console.log("reply err "+err.details);
        return;
      } else {
        console.log("reply added!");

        this.props.navigation.goBack();
      }
    });
  }

  render() {
    return (
      <Reply
        replyButton={this.replyButton.bind(this)}
        navigation={this.props.navigation}
        updateState={this.setState.bind(this)}
        post={this.props.post}
        {...this.state}
      />
    );
  }
};

export default createContainer((params) => {
  const handle = Meteor.subscribe('Posts.pub.list');
  const post_id = _.get(params, 'navigation.state.params.postContent._id', {});

  return {
    post: Meteor.collection('posts').findOne(post_id)
  };
}, ReplyContainer);
