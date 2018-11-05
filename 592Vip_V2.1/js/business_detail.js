//评论头部按钮 选中状态 
$(".p_icon").each(function(){
	$(this).click(function(){
		if(!$(this).hasClass("pactive")){
			$(".p_icon").removeClass("pactive");
			$(this).addClass("pactive");
		}
	})
});
//评论头部按钮 选中状态 

//分享
$(function() {

            $("#socialShare").click(function(){
           	$(".shareout").toggle();
           });
            

});
//分享

//collect
$("#collect").click(function(){
	var collecthtml=$(this).find('.collectimg')
	collecthtml.toggleClass("gold");
	if(collecthtml.hasClass("gold")){
		$(this).find('.shoucang').html("已收藏").css("color","#edb94a");
	}else{
		$(this).find('.shoucang').html("收藏").css("color","#666");
	}
});
//collect

$(function(){

 
//  店铺评分
    $('.shop_star').raty({
			score: function() {
			    return $(this).attr('data-score');
			},
			size: 40,
			number: 5,
			readOnly:true,
			starOn:'../imgs/icon1.png',
			starOff:'../imgs/icon2.png',
			starHalf:'../imgs/icon3.png',
		});
//  店铺评分
// 4颗星评论评分
      $('.com_score').raty({
			score: function() {
			    return $(this).attr('data-score');
			},
			size: 40,
			number: 5,
			readOnly:true,
			starOn:'../imgs/icon1.png',
			starOff:'../imgs/icon2.png',
			starHalf:'../imgs/icon3.png',
		});
// 4颗星评论评分		

//弹出地图
  var  index='';
		$('.lookmap').on('click',function(){
		index=layer.open({
			title:"地图",
			type:2,
			area:['500px','500px'],
			shadeClose:true,
			content:'map_layer.html',
		});
	});
//弹出地图
});
