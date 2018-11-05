$(function() {
	$(".btn_a").click(function() {
		$(".card_a").show();
		$("body").css({
			"background": "rgba(0,0,0,0.1)"
		});
		$(".index").show();
	});
	$(".close_a").click(function() {
		$(".card_a").hide();
		$(".index").hide();
	})
	$(".btn_b").click(function() {
		$(".card_b").show();
		$("body").css({
			"background": "rgba(0,0,0,0.1)"
		});
		$(".index").show();
	});
	$(".close_b").click(function() {
		$(".card_b").hide();
		$(".index").hide();
	})
	$('.sub_btn').click(function() {
		var haschoose = $('.sub_btn').hasClass('choose');
		if(haschoose) {
			console.log('repeat');
			return false;
		}
		$(this).addClass('choose');
		console.log('pass')
	})

	//周期比较
	//调用方法
	$(".compare_1").progress({
		percent: [8, 1],
		autoPlay: true,
		width: 1,
	});

	$(".compare_2").progress({
		percent: [30994.5, 14247.9],
		autoPlay: true,
		show: '黑钻',
		width: .45
	});

	$(".compare_3").progress({
		percent: [1, 4],
		autoPlay: true,
		animate: 'pillar' //以柱形运动
	});

	//模态框显示
	mui(document).on('tap', '.page_btn .quiet', function() {
		$('.prompt_modle').fadeIn();
	})

	//模态框关闭
	mui(document).on('tap', '.prompt_modle .close-box', function() {
		$('.prompt_modle').fadeOut();
	})

	mui(document).on('tap', '.prompt_modle .btn.active', function() {
		$('.prompt_modle').fadeOut();
	})

	//义无反顾的选择A
	mui(document).on('tap', '.prompt_modle .btn.quiet', function() {
		$('.prompt_modle').fadeOut();
		$('.popover_bg').show();
		$('.prompt_noRecommend').animate({
			'top': '1rem'
		})
	})

	//选择路线B$
	mui(document).on('tap', '.page_btn .btn.recommend', function() {
		$('.popover_bg').show();
		$('.prompt_recommend').animate({
			'top': '1rem'
		})
	})

	//底部弹框关闭
	mui(document).on('tap', '.cus_popover .close-box', function() {
		$('.popover_bg').hide();
		$(this).closest('.cus_popover').animate({
			'top': '100%'
		})

	})

})

$.fn.progress = function(options) { //定义插件方法名
	options = $.extend({
		//定义一个对象，设置默认值

		//比较数组（默认为[0,0]）
		percent: [0, 0],

		//速度（默认为1）
		speed: 1,

		//滚动条是否自己运动（默认为false）
		autoPlay: false,

		//回调函数（默认为null）
		callBack: $.noop,

		//展示的内容
		show: '',

		//bar的长度
		width: 1,

		animate: '',

	}, options);

	//进度条百分比
	var percent = options.percent;

	//进度条速度
	var speed = options.speed;

	//进度条自动滚动
	var autoPlay = options.autoPlay;

	//回调函数
	var callBack = options.callBack;

	//进度条外部包裹层
	var $_progeressBar = $(this);
	//总宽度
	var totalWidth = $(this).find('.compare_bar').outerWidth() * options.width;
	//总高度
	var totalHeight = $(this).height();

	//对象A
	var $_compareA = $(this).find('.compare_a');
	//对象A的进度条
	var $_progressA = $_compareA.find('.progress');
	//对象A的展示数据
	var $_textA = $_compareA.find('.text');

	//对象B
	var $_compareB = $(this).find('.compare_b');
	//对象B的进度条
	var $_progressB = $_compareB.find('.progress');
	//对象B的展示数据
	var $_textB = $_compareB.find('.text');
	
	//发现虚线对象
	var $_dashed = $_progeressBar.find('.dashed');

	//定义ab两个百分比
	var percentA;
	var percentB;

	//计算百分比
	if(options.percent[0] < options.percent[1]) {
		percentA = 100 * (options.percent[0] / options.percent[1]);
		percentB = 100;
	} else if(options.percent[0] > options.percent[1]) {
		percentA = 100;
		percentB = 100 * (options.percent[1] / options.percent[0]);
	}

	//定义一个运动函数
	if(options.animate === "pillar") {
		var texts=['路径A收益','路径B收益'];
		if(percentA>percentB){
			var aHeight = totalHeight*percentA/100;
		    var bHeight = (aHeight-20)*percentB/100+20;
		}else{
			var bHeight = totalHeight*percentB/100;
			var aHeight = (bHeight-20)*percentA/100+20;
		}
		$_compareA.css('top',totalHeight+'px');
		$_compareA.css('height',aHeight+'px');
		$_compareB.css('height',bHeight+'px');
		$_compareB.css('top',totalHeight+'px');
		
		
		var animate = function(compare, percent, text, num,height) {
			var nowPercent = 0;
			text.html(num);
			var showHeight = height;
			var bar = setInterval(function() {
				if(nowPercent < showHeight) {
					nowPercent = nowPercent + speed;
					var percentNum = bHeight-nowPercent;
					compare.css("top", percentNum + 'px');
				} else {
					//进度条读满后，停止
					clearInterval(bar);
				}
			}, 15);
		}
		
		//a运动
		animate($_compareA, percentA, $_textA, texts[0],aHeight);
		//b运动
		animate($_compareB, percentB, $_textB, texts[1],bHeight);
		
		$_dashed.css('bottom',aHeight-20+'px');

	} else {
		var texts=[options.percent[0] + options.show,options.percent[1] + options.show];
		var animate = function(compare, percent, text, num) {
			var nowPercent = 0;
			text.html(num)
			var bar = setInterval(function() {
				if(nowPercent < percent) {
					nowPercent = nowPercent + speed;
					compare.css("width", nowPercent / 100 * totalWidth);
				} else {
					//进度条读满后，停止
					clearInterval(bar);
				}
			}, 20);
		}
		
		//a运动
		animate($_progressA, percentA, $_textA, texts[0]);
		//b运动
		animate($_progressB, percentB, $_textB, texts[1]);
	}
	

	//回调函数
	if(callBack) {
		callBack();
	}

	return this;
}