import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts';

Meteor.publish('Posts.pub.list', () => {
    return Posts.find();
  });
