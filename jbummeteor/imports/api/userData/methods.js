import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import agent from '../../startup/server/apn-setup'


const SET_PUSH_TOKEN = 'notifications.set.pushToken';
const SEND_APN_MSG = 'notifications.send.APNMsg';

Meteor.methods({
  'UserData.insert' (data) {
    // Make sure the user is logged in before inserting userdata
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    if (data.length === 0) {
      throw new Meteor.Error('no data error :)');
    }

    var obj = {};

    _.each(data, function (item) {
      obj['profile.AccountSetupData.' + item.field] = item.response;
    });
    obj['profile.isAccountSetupComplete'] = true;

    Meteor.users.update(this.userId, {$set: obj });
  },
  'notifications.set.pushToken'({token, os}) {
    check(arguments[0], {
      token: String,
      os: String,
    });

    const userId = this.userId;
    if (!userId) {
      throw new Meteor.Error(SET_PUSH_TOKEN, 'Must be logged in to set push notification token.');
    }

    Meteor.users.update(userId, {
      $addToSet: { pushToDevices: { token, os } },
    });
  },
  'notifications.remove.pushToken'() {

    const userId = this.userId;
    if (!userId) {
      throw new Meteor.Error(SET_PUSH_TOKEN, 'Must be logged in remove push notification token.');
    }

    Meteor.users.update(userId, {
        $set: { pushToDevices: [] },
    });
  },
  'notifications.send.APNMsg'({sendToUserId, alert, postId}) {
    const user = Meteor.users.findOne(sendToUserId);
    if (user) {
      user.pushToDevices.forEach(device => {
        const token = device.token;

        agent.createMessage()
          .set({
            postId: postId,
          })
          .device(token)
          .alert(alert)
          .send(function (err) {
            if (err) { throw new Meteor.Error(SEND_APN_MSG, err.message); }
            else { console.log('APN msg sent successfully!'); }
          });
      });
    }
  },
});
