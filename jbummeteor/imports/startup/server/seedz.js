import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Random } from 'meteor/random';
import { Fake } from 'meteor/anti:fake';


import { Posts } from '../../api/posts/posts';
/*
Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {

    console.time('DB_Seed');
    console.log('Seeding Accounts DB...');

    var users = [
      {username:"user",password:'user',roles:[]},
      {username:"responder",password:"responder",roles:['responder']},
      {username:"admin",password:"admin",roles:['responder','admin']},
      {username:"dev",password:"dev",roles:['admin']}
    ];

    //giving roles of ['responder','admin']

    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        username: user.username,
        password: user.password,
        //profile: { name: user.name }
      });

      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles, 'default-group');
      }
    });
  }
  
  if (Posts.find().count() === 0) {
    console.log('Seeding Posts DB...');

    let comments = [];
    for(let i = 0; i < 50; i++) {
        comments.push({
            user_id: Meteor.users.findOne()._id,
            comment_body: Fake.sentence(30),
            comment_id: Random.id()
        })
    }
    for (let i = 0; i < 50; i++) {
      let postLikes = [Meteor.users.findOne()._id, Meteor.users.findOne()._id];
      Posts.insert({
        user_id: Meteor.users.findOne()._id,
        post_title: Fake.sentence(12),
        post_body: Fake.sentence(48),
        post_comments: [comments[i]],
        post_visibility: [Random.choice(['Student','Adult','Professional'])],
        post_categories: [Random.choice(['Drugs','Family','Sexuality'])],
        post_likes: postLikes,
        post_flags: []
      });
    }
  }
});
*/
