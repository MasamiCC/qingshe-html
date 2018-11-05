$(function(){
	$(window).scroll(function(){
		var sctop=$(window).scrollTop();
		if (sctop>100) {
			$('#header_l').slideUp()
			$('#header_s').fadeIn()
			$(".content").css({
				marginTop:'178px'
			})
		}else if(sctop==0){
			$('#header_s').hide()
			$('#header_l').slideDown()
			
			$(".content").css({
				marginTop:'0px'
			})
		}
	})
})
