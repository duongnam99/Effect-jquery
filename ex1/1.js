$(document).ready(function() {
	// thu nho noi dung
	$('.ndmotkhoi').slideUp();
	$('.motkhoi h3').click(function(event) {
		/* Act on the event */
		// $('.ndmotkhoi').slideUp();
		$(this).next().slideToggle();
		$(this).toggleClass('xanh');
	});;
});