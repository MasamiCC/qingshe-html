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
	    
			 
	     loadPage();
		})
	})
	
	$(document).on('click', '.mui-btn.mui-btn-blue', function() {
		debugger
	})
	//全部按钮被点击
	$(document).on('click', '.operacte_nav .all', function() {
		$('.operacte_nav .time').html('全部推广会员');
		//使收益滚动到顶部
	    mui('#pullrefresh').pullRefresh().scrollTo(0,0);
	    
	    time = '';
	    currentPage = 1;
        totalPage=10;
	    $('.count_section').empty();
        loadPage()
	})
	
	var time = new Date().Format('yyyyMM');
	var currentPage = 1,totalPage=10;
	
	//开启下拉加载
	mui.init({
		pullRefresh: {
			container: '#pullrefresh',
			
			up: {
				contentrefresh: '正在加载...',
				callback: loadPage, //下拉刷新函数
				auto:true
			}
		}
	});


	function loadPage(){
		if(currentPage > totalPage){
			$('.mui-pull-bottom-pocket .mui-pull').html('<div class="mui-pull-caption mui-pull-caption-refresh">没有更多数据</div>');
			return false;
		}	
		console.info(123)
		/* $.ajax({
            type: "post",
            url: "${ctx}/plus/getMySpreadMemberList",
            data: {
            	currentPage:currentPage,
            	time:time
        	 },
            dataType: "json",
            success: function(data){
            	  if(data.success){
            		  if(data.result.totalRecords == 0){
            			  $('.no_data').show()
            			  $('.num').html(data.result.totalRecords+'家')
            			  $('.mui-pull-bottom-pocket .mui-pull').html('<div class="mui-pull-caption mui-pull-caption-refresh"></div>');
            			  return ;
            		  }else{
            			  $('.no_data').hide()
            			  loadData(data.result.items);  
            		  }
            		  console.log('')
            		  currentPage++;
            		  totalPage = data.result.totalPages;
      	       }
            }
        }); */
	}
	
	function loadData(data){
		//获取html模板
		var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm'); //i g m是指分别用于指定区分大小写的匹配、全局匹配和多行匹配。
		var html;
		//遍历数据
		for (var i = 0; i < data.length ; i++) {
			mui('#pullrefresh').pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。
			//名称
			var name = data[i].be_promo_user_name;
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
		
	}
			
})


//定义一个转换时间格式的函数
var formatterDateTime = function(date){
	var date = new Date(date);
	var datetime = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
	return datetime;
}

Date.prototype.Format = function (fmt) { //author: meizz
	  var o = {
	    "M+": this.getMonth() + 1, //月份
	    "d+": this.getDate(), //日
	    "h+": this.getHours(), //小时
	    "m+": this.getMinutes(), //分
	    "s+": this.getSeconds(), //秒
	    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
	    "S": this.getMilliseconds() //毫秒
	  };
	  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	  for (var k in o)
	  if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	  return fmt;
}
