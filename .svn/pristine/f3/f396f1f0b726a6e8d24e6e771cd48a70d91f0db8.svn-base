var item = 1;
var roate = (function(item){
    var num = 3;
    //模态框出现函数
    var showModle = function(awards,txt){
        var html = document.getElementById("success_modle").innerHTML;
        var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
        var imgSrc;
        if(awards <= 3){
            imgSrc = '../img/experience/tips_blackcard_img.png'
        }
        var modleHtml = html.replace(reg, function(node, key) {
            return {
                'tips': txt,
                'img': imgSrc,
            }[key];
        });
        $('body').append(modleHtml);
    }
    var rotateFn = function(awards, angles, txt){
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
    return function(){
        if(num > 0){
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
        }else{
            alert('没有次数了')
        }
    }
})(item);

$(function(){
    //抽奖规则
    $('.rule_icon').click(function(){
       var html = document.getElementById("rule_modle").innerHTML;
       $('body').append(html);
    })

    //模拟一个json
    var json = [{"img":"../img/experience/experience_bg.png","createTime":1541490830000,"name":"10个黑钻","id":1,"type":"0","value":10.00},{"img":"1.jpg","createTime":1541553168000,"name":"28个黑钻","id":2,"type":"0","value":28.00},{"img":"1.jpg","createTime":1541553187000,"name":"58个黑钻","id":3,"type":"0","value":58.00},{"createTime":1541553210000,"name":"128个黑钻","id":4,"type":"0","value":128.00},{"createTime":1541553229000,"name":"88元现金","id":5,"type":"2","value":88.00},{"createTime":1541553244000,"name":"288元现金","id":6,"type":"2","value":288.00},{"createTime":1541553262000,"name":"轻奢点评霸王餐卡","id":7,"type":"1"},{"img":"../img/experience/experience_bg.png","createTime":1541553287000,"name":"iphoneXR一部","id":8,"type":"1"}];
    //绘制抽奖轮盘
    roulette(json);

	//轮盘抽奖
	//抽奖次数
	$('.pointer').click(function(){
       roate();
    });


	//关闭弹框
	$('body').on('click','.modle_nav .close', function(){
		$(this).closest('.modle_nav').remove();
	})

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
