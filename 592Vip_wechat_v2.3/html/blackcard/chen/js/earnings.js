
$(function(){
	
	var time = 1533861774000;
	var time_2 = 136148773222;
	
	//模拟的数据
	var data =  [
	{shop_name:'一家龙虾店',create_time:time,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time_2,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time_2,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time_2,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time_2,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time_2,value:'1000',income_shop:'100'},
	{shop_name:'一家龙虾店',create_time:time_2,value:'1000',income_shop:'100'},
	];


	
	//定义一个用户选择的日期种类
	var time_type = 2;
	
	
	//开启下拉加载
	mui.init({
		pullRefresh: {
			container: '#pullrefresh',
			up: {
				contentrefresh: '正在加载...',
				callback: pullupRefresh, //下拉时间
				auto:true
			}
		}
	});
	
	var count = 0;
	
	//定义一个标准时间
	var standard_time = '';
	
	//模拟一个消费的数据
	var consume = false;
	
	function pullupRefresh() {

		setTimeout(function() {
			mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
			//获取html模板
			var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
			var html;
			for (var i = 0; i < data.length ; i++) {
				//店铺名称
				var shop_name = data[i].shop_name;
				//收益时间
				var create_time = formatterDateTime(data[i].create_time,time_type);
				//金额
				var value = data[i].value;
				//获得收益
				var income_shop = data[i].income_shop;
				
				//判断是否为消费类模块
				if(consume){
					//判断是否等于上一段的时间
					if(create_time === standard_time){
						html = document.getElementById("consume_notime").innerHTML;
						var source = html.replace(reg, function(node, key) {  
							return {  
								'create_time': create_time,
								'income_shop': income_shop
							}[key];  
						});
					}else{
						html = document.getElementById("consume").innerHTML;
						var source = html.replace(reg, function(node, key) {
							return {  
								'create_time': create_time,
								'income_shop': income_shop
							}[key];
						});
						standard_time = create_time
					}
					consume = !consume
				}else{
					//判断是否等于上一段的时间
					if(create_time === standard_time){
						html = document.getElementById("temp_notime").innerHTML;
						var source = html.replace(reg, function(node, key) {  
							return {  
								'create_time': create_time,
								'shop_name': shop_name,
								'value': value,
								'income_shop': income_shop
							}[key];  
						});
					}else{
						html = document.getElementById("temp").innerHTML;
						var source = html.replace(reg, function(node, key) {
							return {  
								'create_time': create_time,
								'shop_name': shop_name,
								'value': value,
								'income_shop': income_shop
							}[key];
						});
						standard_time = create_time
					}
					//动态改变下consume
					consume = !consume
				}
				      
				$('.count_section').append(source);
			}

			//假定一个一次刷新就需要显示没有更多数据的实例
			if(true){
				$('.mui-pull-bottom-pocket').addClass('mui-visibility');
				$('.mui-pull').html('<div class="mui-pull-caption mui-pull-caption-nomore">没有更多数据了</div>');
			}
		}, 1500);
	}

	
	//定义一个模态框阴影
	var modle_bg = $("<div class='modle_bg'></div>");
	
//	//点击规则关闭按钮
//	 mui().on('tap', '.rule_modle .close', function() {
//	 	event.stopPropagation(); 
//	 	$('.modle_bg').remove();
//	 	$(this).closest('.modle_nav').animate({
//	 		'top': '100%'
//	 	})
//	 })	
	
	
//	 //点击规则
//	 mui('body').on('tap', '.sg_head_regular', function() {
//	 	$('body').append(modle_bg);
//	 	$('.rule_modle').animate({
//	 		'top': '3rem'
//	 	})
//	 })	


	//刚进入页面做一个判断，没有银行卡则显示去绑定
	if(true){
		$('body').append(modle_bg);
		$('.go_binding_modle').show();

		//点击收益关闭按钮
		$(document).on('click','.go_binding_modle .close1', function(event) {
			event.stopPropagation(); 
			$('.modle_bg').remove();
			$('.go_binding_modle').hide();
		})

		//点击查看详情
		$(document).on('click', '.check_spread', function(event) {
			$('body').append(modle_bg);
			$('.cash_modle.no_cash').animate({
				'bottom': '0'
			})
			return false;
		})
	}
	
	//点击收益关闭按钮
	$(document).on('click','.cash_modle .close', function(event) {
		event.stopPropagation(); 
		$('.modle_bg').remove();
		$(this).closest('.modle_nav').animate({
			'bottom': '-100%'
		})
	})
	
	//模拟一个未绑定的数据
	var flag = true;
	
	//点击收益
	$(document).on('click', '.cash', function() {
		$('body').append(modle_bg);
		//判断是否绑定
		if(flag){
			$('.cash_modle.cash').animate({
				'bottom': '0'
			})
		}else{
			$('.cash_modle.no_cash').animate({
				'bottom': '0'
			})
		}
	})
	
	//定义一个默认的时间
    var chooseDate = new Date().toISOString().slice(0,10)+' 2'; //定义一个默认的时间（默认为今天）
	
	$(document).on('click', '.date_pick', function() {

		//判断是否需要新建一个组件
		if($('.mui-dtpicker').length == 0){
			var picker = new mui.DtPicker({
				type: "hour",
				beginDate: new Date(2010, 01, 01),//设置开始日期 （如果能查的话，最好从用户第一次消费日期开始）
				endDate: new Date(), //结束时间为今天
				customData: {
					h: [
					{ value: '0', text: '按年' },
					{ value: '1', text: '按月' },
					{ value: '2', text: '按日' },
					] 
				},
				labels: ["年", "月", "日", "分段"],
			});
			picker.setSelectedValue(chooseDate);
			picker.show(function(rs){
			var text;
			chooseDate = rs.value;
			//判断用户是按年，按月，按日
			if(rs.h.value === '0'){
				text = rs.y.text+'年';
				//改变日期类型
				time_type = 0;
			}else if(rs.h.value === '1'){
				text = rs.y.text+'年'+rs.m.text+'月';
				time_type = 1;
			}else if (rs.h.value === '2'){
				text = rs.y.text+'年'+rs.m.text+'月'+rs.d.text+'日';
				time_type = 2;
			}

			
			$('.share_foot_title .time').html(text);


			//使收益滚动到顶部
			mui('#pullrefresh').pullRefresh().scrollTo(0,0);
			
			/* 
			 * 返回 false 可以阻止选择框的关闭
			 * return false;
			 */
			 picker.dispose();
			 picker = null;
			})
		}else{ //如果日期组件已存在
			$('.mui-dtpicker').addClass('mui-active');
		}
		return false;
	})
})

//定义一个转换时间格式的函数
var formatterDateTime = function(date,type){
	var date = new Date(date);
	var datetime = ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0"
			+ (date.getMonth() + 1))+'-'+(date.getDate() < 10 ? "0" + date.getDate() : date
			.getDate());
	return datetime;
}


