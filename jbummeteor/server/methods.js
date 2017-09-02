import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts/posts';

Meteor.methods({
  insertPost(post) {
    Posts.insert(post);
  },

  updatePost(post) {
    Posts.update(post._id,
    { $set: post});
  },

  deletePost(postId) {
    Posts.remove(postId);
  }
});
