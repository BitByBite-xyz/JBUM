import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import { Accounts } from 'meteor/accounts-base';


angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  'accounts.ui'
]);


function onReady() {
  angular.bootstrap(document, ['simple-todos']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
