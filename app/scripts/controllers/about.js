'use strict';

/**
 * @ngdoc function
 * @name modocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modocApp
 */
angular.module('modocApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
