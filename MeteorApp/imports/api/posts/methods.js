import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Posts } from './posts';
import { check } from 'meteor/check';


Meteor.methods({
  'Posts.insert' (title, body) {
    //check(title, String);
    //check(body, String);

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

    const post = Posts.findOne(postId);
    if (post.user_id !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Post.remove(postId);
  },
  'Posts.like' (postId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    const post = Posts.findOne(postId);

    if(post.post_likes.includes(Meteor.userId())){
      throw new Meteor.Error('user already liked post!');
    }

    Posts.update({ _id: postId }, {
      $push: {
        post_likes: Meteor.userId(),
      },
    });

  //  return post.post_likes.length;
  },
});
