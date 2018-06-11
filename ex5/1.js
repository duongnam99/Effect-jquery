 $(function(){
 	$('.ndthem').slideUp(0);
 	$('.nutload').click(function(event) {
 		/* Act on the event */
 		 	$('.ndthem').slideToggle();
 		 	TweenMax.staggerFrom($('.to'),1,{top:100, opacity:0},0.4)

 	});
})  
 