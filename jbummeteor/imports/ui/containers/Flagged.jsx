import React from 'react';
import GenderSurveyChart from '../components/GenderSurveyChart';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import FlaggedPost from '../components/FlaggedPost';

const Flagged = (props) => {
  const { flaggedPosts } = props;
  console.log(flaggedPosts);

  return (
  <div>
    <FlaggedPost
      postTitle={'flaggedPosts[0].post_title.toString()'}
      postQuestion={'flaggedPosts[0].post_body.toString()'}
    />
  </div>
);}


export default createContainer(() => {
  Meteor.subscribe('Posts.pub.list');
  return {
    flaggedPosts: Posts.find({}).fetch(),
  }
}, Flagged);
