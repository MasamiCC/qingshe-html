;(function($, window, document, undefined) {
	//定义一个构造函数
	var Rise = function(ele,opt) {
		this.list = [];
		this.numList = [];
		this.initialNum = 0;
	    //默认数值
		this.defaults = {			
			//速度
			'speed': '1000',
			'decimalNum': false,
		},
		this.options = $.extend({}, this.defaults, opt)
	}
	//新增方法
	Rise.prototype = {
		rise:function(key,ele,num){
			var that = this;
			var interval = setInterval(function(){
				that.numList[key] = that.numList[key] + 1;
				if(that.numList[key] <= num){
					ele.html(that.numList[key]);
				}else{
					clearInterval(interval)
				}
			}, that.options.speed);
		},
		//新增数据带有小数
		riseDecimal:function(key,ele,num,addNum){
			var that = this;
			var interval = setInterval(function(){
				var numDecimal = parseFloat(that.numList[key]) + addNum;
				that.numList[key] = numDecimal.toFixed(2);
				if(that.numList[key] < parseFloat(num)){
					ele.html(that.numList[key]);
				}else{
					ele.html(num);
					clearInterval(interval)
				}
			}, that.options.speed);
		}
	}
	
	//数字逐渐上升
	$.fn.rise = function(options) {
		//创建rise的实体
		var rise = new Rise(this, options);
		rise.list = $($(this).selector);
		//遍历需要逐渐增加的对象
		$.each(rise.list, function(key,val) {
			//判断是否为小数类型
			if(rise.options.decimalNum){
				rise.numList.push(0.00);
				var num = parseFloat($(val).html()).toFixed(2);
				var addNum = num /1000; //增加的数字
				//保证新增加的数字至少大于1.11
				if(addNum < 1.11){
					addNum = 1.11;
				}
				$(val).html(0.00);
				rise.riseDecimal(key,$(val),num,addNum);
			}else{
				rise.numList.push(0);
				var num = parseInt($(val).html());
				$(val).html(0);
				rise.rise(key,$(val),num);
			}
		});
	}
})(jQuery, window, document);