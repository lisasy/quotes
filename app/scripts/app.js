'use strict';

var quotesApp = angular.module("quotesApp", [
  'ngAnimate',
  'ngResource',
  'ngRoute',
]);

quotesApp.controller("QuotesController", ["$scope", function($scope) {
  $scope.quotes = [
    {
      content: "A",
      author: "YO"
    },
    {
      content: "B",
      author: "Oprah"
    }
  ]
}]);

