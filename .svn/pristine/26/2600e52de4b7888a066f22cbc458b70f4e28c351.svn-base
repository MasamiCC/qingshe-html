var orders={};
orders.orderLists='';
orders.getOrders=function(type,page){
	this.orderLists=[
		{
			id:1,
			time:'01-12 12:00',
			img:'../imgs/luxury_detail_logo.png',
			shopName:'江南厨房1',
			amount:'12.80',
			order_status:'订单已取消',
			coutDown:90,
		},
		{
			id:2,
			time:'01-12 12:00',
			img:'../imgs/luxury_detail_logo.png',
			shopName:'江南厨房2',
			amount:'56.80',
			order_status:'订单已付款',
			coutDown:10,
		}
	]
	orders.preLoadOrders(type,page)
};
orders.preLoadOrders=function(type){
	var lists=this.orderLists;
	for (var i in lists) {
		var status=lists[i]['order_status'];
		var temp=new Array();
		temp['show']=true;
		
		switch (status){
			case 0:
				temp['pay']=true;
				temp['cancel']=true;
				break;
			case 1:
				temp['connect']=true;
				temp['receive']=true;
				break;
			case 2:
				temp['receive']=true;
				break;
			case 3:
				temp['receive']=true;
				break;
			case 4:
				temp['receive']=true;
				break;
			case 5:
				temp['receive']=true;
				break;
			case 'i':
				temp['receive']=true;
				break;
			case 7:
				temp['pingjia']=true;
				temp['again']=true;
				break;
			default:
				break;
		}
		lists[i]['btns']=temp;
	}
	orders.loadOrders(type);
}
orders.loadOrders=function(type){
	//all\pay\confirm\pingjia
	var lists=this.orderLists;
	var html='';
	$("#"+type).find('.order_item').remove()
	if(lists.length>=1){
		for (var i in lists) {
//			console.log(lists[i])
			 html+='<ul class="order_item">'
					+	'<li class="order_time">'
					+		'<h5>08-31</h5>'
					+		'<p>12:30</p>'
					+		'<i class="fa fa-circle-o"></i>'
					+	'</li>'
					+	'<li class="order_detail">'
					+		'<div class="order_detail_left">'
					+			'<img src="../imgs/commenttouxiang2.png">'
					+		'</div>'
					+		'<div class="order_detail_right">'
					+			'<h4>'+lists[i]['shopName']+'</h4>'
					+			'<p>黄焖鸡米饭小份-微辣 1份 / 康师傅矿泉水1X12（550毫升）1份</p>'
					+			'<p>'
					+				'共<span class="order-r">5</span>个商品'
					+			'</p>'
					+		'</div>'
					+	'</li>'
					+	'<li class="order_price">'
					+		'<h4>'+lists[i]['amount']+'</h4>'
					+		'<p>在线支付</p>'
					+	'</li>'
					+	'<li class="order_status">'
					+		'<span class="order_btn order-r"></span>';
				if(lists[i]['coutDown']){
					var mins=parseInt(lists[i]['coutDown']/60);
					mins=mins<10?'0'+mins:mins;
					var second=lists[i]['coutDown']%60;
					second=second<10?'0'+second:second;
					html+='<span class="order-dg">剩余付款时间<p class="order-count" data-second="'+lists[i]['coutDown']+'">'+mins+':'+second+'</p></span>';
				}
				html	+=	'</li>'
					+	'<li class="order_handle">';
			
			if(lists[i]['btns']['pay']){
				html+='<span class="order_btn order-r" onclick="orders.payOrders('+lists[i]['id']+')">去支付</span>';
			}
			if(lists[i]['btns']['show']){
				html+='<span class="order_btn order-y" onclick="orders.showOrders('+lists[i]['id']+')">查看详情</span>';
			}
			if(lists[i]['btns']['receive']){
				html+='<span class="order_btn order-dg" onclick="orders.reciveOrders('+lists[i]['id']+')">确认收货</span>';
			}
			if(lists[i]['btns']['cancel']){
				html+='<span class="order_btn order-dg" onclick="orders.cancelOrders('+lists[i]['id']+')">取消订单</span>';
			}
			if(lists[i]['btns']['pingjia']){
				html+='<span class="order_btn order-y" onclick="orders.pingjiaOrders('+lists[i]['id']+')">评价订单</span>';
			}
			if(lists[i]['btns']['again']){
				html+='<span class="order_btn order-dg" onclick="orders.againOrders('+lists[i]['id']+')">再来一单</span>';
			}
			
					
				html+=	'</li>'
					+'</ul>';
		}
		$("#"+type).find('.page').before(html);
		
	}else{
		html='<div class="empty">暂无符合筛选条件的订单</div>';
		$("#"+type).append(html);
		$("#"+type).find('.page').remove()
	}
	loadOrderCdown()
};
//订单详情
orders.showOrders=function(orderId){
//	console.log(orderId)
	index=layer.open({
	  type: 2,
	  title: '订单详情',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['80%', '60%'],
	  content: 'order_detail.html' //iframe的url
	});
}
//订单评价
orders.pingjiaOrders=function(orderId){
//	console.log(orderId)
	index=layer.open({
	  type: 2,
	  title: '评价订单',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['80%', '60%'],
	  content: 'order_pingjia.html' //iframe的url
	});
}
//去支付
orders.payOrders=function(orderId){
//	console.log(orderId)
	index=layer.open({
	  type: 2,
	  title: '订单支付',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['80%', '60%'],
	  content: 'order_pay.html' //iframe的url
	});
}
//取消订单
orders.cancelOrders=function(orderId){
//	console.log(orderId);
	//询问框
	layer.confirm('确定取消订单？', {
	  btn: ['确定','取消'] //按钮
	},  function(){
	  layer.msg('ajax操作', {
	    time: 20000, //20s后自动关闭
	    btn: ['明白了', '知道了']
	  });
	});
}
//确认收货
orders.reciveOrders=function(orderId){
//	console.log(orderId)
	layer.confirm('确认收到货物？', {
	  btn: ['确定','取消'] //按钮
	},  function(){
	  layer.msg('ajax操作', {
	    time: 20000, //20s后自动关闭
	    btn: ['明白了', '知道了']
	  });
	});
}
//再来一单
orders.againOrders=function(orderId){
//	console.log(orderId)
	layer.msg('再来一单ajax操作', {
	    time: 20000, //20s后自动关闭
	    btn: ['明白了', '知道了']
	  });
}

