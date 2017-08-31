import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'canLoginToAdminPanel' (username) {
    check(username, String);

    if (Meteor.users.findOne({username: username.trim()})) {
      return Roles.userIsInRole(Meteor.users.findOne({username: username.trim()})._id, ['responder', 'admin'], 'default-group');
    }
    return false;
  }
});
