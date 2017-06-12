import { Meteor } from 'meteor/meteor';
import { Posts } from '/lib/collections';

export default () => {
  Meteor.publish('postlist', () => {
    return Posts.find();
  });
}
