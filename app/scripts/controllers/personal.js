'use strict';

angular.module('joanPastorWebApp')
.controller('PersonalCtrl', function ($scope, $http) {
  // Load the data
  $http.get('data/courses.json').success(function (data) {
    $scope.courses = data;
    console.log("courses:", $scope.courses);
  });
});
