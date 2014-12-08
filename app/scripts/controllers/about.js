'use strict';

/**
 * @ngdoc function
 * @name quotesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quotesApp
 */
angular.module('quotesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
