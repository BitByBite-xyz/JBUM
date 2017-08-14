import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Posts } from './posts';
import { check } from 'meteor/check';
import { Random } from 'meteor/random'


Meteor.methods({
  'Posts.insert' ({title, body, post_visibility}) {
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
      post_comments: [],
      post_likes: [],
      post_visibility:post_visibility
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
    if (!Meteor.userId() || !Posts.findOne(postId)) {
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
  'Posts.unlike' (postId) {
    if (!Meteor.userId() || !Posts.findOne(postId)) {
      throw new Meteor.Error('not-authorized');
    }
    const post = Posts.findOne(postId);

    if(!post.post_likes.includes(Meteor.userId())){
      throw new Meteor.Error('user never liked the post!');
    }

    Posts.update({ _id: postId }, {
      $pop: {
        post_likes: Meteor.userId(),
      },
    });
  },
  'Posts.reply' (postId, body) {
    if (!Meteor.userId() || !Posts.findOne(postId)) {
      throw new Meteor.Error('not-authorized');
    }

    Posts.update({ _id: postId }, {
      $push: {
        post_comments: {
          comment_id: Random.id(),
          user_id: Meteor.userId(),
          comment_body: body,
          created: new Date,
        }
      },
    });
  },
  'Posts.flag' (postId) {
    if (!Meteor.userId() || !Posts.findOne(postId)) {
      throw new Meteor.Error('not-authorized');
    }
    const post = Posts.findOne(postId);

    Posts.update({ _id: postId }, {
      $set: {
        isFlagged: true,
      },
    });
  }
});
