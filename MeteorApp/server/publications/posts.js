import { Meteor } from 'meteor/meteor';
import { Posts } from '/lib/collections';

export default () => {
  Meteor.publish('posts-list', () => {
    return Posts.find();
  });
}
