 $(function(){
 	$(window).scroll(function(event) {
 		/* Act on the event */
 		var vitri = $('html,body').scrollTop(); // tinh vi tri
 		if (vitri >=100) {
 			console.log('xu li menu');
 			$('.menutren').addClass('bienhinh');
 		}else {
 			$('.menutren').removeClass('bienhinh');
 		}
 	});

})  
 