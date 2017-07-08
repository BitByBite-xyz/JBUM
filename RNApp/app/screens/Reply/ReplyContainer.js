import React, { Component } from 'react';
import Reply from './Reply';

import { NavigationActions } from 'react-navigation';
import Meteor from 'react-native-meteor';



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
        this.setState(this.state);
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
        {...this.state}
      />
    );
  }
};

export default ReplyContainer;
