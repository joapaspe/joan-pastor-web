'use strict';

angular
  .module('joanPastorWebApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'duScroll',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).filter('html',function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    }
});
