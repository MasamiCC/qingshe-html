$(function(){
var toalMoney=$('.sg_head_money').html();
var newToalMoney=parseFloat(toalMoney).toFixed(2);
	$('.sg_head_money').html(newToalMoney);

//转化时间戳
var time = new Date();
	console.log(time);
var month=time.getMonth();
	month=month+1;
	month=month>10?month:"0"+month
	console.log(month);
var day=time.getDate();	
	console.log(day);
	newTime=month+"-"+day;
	$('.sg_time').html(newTime)
$('.share_foot_item_item_con').html('');
	
});
mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh,
			auto:true
		}
	}
});
var count = 0;

/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		debugger
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
		var sharecontainer = document.body.querySelector('.share_foot_item_item_con');
		var sharediv = document.body.querySelectorAll('.share_foot_item_item_content');
		for (var i = sharediv.length, len = i + 2; i < len; i++) {
			var div = document.createElement('div');
			div.className = 'share_foot_item_item_content';
			//字符串
		div.innerHTML=		'<div class="sg_time">'
					+			'12-10'
					+		'</div>'
					+		'<div class="sg_time_bottom">'
					+			'<div class="sg_time_bottom_item">'
					+				'<div class="share_foot_item_item">'
					+					'<span class="sg_title"><img src="../image/sg_sharehand.png"/>'+'分享'+'</span><span class="sg_content">'+'井'+'<span class="marginr5">'+'10'+'</span>人</span>'
					+				'</div>'
					+				'<div class="share_foot_item_item">'
					+					'<span class="sg_title">获得返利</span><span class="sg_content"><span class="marginr5">'+'10.00'+'</span>元</span>'
					+				'</div>'
					+			'</div>'
					+			'<div class="sg_time_bottom_item">'
					+				'<div class="share_foot_item_item">'
					+					'<span class="sg_title"><img src="../image/sg_sharehand.png"/>'+'分享'+'</span><span class="sg_content">'+'静静'+'<span class="marginr5">'+'10'+'</span>人</span>'
					+				'</div>'
					+				'<div class="share_foot_item_item">'
					+					'<span class="sg_title">获得返利</span><span class="sg_content"><span class="marginr5">'+'10.00'+'</span>元</span>'
					+				'</div>'
					+			'</div>'
					+		'</div>'
		            
				sharecontainer.appendChild(div);
		}
	}, 1500);
}
