 $(function(){
 	// c1 nay doi hoi cac anh phai bang nhau nen luu y phan css
 	$('nav ul li a').click(function(event) {
 		/* Act on the event */
 		// phat hien data class cua nut dc click
 		var danhmuc = $(this).data('class');
 		console.log(danhmuc);
 		var ten = $(this).text();
 		$('section h1').text(ten);

 		$('.content ul li').each(function(index, el) {
 			if($(this).hasClass(danhmuc)){
 				// $(this).fadeIn();
 				$(this).show(300);
 			}else {
 				$(this).fadeOut();
 			}
 		});
 		return false; // ko cho the a chuyen trang
 	});
})  
 