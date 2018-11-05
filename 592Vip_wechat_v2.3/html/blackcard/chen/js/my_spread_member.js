$(function(){
	
	//日历被选择
	$(document).on('click', '.date_pick', function() {
		//时间选择器
		var picker = new mui.DtPicker({
			type: 'month',
			beginDate: new Date(2014,5),//设置开始日期 （如果能查的话，最好从用户第一次消费日期开始）
			endDate: new Date(), //结束时间为今天
			labels: ["年", "月"],
		});
		picker.show(function(rs){
			var text = rs.y.text+'年'+rs.m.text+'月';
			$('.operacte_nav .time').html(text);
			//使收益滚动到顶部
	    mui('#pullrefresh').pullRefresh().scrollTo(0,0);
	    $('.count_section').empty();
	    /* 
			 * 返回 false 可以阻止选择框的关闭
			 * return false;
			 */
			 picker.dispose();
			 picker = null;
	     pullupRefresh();
		})
		
	})
	
	//全部按钮被点击
	$(document).on('click', '.operacte_nav .all', function() {
		$('.operacte_nav .time').html('全部推广会员');
		//使收益滚动到顶部
	    mui('#pullrefresh').pullRefresh().scrollTo(0,0);
	})
	
	var time = 136148773222;
	//模拟几条数据
	var data =  [
	{name:'张宇',create_time:time},
	{name:'张宇',create_time:time},
	{name:'张宇',create_time:time},
	{name:'张宇',create_time:time},
	];
	
	//开启下拉加载
	mui.init({
		pullRefresh: {
			container: '#pullrefresh',
			down: {
				callback: pulldownRefresh
			},
			up: {
				contentrefresh: '正在加载...',
				callback: pullupRefresh, //下拉刷新函数
				auto:true
			}
		}
	});
	
	//上拉加载
	function pulldownRefresh(){
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}
	
	//下拉刷新函数
	function pullupRefresh() {
		console.info(111);
		setTimeout(function() {
			//获取html模板
			var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
			var html;
			//遍历数据
			for (var i = 0; i < data.length ; i++) {
				mui('#pullrefresh').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。
				//名称
				var name = data[i].name;
				//时间
				var create_time = formatterDateTime(data[i].create_time);
				html = document.getElementById("member_templet").innerHTML;
				var source = html.replace(reg, function(node, key) {
					return {  
						'name': name,
						'time': create_time
					}[key];
				});
				
				$('.count_section').append(source);
			}
		},1500);
	}
		
})


//定义一个转换时间格式的函数
var formatterDateTime = function(date){
	var date = new Date(date);
	var datetime = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
	return datetime;
}