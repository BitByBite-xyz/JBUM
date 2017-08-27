import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Posts } from './posts';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';

var Filter = require('bad-words'),
filter = new Filter({ placeHolder: '🤲'});
filter.removeWords("gay", "gayboy", "gaygirl","gays","gayz");
filter.removeWords('gay');

Meteor.methods({
  'Posts.insert' ({title, body, post_visibility, post_categories}) {
    check(title, String);
    check(body, String);

    var isFlagged = (filter.clean(body).indexOf('🤲') !== -1 || filter.clean(title).indexOf('🤲') !== -1);
    const post_flags = isFlagged ? ['autogen']:[];

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
      post_categories: post_categories,
      post_visibility:post_visibility,
      post_flags: post_flags
    });
  },
  'Posts.remove' (postId) {
    check(postId, String);

    const post = Posts.findOne(postId);

    console.log("deleted this: " + post.toString());
    /*if (post.user_id !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }*/

    Posts.remove(postId);
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
          createdAt: new Date,
        }
      },
    });
  },
  'Posts.archive' (postId) {
    if (!Meteor.userId() || !Posts.findOne(postId) || Posts.findOne(postId).user_id !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    const isArchived = Posts.findOne(postId).isArchived;
    Posts.update({ _id: postId }, {
      $set: {
        isArchived: !isArchived,
      },
    });
  },
  'Posts.report' (postId) {
    if (!Meteor.userId() || !Posts.findOne(postId)) {
      throw new Meteor.Error('not-authorized');
    }
    const post = Posts.findOne(postId);

    if (_.contains(post.post_flags, Meteor.userId())) {
      Posts.update({ _id: postId }, {
        $pop: {
          post_flags: Meteor.userId(),
        },
      });
    }
    else {
      Posts.update({ _id: postId }, {
        $push: {
          post_flags: Meteor.userId(),
        },
      });
    }
  },
  'Posts.unflag' (postId) {
    /*if (!Meteor.userId() || !Posts.findOne(postId)) {
      throw new Meteor.Error('not-authorized');
    }*/
    const post = Posts.findOne(postId);
    const flaggedStuff = [];

    Posts.update({ _id: postId }, {
      $set: {
        post_flags: flaggedStuff,
      },
    });
  }

});
