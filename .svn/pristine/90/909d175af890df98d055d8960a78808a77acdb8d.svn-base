
function loadPay(){
	var html='<div class="ftc_wzsf" style="display: none;">'
			+  '<div class="srzfmm_box">'
			+    '<div class="qsrzfmm_bt clear_wl"> <img src="../image/xx_03.jpg" class="tx close fl"> <span class="fl">请输入支付密码</span> </div>'
			+    '<div class="zfmmxx_shop">'
			+      '<div class="mz">楚楚街</div>'
			+      '<div class="wxzf_price">￥11.90</div>'
			+    '</div>'
			+    '<ul class="mm_box">'
			+      '<li></li>'
			+      '<li></li>'
			+      '<li></li>'
			+      '<li></li>'
			+      '<li></li>'
			+      '<li></li>'
			+    '</ul>'
			+  '</div>'
			+  '<div class="numb_box">'
			+    '<div class="xiaq_tb"> <img src="../image/jftc_14.jpg" height="10"> </div>'
			+    '<ul class="nub_ggg">'
			+      '<li><a href="javascript:void(0);">1</a></li>'
			+      '<li><a href="javascript:void(0);" class="zj_x">2</a></li>'
			+      '<li><a href="javascript:void(0);">3</a></li>'
			+      '<li><a href="javascript:void(0);">4</a></li>'
			+      '<li><a href="javascript:void(0);" class="zj_x">5</a></li>'
			+      '<li><a href="javascript:void(0);">6</a></li>'
			+      '<li><a href="javascript:void(0);">7</a></li>'
			+      '<li><a href="javascript:void(0);" class="zj_x">8</a></li>'
			+      '<li><a href="javascript:void(0);">9</a></li>'
			+      '<li><span></span></li>'
			+      '<li><a href="javascript:void(0);" class="zj_x">0</a></li>'
			+      '<li><span class="del"> <img src="../image/jftc_18.jpg"></span></li>'
			+    '</ul>'
			+  '</div>'
			+  '<div class="hbbj"></div>'
			+'</div>'
	$('body').append(html);
	//关闭浮动
	$(".close").click(function(){
		$(".ftc_wzsf").hide();
		});
		//数字显示隐藏
		$(".xiaq_tb").click(function(){
		$(".numb_box").slideUp(500);
		});
		$(".mm_box").click(function(){
		$(".numb_box").slideDown(500);
		});
		//----
		var i = 0;
		$(".nub_ggg li a").click(function(){
			i++
			if(i<6){
				$(".mm_box li").eq(i-1).addClass("mmdd");
				$(".mm_box li").eq(i-1).attr({
					'data-num':$(this).html(),
				})
				}else{
					$(".mm_box li").eq(i-1).addClass("mmdd"); 
					$(".mm_box li").eq(i-1).attr({
						'data-num':$(this).html(),
					})
					var res='';
					setTimeout(function(){
						mui.toast('验证操作')
						$(".mm_box li.mmdd").each(function(){
							res+=$(this).attr('data-num')
						})
						console.log(res)
					},500);
					//window.document.location="cg.html"
			 } 
		});
		
		$(".nub_ggg li .del").click(function(){
			
			if(i>0){
				i--
				$(".mm_box li").eq(i).removeClass("mmdd").removeAttr('data-num');
				i==0;
				}
			
			
			 
		});
}
