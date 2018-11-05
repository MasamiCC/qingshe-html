mui.init()
		$(function(){
			loadpic();
			mui.previewImage();
			
		var count=GetQueryString('count');
			//进度条
			$(".bar_left").animate({
				width:count*9+'%',
			})
			$(".bar_num").html(count*10+'%')
			
		$('.etr_item_content_bottom').click(function(){
			$(this).siblings().css({"height":"auto","overflow":"auto"});
//			$('.down_icon').removeClass('fa-angle-down').addClass('fa-angle-up');
//			$(this).css("background","none");
			$(this).hide()	
		});
			
			
				
				
			
				
		});
		
		//获取URL参数
			function GetQueryString(name){
			     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			     var r = window.location.search.substr(1).match(reg);
			     if(r!=null)return  unescape(r[2]); return null;
			}
		
		
		function loadpic(){
				var width=$(window).width();
					console.log(width)
					$(".pic_items").css({
						width:parseInt(width*0.35),
					})
					var swiper = new Swiper('.swiper-container', {
				        slidesPerView: 'auto',
				        paginationClickable: true,
				        spaceBetween: 0
				});
			}
		


	

