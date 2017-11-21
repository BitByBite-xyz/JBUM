import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Random } from 'meteor/random'
import { Fake } from 'meteor/anti:fake';
import { BetaEmails } from './betaEmails';

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
  },
  'canCreateAccount' (email) {
    check(email, String);
    const user = BetaEmails.findOne({email_address: email});
    
    if (!user) throw new Meteor.Error('Email address not recognized');
    if (user.accounts_left <= 0) throw new Meteor.Error('Too many accounts associated with this email');
    

    BetaEmails.update({ _id: user._id }, {
      $set: {
        accounts_left: --user.accounts_left
      },
    });
  },
  'addBetaEmail' (email) {
    check(email, String);
    const user = BetaEmails.findOne({email_address: email});
    
    if (user) throw new Meteor.Error('Email already added!');
    

    BetaEmails.insert({
      email_address: email
    });
  }
});
