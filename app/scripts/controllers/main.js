'use strict';

/**
 * @ngdoc function
 * @name quotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quotesApp
 */
angular.module('quotesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
