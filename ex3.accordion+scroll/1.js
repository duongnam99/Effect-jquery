 $(function(){
 	$('.tdkhoi').click(function(event) {
 		/* Act on the event */
 		$(this).toggleClass('xanh');
 		$(this).next().slideToggle(500, "easeInExpo");
 	    $('html,body').animate({scrollTop: $(this).offset().top},1000, "easeInExpo");
 	});
 	$('.ndkhoi').slideUp();
})  
 