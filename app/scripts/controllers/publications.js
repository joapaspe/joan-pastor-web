'use strict';

angular.module('joanPastorWebApp')
.controller('PublicationsCtrl', function ($scope, $http) {
  // Load the data
  $http.get('data/publications.json').success(function (data) {
    $scope.publications = data;
  });
  console.log($scope.publications);
});