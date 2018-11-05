$(function(){
	//调用wow.js
	var wow = new WOW({
	  boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 100,
	  mobile: false,
	  live: true
	});
	wow.init();
	//监听浏览器滑动到底部了
	 $(window).scroll(function () {
	    //已经滚动到上面的页面高度
	    var scrollTop = $(this).scrollTop();
	    //页面高度
	    var scrollHeight = $(document).height();
	    //浏览器窗口高度
	    var windowHeight = $(this).height();
	    //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
	    if (scrollTop + windowHeight == scrollHeight) {
	    	$('.introduce_5').addClass('introduce_5_in');   
	    }
	 });
})



window.onload = function () {
  //加载中隐藏
  $('.loading_area').fadeOut();
  
  //调用图片懒加载方法
	$('.bg_lazy').lazyLoad({
		container: 'body',//对某一容器内的图片进行懒加载
	})
  //先加载模糊图片再替换高清大图
  $('.zip_img').replacement();
  //调用预加载图片的方法
  //期望预加载的图片集合
  var imgList = ['../static/img/BCright1.png','../static/img/BCright2.png','../static/img/BCright3.png','../static/img/BCright4.png','../static/img/daijia.png','../static/img/jiudian.png'];
  loadImg(imgList)
};

//定义一个预加载图片的方法
var loadImg = function(imgList){
	setTimeout(function() {
		$.each(imgList,function(key,val){
			new Image().src = val;
		})	
  }, 1000);
}