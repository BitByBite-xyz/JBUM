import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import MainContainer from './MainContainer.jsx';

// database - collection
import { Posts } from '../../api/posts/posts';

import Post from './Post';

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.updateCurrentPost = this.updateCurrentPost.bind(this);

  }

  renderPosts() {
    return this.props.posts.map((post) => (
      <Post key={post._id} post={post} updateCurrentPost={this.updateCurrentPost}/>

    ));
  }

  updateCurrentPost(post) {
    this.setState({
      currentPost: post,
    });
  }


  render() {
    return (

        <div>
        <MainContainer />
        </div>

    )
  }
}

AppContainer.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('posts');
  const user = Meteor.userId();

  return {
    posts: Posts.find({ owner: user }, {sort: { title: 1}}).fetch(),
  };
}, AppContainer);
