/*导入头部和尾部和加入黑卡*/
$(document).ready(function(){
   $(".header").load("../html/components/header.html",function(){
    	//根据链接改变头部a链接的样式
        var url = window.location.pathname;
		//改变头部的active
	    changeHeaderActive(url)
    });
    $(".join_nav").load("../html/components/join.html");
    $(".footer").load("../html/components/footer.html");
    $('.bcBtns').load("../html/components/btns.html");
//  gototop
     $('#Btnsall').hide(); //隐藏go to top按钮
	
	 $(window).scroll(function() {
//	 console.log($(this).scrollTop());
	 
		 //当window的scrolltop距离大于350时，go to 
		if($(this).scrollTop() > 350) {
			 $('#Btnsall').fadeIn();
			
		} else {
			 $('#Btnsall').fadeOut();
		}
	});
//  gototop

//iframe的click事件
$(document).on('click','.customer.btniebg',function(){
	$('.bcBtns_item .iframe_nav').addClass('show');
})

//iframe 的关闭按钮
$(document).on('click','.iframe_nav .close',function(e){
	e.stopPropagation()
	$(this).closest('.iframe_nav').removeClass('show');
})

});

//所有都加载完成
window.onload = function () {
    //加载中隐藏
    $('.loading_area').fadeOut();
    
    //替换网站中的联系客服
    $('.iframe_nav iframe').attr('src','https://www.sobot.com/chat/pc/index.html?sysNum=2d82f41063a5453fa088bd67b41cef38');
    //调用图片懒加载方法
		$('.bg_lazy').lazyLoad({
			container: 'body',//对某一容器内的图片进行懒加载
		})
    //先加载模糊图片再替换高清大图
    $('.zip_img').replacement();
    
    console.log("%c轻奢点评"," font-size:2em;color: #b39054;text-shadow: 5px 5px 5px ragb(0,0,0,0.1);font-weight: bold;");
};

//新增一个改变头部active的方法
var changeHeaderActive = function(url){
	$.each($('.header_link'), function(key,val) {
		var dataSrc = $(val).attr('dara-src');
		if(url.indexOf(dataSrc)!= -1){
			$(val).addClass('active');
		}
	});
}




//调用wow.js
var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 100,
  mobile: false,
  live: true
});
wow.init();


function goTop(){
	$('html ,body').animate({
		scrollTop: 0
	}, 300);
	return false;
}