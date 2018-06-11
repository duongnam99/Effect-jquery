 $(function(){
 	$('.content ul').isotope({
 		itemSelector: 'li'
 	});
 	// code cho phan nut 
 	$('nav li a').click(function(event) {
 		/* Act on the event */
 		var ten = $(this).text();
 		var danhmuc = $(this).data('class');
 		danhmuc = "." + danhmuc;
 		if(danhmuc == '.all'){
 			$('section h1').text('Tat ca anh');
 			$('.content ul').isotope({filter: '*'});
 		}else {
 			$('section h1').text(ten);
 			$('.content ul').isotope({filter: danhmuc});
 		}
 		
 		return false;
 	});
})  
 