 $(function(){
 	$('html,body').scrollspy({target:'.menutren'});
 	$('.menutren ul li a').click(function(event) {
 		/* Act on the event */
 		var vitri = $(this).attr('href'); // lay thuoc tinh trong href,cung la id cua the muon toi
 		console.log(vitri);
 		var toado = $(vitri).offset().top;
 		$('html,body').animate({scrollTop: toado});
 		return false;
 	});
})  
