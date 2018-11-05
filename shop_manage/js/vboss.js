$(function(){
	$(".tj_control li").each(function(){
		$(this).bind({
			'click':function(){
				var index=$(this).index();
				$('.tj_control_div div').hide().eq(index).fadeIn();
				$(".tj_control li").removeClass('active').eq(index).addClass('active');
			}
		})
	})
	$("#tixian_now").bind({
		'click':function(){
			tixian(account,totalAmount);
		}
	})
	$(".txt_tongji a").each(function(){
		$(this).bind({
			'click':function(){
				var startTime,endTime,page,now;
				var index=$(this).attr('data-type');
				now=new Date();
				if (index=='today') {
					M=Number(now.getMonth())+1;
					M=(M<10)?('0'+M):M;
					D=now.getDate();
					D=(D<10)?('0'+D):D;
					startTime=now.getFullYear()+"-"+M+"-"+D;
					
				}else if(index=='week'){
					var WeekFirstDay=new Date(now-(now.getDay()-1)*86400000);     
    				M=Number(WeekFirstDay.getMonth())+1 ;
    				M=(M<10)?('0'+M):M;
    				D=WeekFirstDay.getDate();
					D=(D<10)?('0'+D):D;
    				startTime= WeekFirstDay.getFullYear()+"-"+M+"-"+D;
				}else if(index=='month'){
					var MonthFirstDay=new Date(now.getFullYear(),now.getMonth(),1);     
    				M=Number(MonthFirstDay.getMonth())+1     
    				M=(M<10)?('0'+M):M;
    				D=MonthFirstDay.getDate();
					D=(D<10)?('0'+D):D;
    				startTime= MonthFirstDay.getFullYear()+"-"+M+"-"+D;   
				}
				M=Number(now.getMonth())+1;
				M=(M<10)?('0'+M):M;
				D=now.getDate();
				D=(D<10)?('0'+D):D;
				endTime=now.getFullYear()+"-"+M+"-"+D;
				getData(startTime,endTime,1)
			}
		})
	})
})
function getData(startTime,endTime,page){
	//开始时间、结束时间、获取的页码
	$("#startTime").val(startTime);
	$("#endTime").val(endTime);
	var data=[{ id: 161,
                orderId: 1560,
                shopId: 10007,
                income: 0.01,
                type: "0",
                createTime: 1500529801000,
                shop_name: "江南厨房【测试】1",
                order_no: "15005298140595848"},
                { id: 162,
                orderId: 1561,
                shopId: 10007,
                income: 0.01,
                type: "1",
                createTime: 1500529801000,
                shop_name: "江南厨房【测试】2",
                order_no: "15005298140595848"},
                { id: 163,
                orderId: 1562,
                shopId: 10007,
                income: 0.01,
                type: "3",
                createTime: 1500529801000,
                shop_name: "江南厨房【测试】4",
                order_no: "15005298140595848"},
	]
	loadData(data);
}



