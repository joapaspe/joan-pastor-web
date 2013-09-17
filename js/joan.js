				$(document).ready(function() {
					$('.carousel').carousel();

					//$('.navbar').scrollspy({data-offset:'10'});
					//$('.navbar').scrollspy('refresh')
					$("#nav-home").toggleClass("active", true);

					$('a').smoothScroll({exclude: ['#home','#this-carousel-id'], offset: -100});
				})