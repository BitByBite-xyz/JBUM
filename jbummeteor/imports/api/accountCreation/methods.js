import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Random } from 'meteor/random'
import { Fake } from 'meteor/anti:fake';

Meteor.methods({
  'createUserAccount' (code) {
    check(code, String);

    if (code !== '2wGQQTyWQgFgYg62N') {
      console.log('not-authorized to create account');
      throw new Meteor.Error('not-authorized');
    }
    
    let username = Fake.word() +' '+ Fake.word();
    let password = Fake.word() +' '+ Fake.word();

    const id = Accounts.createUser({ username: username, password: password });

    var obj = {};

    obj['profile.temporaryPass'] = password;
    obj['profile.isAccountSetupComplete'] = false;

    Meteor.users.update(id, {$set: obj });

    return {username: username, password:password}
  }
});
