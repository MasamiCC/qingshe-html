//所有都加载完成
window.onload = function() {
	//数字逐渐上升
	$('.num_statistics_nav .data_num > span').rise({
		speed: 1,
	});

	//生成黑卡会员人数饼图
	//模拟一个黑卡会员的数据
	var memberData = [{
			name: '黑卡正常人数占比',
			value: 30000,
			bili: '65'
		},
		{
			name: '黑钻失效人数占比',
			value: 10000,
			bili: '45'
		},
	]
	var memberChart = echarts.init(document.getElementById('member_pie'));
	var memberOption = {
		color: ['#dfbd76', '#cbcac7'],
		legend: {
			type: 'scroll',
			orient: 'vertical',
			left: 'center',
			top: 'bottom',
			itemGap: 15,
			data: ['黑卡正常人数占比', '黑钻失效人数占比']
		},
		series: [{
			name: '黑卡会员人数占比',
			type: 'pie',
			radius: [0, '65%'],
			center: ['50%', '35%'],
			startAngle: 225,
			hoverOffset: 5,
			label: {
				normal: {
					position: 'inside',
					color: '#ffffff',
					borderColor: 'none',
					formatter: function(params) {
						var str = '';
						str += params.data.bili + '%' + '\n\n' + params.data.value + '人';
						return str;
					}
				},
			},
			data: memberData,
		}]
	}
	//生成饼图
	memberChart.setOption(memberOption);

	//生成各个趋势图

	//模拟初始的4条数据
	var tendencydata_1 = [{
			data: '2',
			time: 1539062326000
		},
		{
			data: '560',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '233',
			time: 1539062326000
		},
		{
			data: '5',
			time: 1539062326000
		},
		{
			data: '900',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '0',
			time: 1539062326000
		},
		{
			data: '23',
			time: 1539062326000
		},
	]

	//生成各个配置项
	var tendencyOption_1 = setTendencyOption(tendencydata_1, '家');
	var tendencyOption_2 = setTendencyOption(tendencydata_1,'￥');
	var tendencyOption_3 = setTendencyOption(tendencydata_1,'人');
	var tendencyOption_4 = setTendencyOption(tendencydata_1,'人');

	//得到各个配置项的echarts对象
	var tendencyChart_1 = echarts.init(document.getElementById('tendency_chart_1'));
	tendencyChart_1.setOption(tendencyOption_1);
	var tendencyChart_2 = echarts.init(document.getElementById('tendency_chart_2'));
	tendencyChart_2.setOption(tendencyOption_2);
	var tendencyChart_3 = echarts.init(document.getElementById('tendency_chart_3'));
	tendencyChart_3.setOption(tendencyOption_3);
	var tendencyChart_4 = echarts.init(document.getElementById('tendency_chart_4'));
	tendencyChart_4.setOption(tendencyOption_4);

	//窗口改变重构视图
	window.onresize = function() {
		tendencyChart_1.resize();
		tendencyChart_2.resize();
		tendencyChart_3.resize();
		tendencyChart_4.resize();
	}

	//定义时间控件
	$(".startTime").datetimepicker({
		language: 'zh-CN',
		weekStart: 1,
		todayBtn: 0,
		endDate: new Date(),
		autoclose: 1,
		minView: "month",
		format: 'yyyy-mm-dd',
		forceParse: 0,
		container: '.lay_body',
	})

	//定义时间控件
	$(".endTime").datetimepicker({
		language: 'zh-CN',
		weekStart: 1,
		endDate: new Date(),
		todayBtn: 0,
		autoclose: 1,
		minView: "month",
		format: 'yyyy-mm-dd',
		forceParse: 0,
		container: '.lay_body',
	})
	
	//点击日历小图标
	$(document).on('click','.time_area .time_icon',function(){
		$(this).prev().datetimepicker('show');
	})

	//当日期改变时，改变对应input的起止值
	$('.time_area .form-control').datetimepicker().on('changeDate', function(ev) {
		//判断当前改变的是什么时间
		if($(this).attr('date-part') == '0') { //改变了开始时间
			$(this).closest('.time_area').find('.endTime').datetimepicker('setStartDate', ev.date);
		} else if($(this).attr('date-part') == '1') { //改变了结束时间
			$(this).closest('.time_area').find('.startTime').datetimepicker('setEndDate', ev.date);
		}
	})

	//点击搜索按钮时
	$(document).on('click', '.time_search', function() {
		//先判断用户是否选择了起止时间
		if($(this).closest('.time_area').find('.startTime').val() == '' || $(this).closest('.time_area').find('.endTime').val() == '') {
			alert('请选择起止时间');
			return false;
		}
		//模拟几条新的数据
		var newData = [
		    {
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
			{
				data: '2',
				time: 1539062326000
			},
			{
				data: '560',
				time: 1539062326000
			},
		]
		
		var option;

		//清空当前按钮对应的画布
		switch($(this).attr('chart-num')) {
			case '1':
			    //清空画布
				tendencyChart_1.clear();
				option = setTimeOption(newData, '家');
				tendencyChart_1.setOption(option);
				break;
			case '2':
				tendencyChart_2.clear();
				option = setTimeOption(newData, '￥');
				tendencyChart_2.setOption(option);
				break;
			case '3':
				tendencyChart_3.clear();
				option = setTimeOption(newData, '人');
				tendencyChart_3.setOption(option);
				break;
			case '4':
				tendencyChart_4.clear();
				option = setTimeOption(newData, '人');
				tendencyChart_4.setOption(option);
				break;
		}
	})
}

//定义一个生成不同趋势图配置的函数
var setTendencyOption = function(data, type) {
	//判断上面显示的文字的类型
	var formatter = '';
	if(type == '￥') {
		formatter = '￥{c}'
	} else {
		formatter = '{c}' + type
	}

	//生成数据数组
	var dataList = createDataList(data);

	//生成时间数组
	var dateList = createDateTimeList(data);

	var tendencyOption = {
		tooltip: {
			trigger: 'axis',
			showContent: false,
		},
		dataZoom: [{
				show: false,
				realtime: true,
				start: 80,
				end: 100
			},
			{
				type: 'inside',
				realtime: true,
				start: 90,
				end: 100
			}
		],
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: dateList
		},
		yAxis: {
			show: false,
		},
		grid: {
			left: 20,
		},
		series: [{
			data: dataList,
			type: 'line',
			symbolSize: 5,
			smooth: true,
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: formatter
				}
			},
			itemStyle: {
				color: '#e1c280'
			},
			lineStyle: {
				color: '#e1c280',
				width: 1
			},
			areaStyle: {
				color: 'rgba(225, 194, 128, 0.2)'
			}
		}]
	}

	return tendencyOption;
};

