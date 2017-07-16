// Import server startup through a single index entry point

import './seedz';
import './register-api';
import './accounts';
//db.dropDatabase()
Meteor.publish('userData', function () {
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, {
      fields: { other: 1, things: 1 }
    });
  } else {
    this.ready();
  }
});
