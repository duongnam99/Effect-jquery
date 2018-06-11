 $(function(){
 	new WOW().init(); // kich hoat wow
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var vitribody = $('html,body').scrollTop();
 		var vitrigiaodien = $('.giaodien').offset().top;
 		vitrigiaodien = vitrigiaodien - 450; // de bay vao som hon
 		if(vitribody >= vitrigiaodien){
 			$('.giaodien').addClass('wow fadeInRight animated');
 			
 		}

 	});
})  
 