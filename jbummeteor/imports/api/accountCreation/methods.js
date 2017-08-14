import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { Random } from 'meteor/random'

Meteor.methods({
  'createUserAccount' (code) {
    check(code, String);

    if (code !== '2wGQQTyWQgFgYg62N') {
      console.log('not-authorized to create account');
      throw new Meteor.Error('not-authorized');
    }

    let username = Random.id();
    let password = Random.id();


    const id = Accounts.createUser({
                                      username: username,
                                      password: password,
                                    });

    return {username:username,password:password}
  }
});
