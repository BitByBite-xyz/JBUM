import React from 'react';
import GenderSurveyChart from '../components/GenderSurveyChart';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import FlaggedPost from '../components/FlaggedPost';

const Flagged = (props) => {
  const { flaggedPosts, postsReady } = props;
  console.log(postsReady);
  renderFlagPosts = () => {
    if (true) {
      return flaggedPosts.map((post) => (
                <FlaggedPost
                  postTitle={post.post_title.toString()}
                  postQuestion={post.post_body.toString()}
                />
              ));
    }

  }

  return (
  <div>
    {postsReady ?
      this.renderFlagPosts(): null}
  </div>
);}


export default createContainer(() => {
  const handle = Meteor.subscribe('Posts.pub.list');
  return {
    flaggedPosts: Posts.find({isFlagged: true}).fetch(),
    postsReady: handle.ready()
  }
}, Flagged);
