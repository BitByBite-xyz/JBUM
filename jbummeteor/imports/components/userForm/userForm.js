import { Template } from 'meteor/templating';
import './userForm.html';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import angular from 'angular';
import angularMeteor from 'angular-meteor';

angular.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
