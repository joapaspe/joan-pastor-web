				$(document).ready(function() {
					$('.carousel').carousel();


					// Responsive nav-bar
					$(".navbar li a").click(function(event) {
       				 // check if window is small enough so dropdown is created
    				$(".navbar-collapse").removeClass("in").addClass("collapse");
    				});
    				//$('.navbar').scrollspy({data-offset:'10'});
					//$('.navbar').scrollspy('refresh')
					$("#nav-home").toggleClass("active", true);

					$('a').smoothScroll({exclude: ['#home','#this-carousel-id'], offset: -100});
				})