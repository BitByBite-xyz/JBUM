import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todosList.html';
import { Meteor } from 'meteor/meteor';

import { Posts } from '../../api/posts/posts';



class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.subscribe('Posts');

    this.helpers({
      tasks() {

        return Posts.find();
      },
      currentUser() {
        return Meteor.user();
      }
    })
  }
}

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller:  ['$scope', TodosListCtrl]
  });
