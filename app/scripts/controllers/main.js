'use strict';

/**
 * @ngdoc function
 * @name modocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modocApp
 */
angular.module('modocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
