mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
$(function(){
	
	$(".fa-calendar").bind({
		'click':function(e){
			e.preventDefault();
			var now=new Date();
			var picker = new mui.DtPicker({
				endDate:new Date(),
				type:'month',
			});
			picker.show(function(rs){
				console.log(rs.value)
				var time=new Date(rs.value);
				var month=time.getMonth()+1;
				month=(month<10)?'0'+month:month;
				console.log(month)
				$(".show_m").html(month+"月");
				mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100)
			})
			return false;
		}
		
	})
	
})
function getBill(page){
	var billdata=[
		{
			name:'微信充值  ',
			time:'10-28 12:00',
			amount:500,
			type:'in'
		},{
			name:'轻奢沙龙支付消费  ',
			time:'10-28 13:00',
			amount:500,
			type:'out'
		},			{
			name:'支付宝充值  ',
			time:'10-28 12:00',
			amount:500,
			type:'in'
		},{
			name:'轻奢沙龙支付消费  ',
			time:'10-28 13:00',
			amount:500,
			type:'out'
		},{
			name:'微信充值  ',
			time:'10-28 12:00',
			amount:500,
			type:'in'
		},{
			name:'轻奢沙龙支付消费  ',
			time:'10-28 13:00',
			amount:500,
			type:'out'
		},			{
			name:'支付宝充值  ',
			time:'10-28 12:00',
			amount:500,
			type:'in'
		},{
			name:'轻奢沙龙支付消费  ',
			time:'10-28 13:00',
			amount:500,
			type:'out'
		},{
			name:'微信充值  ',
			time:'10-28 12:00',
			amount:500,
			type:'in'
		},{
			name:'轻奢沙龙支付消费  ',
			time:'10-28 13:00',
			amount:500,
			type:'out'
		},			{
			name:'支付宝充值  ',
			time:'10-28 12:00',
			amount:500,
			type:'in'
		},{
			name:'轻奢沙龙支付消费  ',
			time:'10-28 13:00',
			amount:500,
			type:'out'
		}
	];
	loadBill(billdata);
}
function loadBill(data){
	$("#bill_list").empty();
	for (var i in data) {
		var amount=''
		var li=$('<li></li>');
		li.addClass('mui-table-view-cell');
		if(data[i]['type']=='in'){
			li.addClass('bill_in');
			amount="+"+parseFloat(data[i]['amount']).toFixed(2) ;
		}else{
			li.addClass('bill_out');
			amount="-"+parseFloat(data[i]['amount']).toFixed(2);
		}
		var html='<div class="mui-pull-left">'
	            +    	'<div class="bill_name">'+data[i]['name']+'</div>'
	            +    	'<div class="bill_time">'
	            +    		data[i]['time']
	            +    	'</div>'
	            +    '</div>'
	            +    '<div class="mui-pull-right bill_amount" >'
	            +    	amount
	            +    '</div>';
	    li.append(html);
	    $("#bill_list").append(li);
	}
}