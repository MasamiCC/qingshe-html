$(function(){
//	下拉
	$(".up").each(function(){
		$(this).click(function(){
			$(this).prev().toggle();
					if($(this).find(".icons_v").hasClass("fa-angle-down")){
						$(this).html('<span class="icon_up" id="icon_up">上拉收起详情&nbsp;&nbsp;<i class="fa fa-angle-down icons_v" aria-hidden="true"></i></span>');
						$(this).find(".icons_v").removeClass("fa-angle-down")
						$(this).find(".icons_v").addClass("fa-angle-up")
						
					}else{
						$(this).html('<span class="icon_up" id="icon_up">下拉显示详情&nbsp;&nbsp;<i class="fa fa-angle-down icons_v" aria-hidden="true"></i></span>');
						$(this).find(".icons_v").addClass("fa-angle-down")
						
					}
		});
	});
	
	
loadcutdownnum();
	
	
});

var timer='';
var index='';
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
		payWayClick();
		confirmClick();
	}else{
		$("#cutdown").parent().html("订单逾期已取消").css("color","red");
	}
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
			$(".smallfont").html('订单逾期已取消').css('color','red');
			$("#confirmpay").removeClass('confirmpay_abled');
			$(".pay_wayoutdiv").removeClass('active')
			clearInterval(timer);
			layer.close(index);
		}
	},1000);
}
//	paylayer
function abc(type,img,amout){
	var amout=parseFloat(amout).toFixed(2);
	var htmls=$('<div class="pay"></div>');
	var tempHtml='';
	htmls.append('<div class="pay1"><span style="vertical-align: middle;font-size: 18px;color: #333;">使用'+type+'支付</span><span style="vertical-align: middle;color: #f84242;font-size: 24px;">￥'+amout+'</span></div>')
	if(type=='黑卡支付'){
		tempHtml+='<div id="form_paypsw"><div class="pay_title">支付密码</div>';
		tempHtml+='<div id="payPassword_container" class="alieditContainer clearfix" data-busy="0">'
			+	'<div class="i-block" data-error="i_error">'
			+		'<div class="i-block six-password">'
			+			'<input class="i-text sixDigitPassword" id="payPassword_rsainput" type="password" autocomplete="off" required="required" value="" name="payPassword_rsainput" data-role="sixDigitPassword" tabindex="" maxlength="6" minlength="6" aria-required="true">'
			+			'<div tabindex="0" class="sixDigitPassword-box" style="width: 180px;">'
			+				'<i style="width: 29px; border-color: transparent;" class=""><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<span style="width: 29px; left: 0px; visibility: hidden;" id="cardwrap" data-role="cardwrap"></span>'
			+			'</div>'
			+		'</div>'
			+	'</div>'
			+'</div>';
		tempHtml+="<div class='black_i'>黑卡<span style='color:#999'>(余额<span style='color:#666'>￥300.00</span>)<span></div>";
		tempHtml+="<div class='black_i' style='color:#999'>余额不足<span class='black_cz'>去充值</span></div>";
		tempHtml+="<div class='black_i'><button class='black_submit_pay'>确认支付<button></div></div>";
		htmls.append(tempHtml);
		
	}else{
		tempHtml='<div class="pay2"><img src="'+img+'"/></div>'
        	+	'<div class="pay3">'
        	+		'<div class="saoyisao">'
        	+			'<div class="sao">'
        	+			'<img src="../imgs/saoyisao.png"/>'
        	+			'</div>'
        	+			'<div class="sao_font">'
        	+				'<ul>'
        	+					'<li>请使用'+type+'扫一扫</li>'
        	+					'<li>扫描二维码完成支付</li>'
        	+				'</ul>'
        	+			'</div>'
        	+		'</div>'
        	+	'</div>'
		htmls.append(tempHtml)
	}
	return  htmls.prop("outerHTML");
        	
}

//	active
function payWayClick(){
	$(".pay_wayoutdiv").each(function(){
		$(this).click(function(){
			var count=$("#cutdown").attr("count");
			if(count>0){
				if(!$(this).hasClass("active")){
					$(".pay_wayoutdiv").removeClass("active");
					$(this).addClass("active");
					$("#confirmpay").addClass('confirmpay_abled');
				}
			}else{
				$(".pay_wayoutdiv").removeClass("active");
				
			}
		});
	});
}
function confirmClick(){
	$("#confirmpay").on('click',function(){
		var hasC=$(this).hasClass('confirmpay_abled');
		if(hasC){
			var presentindex=$('.pay_wayoutdiv.active').index();
			var type='';
			if(presentindex==0){
				type='支付宝'
			}else if(presentindex==1){
				type='微信'
			}else if(presentindex==2){
				type='黑卡支付'
			}
			//	paylayer
			index=layer.open({
				title:"支付信息",
				type:1,
				area:['540px','450px'],
				shadeClose:true,
				content:abc(type,"../imgs/zhifubaozhhifu.png","38"),
				});
			passWordClick();
		}
		
	});
}



function passWordClick(){
	var payPassword = $("#payPassword_container"),
    _this = payPassword.find('i'),	
	k=0,j=0,
	password = '' ,
	_cardwrap = $('#cardwrap');
	//点击隐藏的input密码框,在6个显示的密码框的第一个框显示光标
	payPassword.on('focus',"input[name='payPassword_rsainput']",function(){
	
		var _this = payPassword.find('i');
		if(payPassword.attr('data-busy') === '0'){ 
		//在第一个密码框中添加光标样式
		   _this.eq(k).addClass("active");
		   _cardwrap.css('visibility','visible');
		   payPassword.attr('data-busy','1');
		}
		
	});	
	//change时去除输入框的高亮，用户再次输入密码时需再次点击
	payPassword.on('change',"input[name='payPassword_rsainput']",function(){
		_cardwrap.css('visibility','hidden');
		_this.eq(k).removeClass("active");
		payPassword.attr('data-busy','0');
	}).on('blur',"input[name='payPassword_rsainput']",function(){
		
		_cardwrap.css('visibility','hidden');
		_this.eq(k).removeClass("active");					
		payPassword.attr('data-busy','0');
		
	});
	
	//使用keyup事件，绑定键盘上的数字按键和backspace按键
	payPassword.on('keyup',"input[name='payPassword_rsainput']",function(e){
	
	var  e = (e) ? e : window.event;
	
	//键盘上的数字键按下才可以输入
	if(e.keyCode == 8 || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
			k = this.value.length;//输入框里面的密码长度
			l = _this.size();//6
			
			for(;l--;){
			
			//输入到第几个密码框，第几个密码框就显示高亮和光标（在输入框内有2个数字密码，第三个密码框要显示高亮和光标，之前的显示黑点后面的显示空白，输入和删除都一样）
				if(l === k){
					_this.eq(l).addClass("active");
					_this.eq(l).find('b').css('visibility','hidden');
					
				}else{
					_this.eq(l).removeClass("active");
					_this.eq(l).find('b').css('visibility', l < k ? 'visible' : 'hidden');
					
				}				
			
			if(k === 6){
				j = 5;
			}else{
				j = k;
			}
			$('#cardwrap').css('left',j*30+'px');
		
			}
		}else{
		//输入其他字符，直接清空
			var _val = this.value;
			this.value = _val.replace(/\D/g,'');
		}
	});	
}
	
	