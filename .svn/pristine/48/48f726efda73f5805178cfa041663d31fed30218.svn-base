$(function(){	
	//调用分页方法
	$('.paging_ul').paging({
		url: 'http://www.592vip.top/api/news/getNewsQsdp',
		pageSize: 5,
		list: '.newsList_ul',
		template: 'news',
	})

})

//定义一个转换时间格式的函数
var formatterDateTime = function(date){
	var date = new Date(date);
	var datetime = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
	return datetime;
}