//生成连续趋势图的函数
var setTimeOption = function(data, type) {
	//判断上面显示的文字的类型
	var formatter = '';
	if(type == '￥') {
		formatter = '￥{c}'
	} else {
		formatter = '{c}' + type
	}

	//生成数据数组
	var dataList = createDataList(data);

	//生成时间数组
	var dateList = createDateTimeList(data);
	var tendencyOption = {
		tooltip: {
			trigger: 'axis',
			showContent: true,
			position: function (pt) {
	            return [pt[0], '10%'];
	        },
	        formatter: function (name) {
			    return name[0].name + '<br/>' + name[0].value + type;
			}
		},
		dataZoom: [{
				show: false,
				realtime: true,
				start: 0,
				end: 100
			},
			{
				type: 'inside',
				realtime: true,
				start: 0,
				end: 100
			}
		],
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: dateList,
		},
		yAxis: {
			show: false,
		},
		grid: {
			left: 20,
		},
		series: [{
			data: dataList,
			type: 'line',
			symbolSize: 0,
			smooth: true,
			label: {
				normal: {
					show: false,
					position: 'top',
					formatter: formatter
				}
			},
			itemStyle: {
				color: '#e1c280'
			},
			lineStyle: {
				color: '#e1c280',
				width: 1
			},
			areaStyle: {
				color: 'rgba(225, 194, 128, 0.2)'
			}
		}]
	}
	
	return tendencyOption;
}

//生成时间数组
var createDateTimeList = function(data) {
	var dateList = [];
	var date;
	var time = '';
	
	//进行一个时间判断事件数组是否跨年
	var start = data[0].time;
	var end = data[data.length-1].time;
	if(new Date(start).getFullYear() == new Date(end).getFullYear()){ //未跨年
		for(var i = 0; i < data.length; i++) {
			date = new Date(data[i].time);
			time = (date.getMonth() + 1) + '-' + date.getDate();
			dateList.push(time);
		}
	}else{ //跨年
		for(var i = 0; i<data.length;i++){
			date = new Date(data[i].time);
			time = date.getFullYear() + '/' + (date.getMonth()+1)+ '/' +  date.getDate();
			dateList.push(time);
		}
	}
	return dateList;
}

//生成数据数组
var createDataList = function(data) {
	var dataList = [];
	for(var i = 0; i < data.length; i++) {
		dataList.push(data[i].data);
	}
	return dataList;
}