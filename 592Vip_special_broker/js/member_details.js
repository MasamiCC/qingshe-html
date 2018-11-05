window.onload = function () {
	//整数逐渐增加
	$('.active_area .data_num .int').rise({
		speed: 1
	})
	
	//小数逐渐增加
	$('.active_area .data_num .float').rise({
		speed: 1,
		decimalNum: true,//数据结构为小数
	})
	
}
