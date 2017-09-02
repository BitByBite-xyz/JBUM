// import '../imports/startup/server';
// import '../imports/startup/both';
import { Meteor } from 'meteor/meteor';
import { Posts } from '../imports/api/posts/posts';

Meteor.startup(() => {
  Meteor.publish('posts', function() {
    return Posts.find({});
  })
});
