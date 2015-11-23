(function($) {
	$(document).ready(function() {
		$('#navbar').prepend('<div id="bg-one"></div><div id="bg-two"></div><div id="bg-three"></div>');
	});
} )( jQuery );

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);