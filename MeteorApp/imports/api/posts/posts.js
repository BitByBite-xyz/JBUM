import { Mongo } from 'meteor/mongo';


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
    label: "Poster's meteor.User ID"
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
    optional:true //a post does not require post_items
 },
 post_likes: {
     type: [String],
     label: "Posts's likes",
     optional: true
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

export const PostComments = new Mongo.Collection("posts_comments");
export const Posts = new Mongo.Collection('posts');

Posts.attachSchema( PostsSchema );
PostComments.attachSchema( CommentsSchema );
