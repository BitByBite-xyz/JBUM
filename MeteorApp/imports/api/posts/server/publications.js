import { Meteor } from 'meteor/meteor';
import { Posts } from '../posts';
import { publishComposite } from 'meteor/reywood:publish-composite';


Meteor.publish('Posts.pub.list', () => {
    return Posts.find();
  });
