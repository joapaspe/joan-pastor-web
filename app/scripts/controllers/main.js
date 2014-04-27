'use strict';

angular.module('joanPastorWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    $scope.sections = [
        { id: "home",
         view: "views/home.html",
         title: "Home"
        }
    ]
  });
