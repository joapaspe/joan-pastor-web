'use strict';

angular.module('joanPastorWebApp')
  .controller('MainCtrl', function ($scope,$document) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    $scope.sections = [
        { id: "home",
         view: "views/home.html",
         title: "Home"
        },
      {
       id:'contact',
        view: 'views/contact.html',
        title: 'Contact'
      },
      {
       id:'publications',
        view: 'views/publications.html',
        title: 'Publications and projects'
      },
      {
        id:'personal',
        view: 'views/personal.html',
        title: 'Personal Interests'
      },
      {
        id:'social',
        view: 'views/social.html',
        title: 'Social'
      },
      
    ];  
  $scope.changelog = "views/changelog.html";
  });
