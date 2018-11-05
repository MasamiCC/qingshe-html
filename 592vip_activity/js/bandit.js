$(function(){
	var isBegin = false;
	//定义slot函数
	jQuery.fn.extend({
	    slots: function(b, a, d) {
	        if (isBegin) {
	            return false
	        }
	        isBegin = true;
	        var c = (a + "").split("");
	        $(this).css("backgroundPositionY", 0);
	        var arr = [41.40,39.35,37.32,35.26,33.19,31.16,29.12,27.08,25.01,22.94]
	        $(this).each(function(e) {
	            var f = $(this);
	            setTimeout(function() {
	                f.animate({
	                    backgroundPositionY: arr[c[e]] + 'rem'
	                },
	                {
	                    duration: 4000,
	                    // easing: "easeInOutCirc",
	                    complete: function() {
	                        if (e == 2) {
	                            isBegin = false;
	                            d()
	                        }
	                    }
	                })
	            },
	            e * 300)
	        })
	    }
	});
	
	//点击抽奖按钮
	$('.bandit_area').on('click','.btn',function(){
		//判断手机还是验证码未输入
		 if(true){
		 	$('.modle_bg1').show();
		 	closeModle();
		 	return false;
		 }
		
		var u = 40.6; //盒子的高度
		var random='012';//模拟一个随机数
		var _this=$(this);
		var type=$(this).attr('data-type');
		if(!_this.hasClass('active')){
			_this.addClass('active');
			$(".bandit_show dd").slots(u,random,function () {

				//取整数字
				var num = parseInt(random);
				//抽奖成功
				$('.modle_bg3').show();
			});
		}
	});
	
	
	//关闭按钮
	$('.modle_bg').on('click','.close_img',function(){
		$(this).closest('.modle_bg').hide();
	});
	
})


//发送验证码函数
var countdown = 60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value = "重新发送";
        countdown = 60;
        return false;
    } else {
        val.setAttribute("disabled", true);
        val.value = countdown + "s";
        countdown--;
    }
    setTimeout(function () {
        settime(val);
    }, 1000);
}


//延迟关闭弹框
var closeModle = function(){
	setTimeout(function(){
		$('.modle_bg').hide()
	},3000)
}

