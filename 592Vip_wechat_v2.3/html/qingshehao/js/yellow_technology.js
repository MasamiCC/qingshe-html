function Cookie(key, value) {
	this.key = key;
	if(value != null) {
		this.value = escape(value);
	}
	this.expiresTime = null;
	this.domain = null;
	this.path = "/";
	this.secure = null;
}
Cookie.prototype.setValue = function(value) {
	this.value = escape(value);
}
Cookie.prototype.getValue = function() {
	return(this.value);
}
Cookie.prototype.setExpiresTime = function(time) {
	this.expiresTime = time;
}
Cookie.prototype.getExpiresTime = function() {
	return this.expiresTime;
}
Cookie.prototype.setDomain = function(domain) {
	this.domain = domain;
}
Cookie.prototype.getDomain = function() {
	return this.domain;
}
Cookie.prototype.setPath = function(path) {
	this.path = path;
}
Cookie.prototype.getPath = function() {
	return this.path;
}
Cookie.prototype.Write = function(v) {
	if(v != null) {
		this.setValue(v);
	}
	var ck = this.key + "=" + this.value;
	if(this.expiresTime != null) {
		try {
			ck += ";expires=" + this.expiresTime.toUTCString();;
		} catch(err) {
			alert("expiresTime参数错误");
		}
	}
	if(this.domain != null) {
		ck += ";domain=" + this.domain;
	}
	if(this.path != null) {
		ck += ";path=" + this.path;
	}
	if(this.secure != null) {
		ck += ";secure";
	}
	document.cookie = ck;
}
Cookie.prototype.Read = function() {
	try {
		var cks = document.cookie.split("; ");
		var i = 0;
		for(i = 0; i < cks.length; i++) {
			var ck = cks[i];
			var fields = ck.split("=");
			if(fields[0] == this.key) {
				this.value = fields[1];
				return(this.value);
			}
		}
		return null;
	} catch(err) {
		alert("cookie读取错误");
		return null;
	}
}

var ck = new Cookie("HasLoaded"); //每个页面的new Cookie名HasLoaded不能相同
if(ck.Read() == null) { //未加载过，Cookie内容为空
	//  alert("首次打开页面");

	//设置保存时间
	var dd = new Date();
	dd = new Date(dd.getYear() + 1900, dd.getMonth(), dd.getDate());
	dd.setDate(dd.getDate() + 365);
	ck.setExpiresTime(dd);

	ck.Write("true"); //设置Cookie。只要IE不关闭，Cookie就一直存在
} else { //Cookie存在，表示页面是被刷新的
	//  alert("页面刷新");
	var isAniActive = $('.animationline').hasClass('animationactive');
	if(isAniActive) {
//		$('.animationline').removeClass('animationactive');
		$('.animationline').hide();
		$('.fadecon6').addClass('opc');
		var hasclass = $('.fadecon6').hasClass('opc');
		$('.fadecon6').show();
		if(hasclass) {
			$('.fadecon6').css('opacity', '1')
		}
	}
}

/*进度条插件*/
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
		var texts = ['路径A收益', '路径B收益'];
		if(percentA > percentB) {
			var aHeight = totalHeight * percentA / 100;
			var bHeight = (aHeight - 20) * percentB / 100 + 20;
		} else {
			var bHeight = totalHeight * percentB / 100;
			var aHeight = (bHeight - 20) * percentA / 100 + 20;
		}
		$_compareA.css('top', totalHeight + 'px');
		$_compareA.css('height', aHeight + 'px');
		$_compareB.css('height', bHeight + 'px');
		$_compareB.css('top', totalHeight + 'px');

		var animate = function(compare, percent, text, num, height) {
			var nowPercent = 0;
			text.html(num);
			var showHeight = height;
			var bar = setInterval(function() {
				if(nowPercent < showHeight) {
					nowPercent = nowPercent + speed;
					var percentNum = bHeight - nowPercent;
					compare.css("top", percentNum + 'px');
				} else {
					//进度条读满后，停止
					clearInterval(bar);
				}
			}, 15);
		}

		//a运动
		animate($_compareA, percentA, $_textA, texts[0], aHeight);
		//b运动
		animate($_compareB, percentB, $_textB, texts[1], bHeight);

		$_dashed.css('bottom', aHeight - 20 + 'px');

	} else {
		var texts = [options.percent[0] + options.show, options.percent[1] + options.show];
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