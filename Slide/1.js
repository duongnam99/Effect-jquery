 $(function(){

 	var thoigian = setInterval(function(){
 		$('.next').trigger('click');
 	},3000)

 	// Xu li su kien nhan vao nut sang phai
 	$('.next').click(function(event) {
 		//kich vao nut next thi thoi khong chay tu dong nua:
 		clearInterval(thoigian);
 		
 		// xu li cho phan nut
 		var a = $('.xanh').index() + 1 ;
 		$('.nutslide ul li').removeClass('xanh');

 		if ( a == $('.nutslide ul li').length) {
 			a = 0;
 		}
 		$('.nutslide ul li:nth-child('+ (a+1 )+ ')').addClass('xanh');

 		// xu li bien mat slide
 		var sau = $('.active').next();
 		$('.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
 	 		$('.bienmatobentrai').removeClass('bienmatobentrai');
 		});
 		// xu li xuat hien
 		if (sau.length == 0 ) {
 			$('._1slide:first').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) { // thay vi dung first co the dung nth-child(1)
	 			$('.active').removeClass('active');
	 			$('._1slide:first').addClass('active').removeClass('divaotubenphai');
 			});
 		} else {
 			sau.addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
	 			$('.active').removeClass('active');
	 			sau.addClass('active').removeClass('divaotubenphai');
 			});
 		}
 	}); // end nut next

 	// Xu li su kien nhan vao nut sang trai
 	$('.prev').click(function(event) {
		//kich vao nut next thi thoi khong chay tu dong nua:
 		clearInterval(thoigian);
	
 		// xu li cho phan nut
 		var a = $('.xanh').index() + 1 ;
 		$('.nutslide ul li').removeClass('xanh');

 		if ( a == 1 ) {
 			a = $('.nutslide ul li').length + 1;
 		}
 		$('.nutslide ul li:nth-child('+ (a-1 )+ ')').addClass('xanh');

 		// xu li bien mat slide
 		var truoc = $('.active').prev();
 		$('.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
 	 		$('.bienmatobenphai').removeClass('bienmatobenphai');
 		});
 		//xu li xuat hien
 		if (truoc.length == 0 ) {
 			$('._1slide:last').addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
	 			$('.active').removeClass('active');
	 			$('._1slide:last').addClass('active').removeClass('divaotubentrai');
 			});
 		} else {
 			truoc.addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
	 			$('.active').removeClass('active');
	 			truoc.addClass('active').removeClass('divaotubentrai');
 			});
 		}
 	}); // end nut prev

 	// xu li su kien khi  nhan vao nutslide (hinh tron)
 	$('.nutslide ul li').click(function(event) {
 		$('.nutslide ul li').removeClass('xanh');
 		$(this).addClass('xanh');
 		// xu li cho slide 
 		var vitri = $(this).index() +1;
 		$('.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
 	 		$('.bienmatobentrai').removeClass('bienmatobentrai');
 		});
 		$('._1slide:nth-child('+ vitri+ ')').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
 			$('.active').removeClass('active');
 			$('._1slide:nth-child('+ vitri+ ')').addClass('active').removeClass('divaotubenphai');
	 	});
 	});
})  
 