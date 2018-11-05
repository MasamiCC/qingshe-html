$(function(){
    //抽奖规则
    $('.rule_icon').click(function(){
       var html = document.getElementById("rule_modle").innerHTML;
       $('body').append(html);
    })


	//轮盘抽奖
	//抽奖次数
	var num = 3;
	$('.pointer').click(function (){
		if(num <= 0){
			return false;
		}

		//定义一个随机数
		var item = 0;
		switch (item) {
			case 0:
				rotateFn(0, 383, '获得10个黑钻');
				break;
			case 1:
				rotateFn(1, 203, '获得28个黑钻');
				break;
			case 2:
				rotateFn(2, 294, '获得58个黑钻');
				break;
			case 3:
				rotateFn(3, 475, '获得128个黑钻');
				break;
			case 4:
				rotateFn(4, 158, '获得88元现金');
				break;
			case 5:
				rotateFn(5, 249, '获得288元现金');
				break;
			case 6:
				rotateFn(6, 429, '获得轻奢点评霸王餐卡');
				break;
		    case 7:
				rotateFn(7, 340, '获得iphoneXR一部');
				break;
		}

	});

	//旋转函数
	var rotateFn = function (awards, angles, txt){
		$('.rotate').stopRotate();
		$('.rotate').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:3000,
			callback:function (){ //抽奖完成
				num = num - 1;
				$('.pointer .num').html(num);
				showModle(awards,txt);
			}
		})
	};

	//模态框出现函数
	var showModle = function(awards,txt){
		var html = document.getElementById("success_modle").innerHTML;
		var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
		var imgSrc;
		if(awards <= 3){
			imgSrc = '../static/experience/img/tips_blackcard_img.png'
		}
		var modleHtml = html.replace(reg, function(node, key) {
			return {
				'tips': txt,
				'img': imgSrc,
			}[key];
		});
		$('body').append(modleHtml);
	}

	//关闭弹框
	$('body').on('click','.modle_nav .close', function(){
		$(this).closest('.modle_nav').remove();
	})





    //中奖信息轮播
    var scrollUp = function(){
        var $self = $(".luck_list_ul");
        var ulHeight = $self.height();
        var cloneHtml = $self.find("li").clone();
        var liHeight = $self.find("li").height();
        $self.append(cloneHtml);
        var scrollTop = 0;

        var myScroll = setInterval(function(){
            scrollToUp()
        },30);

        var scrollToUp = function(){
            if(scrollTop >= ulHeight + liHeight) {
                scrollTop = 0;
                $self.scrollTop(0);
            }else{
                scrollTop ++;
                $self.scrollTop(scrollTop);
            }
        }
    }
    scrollUp();
})
