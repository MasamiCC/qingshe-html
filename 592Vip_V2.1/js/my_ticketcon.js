$(function(){
//	/loadcoupon(couponData);
})
var couponData=[
	    	{id:1,sale_item:'满199减20元',time:'有效期：2017-06-07  至  2017-06-10',coupon_bottom_content:'仅限制定商户使用，内容比较多时，鼠标放上来就往下撑	仅限制定商户使用，内容比较多 仅限制定商户使用，内容比较多 仅限制定商户使用，内容比较多 仅限制定商户使用，内容比较多 仅限制定商户使用，内容比较多'},
	    	{id:2,sale_item:'满199减20元',time:'有效期：2017-06-07  至  2017-06-10',coupon_bottom_content:'仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑'},
	    	{id:3,sale_item:'满199减20元',time:'有效期：2017-06-07  至  2017-06-10',coupon_bottom_content:'仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑'},
	    	{id:4,sale_item:'满199减20元',time:'有效期：2017-06-07  至  2017-06-10',coupon_bottom_content:'仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑'},
	    	{id:5,sale_item:'满199减20元',time:'有效期：2017-06-07  至  2017-06-10',coupon_bottom_content:'仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑仅限制定商户使用，内容比较多时，鼠标放上来就往下撑'},
	    ];

//console.log(couponData[0]["id"]);

function couponHover(){
	$(".newrowline").each(function(){
		$(this).mouseover(function(){
			if (!$(this).hasClass('cpactive')) {
				$(this).find('.cpuse_this').show()
			}else{
				$(".cpuse_this").hide()
			}
		}).mouseleave(function(){
			$(".cpuse_this").hide()
		})
	})
}
//function nocoupon(){
//	$(".newrowline1").each(function(){
//		var clicked=$('#newrowline1').hasClass('clicked');
//		$(this).click(function(){
//			if (!clicked) {
//				$('#newrowline1').addClass('clicked');
//				$('#newrowline1').children().css("border","1px solid #edb94a");
//				var plushtml=$(".plus").html();
//				$("#oldclickhtml").html(plushtml);
//				layer.close(layer.index)
//			}
//		})
//	})
//}

function loadcoupon(couponData,flg){
		var nflg=(flg>0)?'':'clicked';
		var html='<div class="newrowlinecont checked  " data_id="" >'
			+	'<div class="newrowline1 checked txtcenter row_piece" id="newrowline1">'
			+  		'<div class="plus '+nflg+'" onclick="used(\'不使用优惠券\',\'\')">'
			+  			'不使用优惠券'
			+  		'</div>'
			+  		'</div>'
			+	'</div>';
	
	for (var i in couponData) {
		var aflg=(flg==couponData[i]["id"])?'a_active':'';
		var bflg=(flg==couponData[i]["id"])?'b_active':'';
	html+='<div class="newrowlinecont checked" data_id="'+couponData[i]["id"]+'">'
		+	'<div class="newrowline txtcenter  row_piece" '+couponData[i]["id"]+'">'
		+		'<div class="coupon_top '+aflg+'">'
		+			'<ul class="">'
		+			    '<li class="coupon_top1">'+couponData[i]["sale_item"]+'</li>'
		+			    '<li class="coupon_top2">'+couponData[i]["time"]+'</li>'
		+			'</ul>'
		+			'<span class="zhuanxiang"><img src="../imgs/zhuanxiang.png"/></span>'
		+		'</div>'
		+		'<div class="coupon_bottom '+bflg+'">'
		+			'<span class="icon_v" ><i class="fa fa-angle-down icons_v" aria-hidden="true"></i></span>'
		+			'<div class="coupon_bottom_content">'
		+	  			couponData[i]["coupon_bottom_content"]
		+			'</div>'
		+		'</div>'
		+    	'<div class="cpuse_this"><button class="cpuse_this_icon" onclick="used(\''+couponData[i]["sale_item"]+'\',\''+couponData[i]["id"]+'\')">使用优惠券</button></div>'
		+     '</div>'
		+	'</div>'
	}	
	return html;
}


function used(sale_item,id){
		$("#oldclickhtml").html(sale_item).attr('data-id',id)
		layer.close(layer.index)
}












