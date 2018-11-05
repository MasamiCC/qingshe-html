	$(function(){
		var mySwiper = new Swiper ('.video_banner', {
			pagination: '.page',
			paginationClickable: true,
			spaceBetween: 1,
		    autoplay: 2000,//可选选项，自动滑动
		    loop:true,
		})
//		手风琴轮播图加超链接
		$("#wrap").on('click','li',function(){
			alert("hello");
			var id=$(this).attr('data-id');
			console.log("id="+id);
			location.href='blackCard.html?id='+id;
		})
		//		手风琴轮播图加超链接
	})
     var swiper = new Swiper('.lunbo1', {
        pagination: '.page1',
        paginationClickable: true,
        spaceBetween: 1,
        autoplay:2000,
        loop:true,
    });
     var swiper = new Swiper('.lunbo2', {
        pagination: '.page2',
        paginationClickable: true,
        spaceBetween: 1,
        autoplay:2000,
        loop:true,
    });
    var swiper = new Swiper('.lunbo3', {
        zoom: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay:2000,
        loop:true,
    });
    var swiper = new Swiper('.lunbo4', {
        zoom: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay:2000,
        loop:true,
    });
     
    (function(){
		$('#wrap li').mouseover(function(){
			if(!$(this).hasClass('curr')){
				$('#wrap li').removeClass('curr');
				$(this).addClass('curr');

				// 切换背景
				$('#wrap li').each(function(index){
					if($(this).hasClass('curr')){
						$('.bg').fadeOut(300);
						$('.bg:eq(' + index + ')').fadeIn(500);
					}
				});

				$('.curr').stop().animate({
					width: 560
				}, 500, 'linear');
				$('#wrap li').not('.curr').stop().animate({
					width: 50
				}, 500, 'linear');
			}
		});
	})()
	$(function(){
		loadMerchant();
		$(window).resize(function(){
			loadMerchant();
		})
		$(".Merchant_reload span").bind('click',function(){
			$(".Merchant_list").append(loadCooperative());
			loadMerchant();
			var Width=$(".Merchant_list li ").width()*3;
			$(".Merchant_list").animate({
				left:"-="+Width+"px",
			})
		})
	})
	function loadCooperative (){
		var html=''
		for (var i = 0; i < 3; i++) {
			html+='<li>'
			+     ' <a href="">'
			+		'<img src="../imgs/Merchant_1.png"/>'
			+		'<div class="Merchant_shop">'
			+			'<span>我家酸菜鱼'+i+'</span>'
			+			'<span class="Merchant_star">'
			+				'<img src="../imgs/icon1.png"/>'
			+				'<img src="../imgs/icon1.png"/>'
			+				'<img src="../imgs/icon1.png"/>'
			+				'<img src="../imgs/icon1.png"/>'
			+				'<img src="../imgs/icon2.png"/>'
			+			'</span>'
			+		'</div>'
			+      '</a>'
			+	'</li>';
		}
		return html;
		
	}
	function loadMerchant(){
		var Width=$(window).width();
		var liwidth;
		if (Width<=400) {
			liwidth=parseInt(Width*1);
			
		}else if(Width<=600){
			liwidth=parseInt(Width*0.5);
		}else if(Width<=1280){
			liwidth=parseInt(Width*0.333);
		}else{
			liwidth=parseInt(1280*0.333);
		}
		console.log(Width)
		$(".Merchant_list li ").css({
			width:liwidth
		})
		var height=parseInt(9*liwidth/16*0.95)+35;
		$(".Merchant").css({
			height:height
		})
		$(".Merchant_list").css({
			width:parseInt(liwidth*$(".Merchant_list li ").size())
		})
	}