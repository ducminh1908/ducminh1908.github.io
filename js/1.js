$(function() {
	$('.theohang ul').slideUp()
	$('.theohang').click(function(event) {
		/* Act on the event */
		$('.theohang ul').slideToggle()
	});
});