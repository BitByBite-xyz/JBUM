import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Random } from 'meteor/random';
import { Fake } from 'meteor/anti:fake';


import { Posts } from '../../api/posts/posts';
import { BetaEmails } from '../../api/accountCreation/betaEmails';

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {

    console.time('DB_Seed');
    console.log('Seeding Accounts DB...');

    var users = [
      {username:"user",password:'user',roles:[]},
      {username:"responder",password:"responder",roles:['responder']},
      {username:"admin",password:"admin123",roles:['responder','admin']},
      {username:"dev",password:"dev123",roles:['admin']}
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
  
  /*if (Posts.find().count() === 0) {
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
  }*/

  /////////beta EMAIL!!!!
  let emails = '  candice_nono@yahoo.com  asrico.com@gmail.com  jmitchell@lmsnet.com  drenovitch@gmail.com  richalvarez@gmail.com  maxfitness1@aol.com  xsport48@hotmail.com  jpaszkiewicz@yahoo.com  teenalorie@yahoo.com  lvmilam@me.com    macmandell@gmail.com    mckernan.nellie@gmail.com  dudemonshaw@icloud.com    tylerfabish@gmail.com  baxtertori999@yahoo.com  markhamlibby@yahoo.com  sydneyheekin88@gmail.com  milena.srivastava17@gmail.com  20180177@student.nths.net  18julian99@gmail.com  briankerwin4@gmail.com  andrew.ali100@gmail.com  dcotter006@gmail.com  drewgorski1@gmail.com  sirottdaniela@gmail.com  lukewisner01@gmail.com  dfrothman@gmail.com  emilyabt@me.com  ChandlerScheurkogel@gmail.com  saragilchrist13@gmail.com  hutchgourley@yahoo.com  alexchvala@gmail.com  jaredglaaser@gmail.com  crife255@gmail.com  mgurtisen@gmail.com  bellezel014@gmail.com  amfitzy9@gmail.com  20180100@student.nths.net  klorenz417@gmail.com  benjahhmink@gmail.com  alex.brnardo@gmail.com  griffinnorton@gmail.com  josephmmusolino@gmail.com  solsister222@gmail.com  awbrilliant@gmail.com  jcrobinson1934@gmail.com  noahda2@icloud.com  zach@blickstein.com  jacobdenberg@gmail.com  tangenjack@icloud.com  20180019@student.nths.net  chrisgshelton1@gmail.com  carsonelainekoy@gmail.com  jackmosele@gmail.com  maxtbickers@gmail.com  drew2235@gmail.com  catherinemorris668@gmail.com  jackrainbo@gmail.com  guillena17@hotmail.com  isabel.tragos@gmail.com  evanseangross@gmail.com  eloisetrout@gmail.com  ashton.womsley12@gmail.com  abbott.alena@gmail.com  rachaelchiao@gmail.com  Carolyne.newman@yale.edu  myles.k1030@gmail.com  leo.garcia.5251@gmail.com  dlpebbles01@gmail.com  dmmorhun@gmail.com  rluke01@gmail.com  minhxlam@gmail.com  m.w.grant19@gmail.com  mb1329163@gmail.com  jessicamachelski@gmail.com  benjicruz.yankees@gmail.com  brendanlarkin8@gmail.com  lawlerfaith@gmail.com  swimmer.aq@me.com    addyhillerbrand@gmail.com  alook2731@gmail.com  grace.guarraia@gmail.com  kate44mac@gmail.com  20180005@student.nths.net  jordanwinkler78@yahoo.com  scottgrodecki@gmail.com  Macphersonaidan1@gmail.com  angelavisconti@gmail.com  20180029@student.nths.net  haleyhoover514@gmail.com  vivianwu3@Gmail.com  jessiecreed@gmail.com  thakkararjun181@gmail.com  20180007@student.nths.net  tianyuanwu1@gmail.com  20180557@student.nths.net  me@beccamiller.com  msnell987@gmail.com  kiannematollahi@gmail.com  jackraymckenzie@yahoo.com  dillanprasad@yahoo.com  20191193@student.nths.net  20181413@student.nths.net  henrycookinroo@gmail.com  captainmorgan286@hotmail.com  lezaberg@gmail.com  charwal00@gmail.com  matthewllock@gmail.com  courtney.lynn10717@gmail.com  20180042@student.nths.net  franczek.m@gmail.com  lazer5634@gmail.com  anish_dalmia@outlook.com  akr4500@gmail.com  jacob@hagist.com  benlk6@comcast.net  vanderveerelianna@gmail.com  20180480@student.nths.net  zacharysw@icloud.com  atlindburg@gmail.com  shibakoh06@gmail.com  alex.flan6@gmail.com  philipp.msrivastava@gmail.com  jeffbishop3@gmail.com    samgreene10966@gmail.com darrelsuarez@gmail.com rebecca.g.napoli@gmail.com connor.larkin1@gmail.com '
  let emailArr = emails.split(/(\s+)/).filter( (e) => e.trim().length > 0 );

  if (BetaEmails.find().count() === 0){
    console.log('Seeding BetaEmails DB...');
    emailArr.map((email) => {
      BetaEmails.insert({
        email_address: email
      });
    });
  }
});

