import { Meteor } from 'meteor/meteor';
import { publishComposite } from 'meteor/reywood:publish-composite';

Meteor.publish('userList', function (){
  return Meteor.users.find({});
});
