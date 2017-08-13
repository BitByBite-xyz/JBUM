import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


CommentsSchema = new SimpleSchema({
  "comment_id": {
    type: String,
    label: "Comment ID"
  },
  "user_id": {
    type: String,
    label: "Commenter's meteor.User ID"
  },
  comment_body:{
    type: String,
    label: "body of this comment"
  },
  "created": {
    type: Date,
    label: "Date Comment Added to System",
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date;
      }
    }
  },
});

PostsSchema = new SimpleSchema({
  "user_id": {
    type: String,
    label: "Poster's meteor.User ID",
  },
  "post_visibility": {
    type: [String],
    minCount: 1,
    maxCount: 4,
    optional:false,
    label: "Post's intended reciever"
  },
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
 isFlagged: {
     type: Boolean,
     label: "indicates if post is flagged",
     autoValue: function() {
       if ( this.isInsert ) {
         return false;
       }
     }
 },
 post_likes: {
     type: [String],
     label: "Post's likes",
     optional: false
 },
 "created": {
   type: Date,
   label: "Date Comment Added to System",
   autoValue: function() {
     if ( this.isInsert ) {
       return new Date;
     }
   }
 }
});

export const Posts = new Mongo.Collection('posts');

Posts.attachSchema( PostsSchema );
