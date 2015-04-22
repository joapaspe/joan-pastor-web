'use strict';

angular.module('joanPastorWebApp')
  .controller('MainCtrl', function ($scope,$document) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    $scope.sections = [
      /*  { id: "home",
         view: "views/home.html",
         title: "Home"
        },
      {
       id:'contact',
        view: 'views/contact.html',
        title: 'Contact'
      },
      */
      /*{
       id:'publications',
        view: 'views/publications.html',
        title: 'Publications and projects'
      },
      */
        {
            id: 'phd',
            title: 'PhD',
            view: 'views/phd.html'

        },
        {
            id: 'project',
            title: 'Projects',
            view: 'views/projects.html',
            style: 'bg-primary'

        },
        {
            id: 'coding',
            title: 'Programming',
            view: 'views/coding.html'
            //style: 'bg-primary'

        },
      {
        id:'personal',
        view: 'views/personal.html',
        title: 'Personal Interests',
          style: 'bg-primary'
      },
      {
        id:'social',
        view: 'views/social.html',
        title: 'Social'
      },
      
    ];  
  $scope.changelog = "views/changelog.html";
        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })
  });

