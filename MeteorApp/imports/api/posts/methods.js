import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Posts } from './posts';
import { check } from 'meteor/check';


Meteor.methods({
  'Posts.insert' (title, body) {
    check(title, String);
    check(body, String);

    // Make sure the user is logged in before inserting a post
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Posts.insert({
      user_id: Meteor.userId(),
      post_title: title,
      post_body: body,
    });
  },
  'Posts.remove' (postId) {
    check(postId, String);

    const post = Post.findOne(postId);
    if (task.user_id !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Post.remove(postId);
  },
});
