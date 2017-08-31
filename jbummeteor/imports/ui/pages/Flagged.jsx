import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts';
import FlaggedPost from '../components/FlaggedPost';

const Flagged = (props) => {
  const { flaggedPosts, postsReady } = props;
  console.log(postsReady);
  renderFlagPosts = () => {
    if (flaggedPosts.length > 0) {
      return flaggedPosts.map((post) => (
                <FlaggedPost
                  key={post._id}
                  postContent={post}
                />
              ));
    }
    else {
      return <p style={{fontSize: 35, marginLeft: '3%', marginTop: '1%'}}> No flagged posts</p> 
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
    flaggedPosts: Posts.find( { $where: "this.post_flags.length > 0" }).fetch(),
    postsReady: handle.ready()
  }
}, Flagged);
