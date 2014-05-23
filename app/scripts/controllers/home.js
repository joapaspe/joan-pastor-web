'use strict';

angular.module('joanPastorWebApp')
.controller('HomeCtrl', function ($scope) {
	$scope.events = [
		{
				title : "Switzerland 2014",
				link : "#",
				imgs : [
					"pictures/switzerland1.jpg",
					"pictures/switzerland2.jpg",
					
		],
		
		},
		{
				title : "SWERC 2014 at Valencia",
				link : "www.swerc.eu",
				imgs : [
					"pictures/swerc14.jpg",
					
		],
		
		},
		{
				title : "Nuit2B at Lahti (Finland)",
				link : "www.nuit2b.eu",
				imgs : [
					"pictures/lahti1.jpg",
					
		],
		
		},
		{
			title : "TRABHCI 2013 at Rome",
			link : "www.nuit2b.eu",
			imgs : 
			[
				"pictures/roma1.jpg",
				"pictures/roma2.jpg",
				"pictures/roma3.jpg",
				/*"pictures/roma4.jpg",
        "pictures/roma5.jpg",
        "pictures/roma6.jpg",*/
			],
				
		},
				{
				title : "SWERC 2013 at Valencia",
				link : "www.swerc.eu",
				imgs : [
					"pictures/swerc1.jpg",
					"pictures/swerc2.jpg",
			],
		
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

