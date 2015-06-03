'use strict';

/**
 * @ngdoc function
 * @name modocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modocApp
 */
angular.module('modocApp')
  .controller('MainCtrl', function ($http, $scope) {
    console.log("MainCtrl here, how you doin'?");
    $http.get('scripts/source/projects.json').success(function(data) {
        $scope.projects = data;
    });
    $scope.asd = "or just keep scrolling for that sweet parallax effect"
  });
