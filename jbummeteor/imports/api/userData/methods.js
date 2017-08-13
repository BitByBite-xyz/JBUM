import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'UserData.insert' (key, response) {
    //check(title, String);
    //check(body, String);

    // Make sure the user is logged in before inserting a post
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    var obj = {};
    obj['profile.' + key] = response;

    Meteor.users.update(this.userId, {$set: obj });
  }
});
