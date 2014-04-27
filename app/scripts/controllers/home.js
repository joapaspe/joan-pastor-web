'use strict';

angular.module('joanPastorWebApp')
.controller('HomeCtrl', function ($scope) {
  $scope.events = [
    {
      imgs : 
      [
        "pictures/roma1.jpg",
        "pictures/roma2.jpg",
        "pictures/roma3.jpg",
        /*"pictures/roma4.jpg",
        "pictures/roma5.jpg",
        "pictures/roma6.jpg",*/
      ],
        title : "TRABHCI 2014 at Rome",
        link : "www.nuit2b.eu"
        },
        {

        imgs : [
        "pictures/swerc1.jpg",
        "pictures/swerc2.jpg",
      ],
      title : "SWERC 2013 at Valencia",
      link : "www.swerc2013.eu"

    },   
  ];

  // Unfold pictures
  $scope.pictures = [];
  $scope.events.forEach(
    function (event) 
    {
      event.imgs.forEach(
        function(picture){
          $scope.pictures.push({
            title : event.title,
            link : event.link,
            src : picture
          });
        }
      )
    }
  );
  console.log($scope.pictures);

});

