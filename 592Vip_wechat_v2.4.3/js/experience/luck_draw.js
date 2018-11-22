$(function(){
    //抽奖规则
    $('.rule_icon').click(function(){
       var html = document.getElementById("rule_modle").innerHTML;
       $('.container_nav').append(html);
    })

    //模拟一个json
    var json = [{"img":"../img/experience/experience_bg.png","createTime":1541490830000,"name":"10个黑钻","id":1,"type":"0","value":10.00},{"img":"1.jpg","createTime":1541553168000,"name":"28个黑钻","id":2,"type":"0","value":28.00},{"img":"1.jpg","createTime":1541553187000,"name":"58个黑钻","id":3,"type":"0","value":58.00},{"createTime":1541553210000,"name":"128个黑钻","id":4,"type":"0","value":128.00},{"createTime":1541553229000,"name":"88元现金","id":5,"type":"2","value":88.00},{"createTime":1541553244000,"name":"288元现金","id":6,"type":"2","value":288.00},{"createTime":1541553262000,"name":"轻奢点评霸王餐卡","id":7,"type":"1"},{"img":"../img/experience/experience_bg.png","createTime":1541553287000,"name":"iphoneXR一部","id":8,"type":"1"}];
    //绘制抽奖轮盘
    roulette(json);

	//轮盘抽奖
	//抽奖次数
	var num = 3;
	$('.pointer').click(function (){
		if(num <= 0){
			return false;
		}

		//定义一个随机数
		var item = 7;
		switch (item) {
			case 0:
				rotateFn(0, 340, json[0].name,json[0].img);
				break;
			case 1:
				rotateFn(1, 294, json[1].name,json[1].img);
				break;
			case 2:
				rotateFn(2, 249, json[2].name,json[2].img);
				break;
			case 3:
				rotateFn(3, 203, json[3].name,json[3].img);
				break;
			case 4:
				rotateFn(4, 158, json[4].name,json[4].img);
				break;
			case 5:
				rotateFn(5, 475, json[5].name,json[5].img);
				break;
			case 6:
				rotateFn(6, 429, json[6].name,json[6].img);
				break;
		    case 7:
				rotateFn(7, 383, json[7].name,json[7].img);
				break;
		}

	});

	//旋转函数
	var rotateFn = function (awards, angles, txt, img){
		$('.rotate').stopRotate();
		$('.rotate').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:3000,
			callback:function (){ //抽奖完成
				num = num - 1;
				$('.pointer .num').html(num);
				showModle(awards, txt, img);
			}
		})
	};

	//模态框出现函数
	var showModle = function(awards, txt, img){
		var html = document.getElementById("success_modle").innerHTML;
		var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
		var modleHtml = html.replace(reg, function(node, key) {
			return {
				'tips': txt,
				'img': img,
			}[key];
		});
		$('.container_nav').append(modleHtml);
	}

	//关闭弹框
    $('.container_nav').on('click','.modle_nav .close',function(){
        $(this).closest('.modle_nav').remove();
    })




    //中奖信息轮播
    var scrollUp = function(){
    	var $self = $(".luck_list_ul");
    	var num = $self.find("li").length;
    	//如果信息小于3个不进行轮播
    	if(num <=3){
    		return;
    	}
        var ulHeight = $self.height();
        var cloneHtml = $self.find("li").clone();
        var liHeight = $self.find("li").height();
        $self.append(cloneHtml);
        var scrollTop = 0;

        var myScroll = setInterval(function(){
            scrollToUp()
        },30);

        var scrollToUp = function(){
            if(scrollTop >= ulHeight + liHeight*(num-3)) {
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


//定义一个生成轮盘的函数
var roulette = function(data){
	var num = data.length; //数量
	var roateNum = 360 / num; //旋转角度
	var html = document.getElementById("rotate_base").innerHTML;
    var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
    var allHtml = '';
    //遍历json得到数据
	$.each(data, function(key,val) {
		var divRoate = 'transform: rotate(' + roateNum * key + 'deg)';
		var tilt = 'transform: rotate(' + roateNum + 'deg)';
		var divHtml = html.replace(reg, function(node, key) {
			return {
				'rotate': divRoate,
				'tilt': tilt,
				'name': val.name,
				'img': val.img,
			}[key];
		});
		allHtml += divHtml;
	});

	$('.draw_nav .rotate').html(allHtml);
}