function loadData(data){
	$(".list_table tbody").remove();
	for (var i in data) {
		var time=new Date(data[i]['createTime']);
		time=time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()
		var html='<tr>'
				+	'<td class="list_center">'+data[i]['orderId']+'</td>'
				+	'<td class="list_center">'+data[i]['order_no']+'</td>'
				+	'<td class="list_center list_time">'+time+'</td>'
				+	'<td class="list_center list_status">'
				+		'<span class="font-fail">'+data[i]['type']+'</span>'
				+	'</td>'
				+	'<td class="list_center price_u">'+data[i]['income']+'</td>'
				+'</tr>'
		$(".list_table").append(html)
	}
}
function tixian(account,totalAmount){
	layer.open({
		title:'立即提现',
	    type: 1,
		skin: 'layui-layer-rim', //加上边框
		area: ['420px', '240px'], //宽高
		content: '<div class="edit_div" style="" >'
				+'<form action="" method="post">'
				+	'<ul>'
				+		'<li>'
				+			'<label for="">银行账户：</label><input type="text" value="'+account+'" disabled/>'
				+		'</li>'
				+		'<li>'
				+			'<label for="">可提金额：</label>'+totalAmount
				+		'</li>'
				+		'<li>'
				+			'<label for="">提现金额：</label><input type="text" value="" style="width:150px"/><a onclick="tixianAll(this,\''+totalAmount+'\')" style="color:red" ><small>全部提现</small></a>'
				+		'</li>'
				+		'<li style="text-align:center">'
				+			'<span class="search_btn" id="save_edit_cat" style="padding: 5px 13px;" onclick="" >确定提现</span>'
				+		'</li>'
				+	'</ul>'
				+'</form>'
			+'</div>'
	});
}
function buchong(account){
	layer.open({
		title:'补足保证金',
	    type: 1,
		skin: 'layui-layer-rim', //加上边框
		area: ['420px', '240px'], //宽高
		content: '<div class="edit_div" style="" >'
				+'<form action="" method="post">'
				+	'<ul>'
				+		'<li>'
				+			'<label for="">补充金额：</label>'+account
				+		'</li>'
				+		'<li>'
				+			'<label for="">支付方式：</label><select><option>微信支付</option><option>支付宝支付</option></select>'
				+		'</li>'
				+		'<li style="text-align:center">'
				+			'<span class="search_btn" id="save_edit_cat" style="padding: 5px 13px;" onclick="submitBzj()" >补足保证金</span>'
				+		'</li>'
				+	'</ul>'
				+'</form>'
			+'</div>'
	});
}
function submitBzj(){
	$(".edit_div").html('<img src="../img/app_erm.png" style="margin:0 auto"><p>微信扫一扫</p>').css({
		'text-align':'center',
		'padding-top':'30px'
	})
}
function pingtai(account){
	layer.open({
		title:'平台使用费',
	    type: 1,
		skin: 'layui-layer-rim', //加上边框
		area: ['420px', '250px'], //宽高
		content: '<div class="edit_div" style="" >'
				+'<form action="" method="post" style="width:90%" id="pingtai_fee">'
				+	'<ul>'
				+		'<li>'
				+			'<label for="">缴费年份：</label>'
				+			'<input type="radio" name="fee_year" id="" value="1" checked>&nbsp;一年&nbsp;'
				+			'<input type="radio" name="fee_year" id="" value="2" >&nbsp;两年&nbsp;'
				+			'<input type="radio" name="fee_year" id="" value="3" >&nbsp;三年&nbsp;'
				+			'<input type="radio" name="fee_year" id="" value="0" >&nbsp;'
				+			'<input type="text" name="fee_year" id="diy_fee_year" value="" maxlength="3"  style="width:30px" disabled>&nbsp;年&nbsp;'
				+		'</li>'
				+		'<li>'
				+			'<label for="">费用金额：</label><span id="total_fee">'+account+'</span>'
				+		'</li>'
				+		'<li>'
				+			'<label for="">支付方式：</label><select><option>微信支付</option><option>支付宝支付</option></select>'
				+		'</li>'
				+		'<li style="text-align:center">'
				+			'<span class="search_btn" id="save_edit_cat" style="padding: 5px 13px;" onclick="submitBzj()" >缴纳费用</span>'
				+		'</li>'
				+	'</ul>'
				+'</form>'
			+'</div>'
	});
	feeYearChange(account);
	diyFeeYear(account)
}
function submitPingtai(){
	$(".edit_div").html('<img src="../img/app_erm.png" style="margin:0 auto"><p>微信扫一扫</p>').css({
		'text-align':'center',
		'padding-top':'30px'
	})
}
function feeYearChange(amount){
	console.log(1)
	$('#pingtai_fee input[type=radio]').each(function(){
		$(this).bind({
			'click':function(){
				console.log($(this).val())
				var val=$(this).val();
				if(val==0){
					$("#diy_fee_year").removeProp('disabled').val('1');
					val=$("#diy_fee_year").val();
					setTotal(amount*val)
				}else{
					$("#diy_fee_year").attr({
						'disabled':true,
					}).val('');
					setTotal(amount*val)
				}
			}
		})
	})
}
function setTotal(amount){
	$("#total_fee").html(amount)
}
function diyFeeYear(amount){
	$("#diy_fee_year").on('input',function(){
		var reg=/^[0-9]*[1-9][0-9]*$/;
		var val=$(this).val();
		if (reg.test(val)) {
			setTotal(amount*val)
		} else if(val==''){
			alert('至少为一年！');
			$("#diy_fee_year").val(1)
			return false;
		}else{
			alert('请输入合法的缴费年份！');
			$("#diy_fee_year").val(val.substr(0,val.length-1))
			return false;
		}
		console.log(reg.test(val))
	})
}
