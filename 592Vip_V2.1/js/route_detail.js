$(function(){
	route_li_change();
	$(".route_btn_div button").bind({
		'click':function(){
			index=layer.open({
			  type: 2,
			  title: '在线预定',
			  shadeClose: true,
			  shade: 0.8,
			  maxmin :true,
			  resize:false,
			  area: ['550px', '80%'],
			  content: 'data_select.html' //iframe的url
			});
		}
	})
})
function route_li_change(){
	$(".route_li li").each(function(){
		$(this).bind({
			'click':function(){
				var hasC=$(this).hasClass('active');
				if(!hasC){
					$(this).siblings().removeClass('active');
					$(this).addClass('active')
				}
				$(".route_div >div").removeClass('active').eq($(this).index()).addClass('active')
				
			}
		})
	})
}
