import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './userCollection.html';
import meteor from './Meteor/meteor';
import accounts from './meteor/accounts-base';

class usersCollectionCtrl {
  constructor() {
    this.userID = [{
      userID: '#1'
    }, {
      userID: '#2'
    }, {
      userID: '#3'
    }];
  }
}

export default angular.module('usersCollection', [
  angularMeteor
])
  .component('usersCollection', {
    templateUrl: 'imports/components/usersCollection/usersCollection.html',
    controller: userCollectionCtrl
  });
