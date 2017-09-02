import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

Posts.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Posts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

CommentsSchema = new SimpleSchema({
  comment_id: {
    type: String,
    label: "Comment ID"
  },
  user_id: {
    type: String,
    label: "Commenter's meteor.User ID"
  },
  comment_body:{
    type: String,
    label: "body of this comment"
  },
  createdAt: {
    type: Date,
    label: "Date Comment Added to System",
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date;
      }
    }
  },
});

const PostSchema = new SimpleSchema({
  post_title:{
    type: String,
    label: "Title of this post"
  },
  post_body:{
    type: String,
    label: "body of this post"
  },
  post_comments: {
  type: [CommentsSchema],
  label: "Post's comments",
  optional:false
},
post_flags: {
  type: [String],
  label: "Users that flagged this post"
},
post_likes: {
    type: [String],
    label: "Post's likes",
    optional: false
},
isArchived: {
  type: Boolean,
  label: "Indicates if post is archived",
  autoValue: function() {
    if ( this.isInsert ) {
      return false;
    }
  }

},
createdAt: {
  type: Date,
  label: "Date Comment Added to System",
  autoValue: function() {
    if ( this.isInsert ) {
      return new Date;
    }
  }
}
});

Posts.attachSchema(PostSchema);
