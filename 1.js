$(function() {
	$('.nd1nut').slideUp();
	$('.motnut h3').mouseover(function(event) {
		/* Act on the event */
		$('.nd1nut').slideUp();
		$(this).next().slideDown();
		
	});
	

	

});