import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Posts } from '../../api/posts/posts';

//Screen components
import ResponceQuestion from '../components/ResponceQuestion';

const Responder = (props) => {
  const { responderPost, postsReady } = props;
  console.log(postsReady);
  renderResponderPosts = () => {
    if (true) {
      return (responderPost.map((post) => (
        <ResponceQuestion
          postContent={post}
        />
      )))
    }

  }

  return (
  <div>
    {postsReady ?
      this.renderResponderPosts: null}
  </div>
);}

export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  return {
    responderPost: Posts.find({}).fetch(),
    postsReady: handle.ready()
  }
}, Responder);
