 $(function(){
 	// $('body').scrollspy({ target: '.navbar' }) // co the xoa data-target o body va dung js cung dc
 	$(window).scroll(function(event) {
 		var vitri = $('html,body').scrollTop();

 		//hieu ung phan navbar:
 		var trangthai = 'chuaqua';

 		if(vitri >= $('.trongsuot').innerHeight()){
 			if(trangthai == 'chuaqua'){
 			 	trangthai = 'daqua';
 				$('.trongsuot').addClass('bienhinh');
 			}			
 		}else if(vitri < $('.trongsuot').innerHeight()) {	
 		 	// if(trangthai == 'daqua'){
 			 //  	trangthai = 'chuaqua';
 				$('.trongsuot').removeClass('bienhinh');
 			// }			
 		}
 		//hieu ung phan products
 		var trangthai1 = 'chuaqua';
 		var vtproducts = $('.products').offset().top;
 		if(vitri >= vtproducts - 600){
 			if(trangthai1 == 'chuaqua') {
 			 	trangthai1 = 'daqua';
 			 	$('.text').addClass('xuathientext');
 				$('.product1').addClass('delay1');
	 			$('.product2').addClass('delay2');
	 			$('.product3').addClass('delay3');

	 			$('.product1,.product2,.product3').addClass('fadeInLeft animated');
 			}	
 		}
 		
 		// hieu ung cho phan services
 		var trangthai2 = 'chuaqua';
 		var vtservices = $('.services').offset().top;
 		if(vitri >= vtservices - 400){
 			if(trangthai2 == 'chuaqua'){
 				trangthai2 = 'daqua';
 				$('.services').addClass('fadeInRight animated');
 				// TweenMax.staggerFrom($('.sv'),0.1,{x:100, opacity:0},0.4);
 			}
 		}

 		// hieu ung cho phan dev
 		var trangthai3 = 'chuaqua';
 		var vtdev = $('.developers').offset().top;
 		if(vitri >= vtdev - 400){
 			if(trangthai3 == 'chuaqua'){
 				trangthai3 = 'daqua';
 				$('.text1dv,.text2dv,.ke').addClass('textdvhienra');
 			}
 		}
 	});
 	// hieu ung khi click vao nav
 	$('.trongsuot ul li a').click(function(event) {		
 		var vitri = $(this).attr('href'); // lay thuoc tinh trong href,cung la id cua the muon toi
 		var toado = $(vitri).offset().top;
 		$('html,body').animate({scrollTop: toado},1000, "easeOutBounce");
 		return false;
 	});
})  
 