var index='';
var timer='';
var timer1='';

var content_money=document.getElementById("content_money");
	content_money.oninput=function(){
		var values=content_money.value;
		var newvalue='';
		if (isNaN(values)) {
//			errorMsg('捐赠金额格式不正确！')
			return false;
		}else{
			if (values.length>0) {
				if (values.length>=5) {
					document.getElementById("content_money").value=values.slice(0,5);
					newvalue=parseFloat(values.slice(0,5)).toFixed(2);
					
				} else{
					newvalue=parseFloat(values).toFixed(2);
				}
				$("#point").html(parseInt(newvalue/100))
				console.log()
//				confirmClick();
			}else if(values.length<=0){
				newvalue='0.00';
				$('.pay_wayoutdiv').removeClass('zfactive');
				$("#confirmpay").removeClass('confirmpay_abled');
			}
		}
		document.getElementById("content_show").innerHTML=newvalue;
	}
	


//	zfactive
	$('.pay_wayoutdiv').each(function(){
	    	$(this).bind({
	    		click:function(){
		    			$('.pay_wayoutdiv').removeClass('zfactive');
						$(this).addClass('zfactive');
						$("#confirmpay").addClass('confirmpay_abled');
	    		}
	    	})
	    })

	
	//	zfactive
	
//	错误信息
	function errorMsg(msg){
		$(".error_msg").html(msg);
		timer=setTimeout(function(){
			$(".error_msg").html('');
		},2000)
	}
//	错误信息

				
	    			

//confirmClick
//	function confirmClick(){
	
	$("#confirmpay").on('click',function(){
		var money=$("#content_money").val();
	    if(money>0){
			var hasC=$(this).hasClass('confirmpay_abled');
			if(hasC){
				var presentindex=$('.pay_wayoutdiv.zfactive').index();
				var pay_type='';
				if(presentindex==0){
					pay_type='zfb'
				}else{
					pay_type='wx'
				}
				//	paylayer
				index=layer.open({
					title:"支付信息",
					type:1,
					area:['540px','450px'],
					shadeClose:true,
					content:abc("weixin","../imgs/zhifubaozhhifu.png"),
					
					})
				loadcutdownnum();
			}
		}else{
	    				errorMsg('请先输入捐赠金额！')
	    				$('.pay_wayoutdiv').removeClass('zfactive');
	    				$("#content_money").focus();
	    				
	    			}
	});
	
//}
//confirmClick
//	paylayer
function abc(pay_type,imgherf){
	var values=$("#content_money").val();
	newvalue=parseFloat(values).toFixed(2);
	return  '<div class="pay">'
        	+	'<div class="pay1">'
        	+		'<span style="vertical-align: middle;font-size: 18px;color: #333;">使用'+pay_type+'支付</span>'
        	+		'<span style="vertical-align: middle;color: #f84242;font-size: 24px;">￥'+newvalue+'</span>'
        	+	'</div>'
        	+ '<div class="smallfont">'
        	+	'剩余支付时间'
        	+	'<span id="cutdown" count="100"></span>'
        	+	'，逾期将自动取消</div>'
        	+	'<div class="pay2"><img src="'+imgherf+'"/></div>'
        	+	'<div class="pay3">'
        	+		'<div class="saoyisao">'
        	+			'<div class="sao">'
        	+			'<img src="../imgs/saoyisao.png"/>'
        	+			'</div>'
        	+			'<div class="sao_font">'
        	+				'<ul>'
        	+					'<li>请使用'+pay_type+'扫一扫</li>'
        	+					'<li>扫描二维码完成支付</li>'
        	+				'</ul>'
        	+			'</div>'
        	+		'</div>'
        	+	'</div>'
        	+'</div>'
        	
}	
//	paylayer	
	
	
	//time
function loadcutdownnum(){
	var count=$("#cutdown").attr("count");
	console.log("old="+count)
	if(count>0){
		var mins=parseInt(count/60);
		mins=mins<10?'0'+mins:mins;
		var sec=count%60;
		sec=sec<10?'0'+sec:sec;
		var newhtml=mins+"分"+sec+"秒";
		console.log("newhtml="+newhtml)
		$("#cutdown").html(newhtml);
		countDown();
	}
//	else{
//		$("#cutdown").parent().html("逾期已取消").css("color","red");
//	}
}
//countdown
function countDown(){
	clearInterval(timer);
	timer=setInterval(function(){
		var count=$("#cutdown").attr("count");
		if(count>0){
			count--;
			var mins=parseInt(count/60);
			mins=mins<10?'0'+mins:mins;
			var sec=count%60;
			sec=sec<10?'0'+sec:sec;
			var newhtml=mins+"分"+sec+"秒";
			$("#cutdown").html(newhtml);
			$("#cutdown").attr('count',count)
			return count;
		}else{
			$(".smallfont").html('逾期已取消').css('color','red');
			$("#confirmpay").removeClass('confirmpay_abled');
			$(".pay_wayoutdiv").removeClass('zfactive')
			clearInterval(timer);
			layer.close(index);
		}
	},1000);
}
	

