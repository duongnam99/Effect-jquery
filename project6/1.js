 $(function(){
 	$('.nut').click(function(event) {
 		/* Act on the event */
 		$('.noidung').addClass('noidunghienra');
 		$('.momo').addClass('momohienra');
 	});
 	$('.nutdong, .momo').click(function(event) {
 		/* Act on the event */
 		$('.noidung').removeClass('noidunghienra');
 		$('.momo').removeClass('momohienra');
 	});
 	// $('.momo').click(function(event) {
 	// 	 Act on the event 
 	// 	$('momo').;
 	// });
})  
 