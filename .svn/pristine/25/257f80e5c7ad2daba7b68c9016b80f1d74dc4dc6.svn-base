$(function(){
	loadCartData();
	payTypeChange();
	piaoChange()
})
var chartData={
	'2-0':{attr: "", attr_id: 0, id: "2", name: "惠灵顿牛排2", num: 1, price:'0.02'},
	'3-0':{attr: "", attr_id: 0, id: "3", name: "惠灵顿牛排3", num: 1, price:'0.03'},
};
var addressData=[
	    	{id:1,name:'蒋爱军',address:'四海家园 复兴路',sex:0,address_detail:'12号楼315',phone:'18806297146',is_default:1},
	    	{id:2,name:'蒋爱军2',address:'四海家园 复兴路2',sex:1,address_detail:'13号楼315',phone:'15995855970',is_default:0},
	    	{id:3,name:'蒋爱军3',address:'四海家园 复兴路3',sex:0,address_detail:'星湖101设计创意中心8座',phone:'18806297146',is_default:0},
	    	{id:4,name:'蒋爱军4',address:'四海家园 复兴路4',sex:1,address_detail:'13号楼315',phone:'15995855970',is_default:0},
	    	{id:5,name:'蒋爱军5',address:'四海家园 复兴路5',sex:0,address_detail:'12号楼315',phone:'18806297146',is_default:0},
	    	{id:6,name:'蒋爱军6',address:'四海家园 复兴路6',sex:1,address_detail:'13号楼315',phone:'15995855970',is_default:0},
	    	{id:7,name:'蒋爱军7',address:'四海家园 复兴路7',sex:0,address_detail:'12号楼315',phone:'18806297146',is_default:0},
//	    	{id:8,name:'蒋爱军8',address:'四海家园 复兴路8',sex:1,address_detail:'13号楼315',phone:'15995855970'},
	    	{id:9,name:'蒋爱军9',address:'四海家园 复兴路9',sex:0,address_detail:'12号楼315',phone:'18806297146',is_default:0},
	  		{id:10,name:'蒋爱军10',address:'四海家园 复兴路10',sex:1,address_detail:'13号楼315',phone:'15995855970',is_default:0},
	    ];

//根据chartData进行加载购物车以及列表页面
function loadCartData(){
	console.log(chartData);
	$(".confirm_cart .cart_list").remove();
	if(Object.keys(chartData).length==0){
		$(".confirm_cart tbody").append('<tr class="cart_list cart_empty"><td colspan="3" style="padding-left:0"><img src="../imgs/cart_empty.png"></td></tr>');
	}
	
	var count=0;
	var totalPrice=0;
	for (var i in chartData) {
		var li=$("<tr class='cart_list'></tr>");
		li.attr({
			'data-goodsid':chartData[i]['id'],
			'data-attr-id':chartData[i]['attr_id'],
			'data-name':chartData[i]['name'],
		})
		var html='<td>'+chartData[i]['name'];

		var price=chartData[i]['price']*chartData[i]['num'];
			html+=	'</td>'
				+	'<td class="" data-goodsid="'+chartData[i]['id']+'" ><div class="cart_btn">'
				+		'<span onclick="cartList(this,-1,'+chartData[i]['price']+')">-</span>'
				+		'<input type="text" readonly="" value="'+chartData[i]['num']+'"/>'
				+		'<span onclick="cartList(this,1,'+chartData[i]['price']+')">+</span>'
				+	'</div></td>'
				+	'<td>￥'+price+'</td>'
		li.append(html)
		$(".confirm_cart tbody").append(li)
		count+=chartData[i]['num'];
		totalPrice+=price;
		
		
	}

	$('.confirm_hj p span').text(count);
	$(".confirm_hj div span").text("￥"+parseFloat(totalPrice).toFixed(2));
}
//购物车内部 点击【+】/【-】执行函数，传递数据调用addcart函数
function cartList(me,flg,price){
	var goodsid=$(me).parents('.cart_list').attr('data-goodsid');
	var attr_id=$(me).parents('.cart_list').attr('data-attr-id');
	var name=$(me).parents('.cart_list').attr('data-name');
	price=parseFloat(price);
	addCart(name,price,goodsid,flg,'',attr_id)
}
function addCart(name,price,id,count,attr,attr_id){
	if (count>0) {
		if (chartData[id+"-"+attr_id]) {
			chartData[id+"-"+attr_id]['num']+=parseFloat(count);
		}else{
			chartData[id+"-"+attr_id]={
				attr:attr,
				attr_id:attr_id,
				id:id,
				name:name,
				num:count,
				price:price
			}
		}
	}else{
		if (chartData[id+"-"+attr_id]) {
			chartData[id+"-"+attr_id]['num']+=parseFloat(count);
			if (chartData[id+"-"+attr_id]['num']<=0) {
				delete chartData[id+"-"+attr_id];
			}
		}
	}
	loadCartData();
}

function loadAddress(addressData,flg){
	console.log()
	var html=$("<div></div>");
	for (var i in addressData) {
		
		var div2=$("<div class='address_item '></div>");
		var div3=$("<div class='address_item_div'></div>");
		if (addressData[i]['is_default']==1) {
			div3.addClass('active');
		}
		var sex=addressData[i]['sex']==1?'女士':'先生'
		div3.append('<div >'+addressData[i]['name']+'<span>'+sex+'</span></div>');
		div3.append('<div>'+addressData[i]['address']+addressData[i]['address_detail']+'</div>')
		div3.append('<div>'+addressData[i]['phone']+'</div>');
		div3.append('<div class="use_this"><button onclick="useAddress(this,\''+flg+'\')">使用该地址</button></div>')
		div2.append(div3)
		html.append(div2);
	}
	if (addressData.length<10) {
		html.append("<div class='address_item' id='add_btn' onclick='addNewAddress()'><div class='address_item_div'><i class='fa fa-plus'></i>&nbsp;使用新地址</div></div>");
	}
	
	return html.html();
}
function changeAddress(flg){
	var html=loadAddress(addressData,flg);
	
	//iframe层
	var index=layer.open({
	  type: 1,
	  title: '修改地址',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['700px'],
	  content: html //iframe的url
	}); 
	addressHover()
}




function payTypeChange(){
	$(".pay_list li").each(function(){
		$(this).bind({
			'click':function(){
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
			}
		})
	})
}
function piaoChange(){
	$('.p_label').each(function(){
		$(this).bind({
			'click':function(){
				var index=$("input[name=piao]:checked").parent().index();
				$(".piaoer_form >div").hide().eq(index).fadeIn();
			}
		})
		
	})
}
function addressHover(){
	$(".address_item_div").each(function(){
		$(this).mouseover(function(){
			if (!$(this).hasClass('active')) {
				$(this).find('.use_this').show()
			}else{
				$(".use_this").hide()
			}
		}).mouseleave(function(){
			$(".use_this").hide()
		})
	})
}
//新增地址
function addNewAddress(){
	layer.close(layer.index);
	var html='<div class="add_form" >'
			+	'<form class="form-horizontal" role="form" style="width: 80%;margin-left:20px ;">'
			+	  '<div class="form-group">'
			+	    '<label for="name" class="col-sm-2 control-label">姓名</label>'
			+	    '<div class=" col-sm-10">'
			+	      '<input type="text" class="form-control" id="name" placeholder="请输入您的姓名" >'
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<label for="sex" class="col-sm-2 control-label">性别</label>'
			+	    '<div class="col-sm-10">'
			+   		'<input type="radio" name="sex" id="sex_0" value="0" />先生&nbsp;&nbsp;'
			+      		'<input type="radio" name="sex" id="sex_1" value="1" />女士'
			+	    '</div>'
			+	 ' </div>'
			+	  '<div class="form-group">'
			+	    '<label for="address" class="col-sm-2 control-label">位置</label>'
			+	    '<div class="col-sm-10">'
			+	      '<input type="text" class="form-control" id="address" placeholder="请输入小区、大厦或学校"  >'
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<label for="full_address" class="col-sm-2 control-label">详细地址</label>'
			+	    '<div class="col-sm-10">'
			+	      '<input type="text" class="form-control" id="full_address" placeholder="单元、门牌号"   >' 
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<label for="mobile" class="col-sm-2 control-label">手机号码</label>'
			+	    '<div class="col-sm-10">'
			+	      '<input type="tel" class="form-control" id="mobile" placeholder="请输入您的手机号码"  maxlength="11">'
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<label for="idDefault" class="col-sm-2 control-label">设为默认</label>'
			+	    '<div class="col-sm-10" style="padding-top: 5px;">'
			+	    	'<input type="checkbox" class="" id="idDefault" placeholder=""    >'
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<div class="col-sm-offset-2 col-sm-10">'
			+	      '<button type="button" class="btn btn-primary" onclick="submitAddress()" id="save">保存</button>'
			+	      '<button type="button" class="btn  btn-default "  id="reset" onclick="addReset()">取消</button>'
			+	    '</div>'
			+	  '</div>'
			+	'</form>'
			+'</div>';
	//iframe层
	var index=layer.open({
	  type: 1,
	  title: '新增地址',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['700px'],
	  content: html //iframe的url
	}); 
	loadMap();
}

function addReset(){
	layer.close(layer.index);
}
function submitAddress(){
	//ajax处理保存
	layer.close(layer.index)
}

function useAddress(me,flg){
	console.log(me)
	var clon=$(me).parents('.address_item_div').clone();
	clon.find('.use_this').remove();
	console.log(flg)
	$("#"+flg).prev().replaceWith(clon);
	layer.close(layer.index)
}
function submitOrder(){
	var index=$(".pay_list .active").index();
	console.log(index);
	var html='';
	html=showQCode(index,'32','../imgs/zhifubaozhhifu.png');
	if (index==2) {
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  shadeClose: true,
		  skin: 'yourclass',
		  area:['300px','300px'],
		  content: html,
		});
	}else{
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 1,
		  shadeClose: true,
		  skin: 'yourclass',
		  area:['500px','400px'],
		  content: html,
		});
	}
	
	passWordClick();
}
function showQCode(type,amount,img){
	var html='<div class="pay_div">',typeString;
	switch (type){
		case 0:
			typeString='支付宝';
			break;
		case 1:
			typeString='微信';
			break;
		case 2:
			typeString='黑卡';
			break;
	}
	html+='<h4 align="center">使用'+typeString+'支付<span style="color:#f84242;font-size:20px">￥'+parseFloat(amount).toFixed(2)+'</span></h4>';
	if (type==2) {
		html+='<div id="form_paypsw"><div class="pay_title">支付密码</div>';
		html+='<div id="payPassword_container" class="alieditContainer clearfix" data-busy="0">'
			+	'<div class="i-block" data-error="i_error">'
			+		'<div class="i-block six-password">'
			+			'<input class="i-text sixDigitPassword" id="payPassword_rsainput" type="password" autocomplete="off" required="required" value="" name="payPassword_rsainput" data-role="sixDigitPassword" tabindex="" maxlength="6" minlength="6" aria-required="true">'
			+			'<div tabindex="0" class="sixDigitPassword-box" style="width: 180px;">'
			+				'<i style="width: 29px; border-color: transparent;" class=""><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<i style="width: 29px;"><b style="visibility: hidden;"></b></i>'
			+				'<span style="width: 29px; left: 0px; visibility: hidden;" id="cardwrap" data-role="cardwrap"></span>'
			+			'</div>'
			+		'</div>'
			+	'</div>'
			+'</div>';
		html+="<div class='black_i'>黑卡<span style='color:#999'>(余额<span style='color:#666'>￥300.00</span>)<span></div>";
		html+="<div class='black_i' style='color:#999'>余额不足<span class='black_cz'>去充值</span></div>";
		html+="<div class='black_i'><button class='black_submit_pay'>确认支付<button></div></div>"
	} else{
		html+='<div class="pay_code"><img src="'+img+'"/></div>';
		html+='<div class="saoyisao">'
		+		'<div class="sao">'
		+		'<img src="../imgs/saoyisao.png">'
		+		'</div>'
		+		'<div class="sao_font">'
		+			'<ul>'
		+				'<li>请使用'+typeString+'扫一扫</li>'
		+				'<li>扫描二维码完成支付</li>'
		+			'</ul>'
		+		'</div>'
		+	'</div>';
	}
	html+="</div>"
	return html;
}


function passWordClick(){
	var payPassword = $("#payPassword_container"),
    _this = payPassword.find('i'),	
	k=0,j=0,
	password = '' ,
	_cardwrap = $('#cardwrap');
	//点击隐藏的input密码框,在6个显示的密码框的第一个框显示光标
	payPassword.on('focus',"input[name='payPassword_rsainput']",function(){
	
		var _this = payPassword.find('i');
		if(payPassword.attr('data-busy') === '0'){ 
		//在第一个密码框中添加光标样式
		   _this.eq(k).addClass("active");
		   _cardwrap.css('visibility','visible');
		   payPassword.attr('data-busy','1');
		}
		
	});	
	//change时去除输入框的高亮，用户再次输入密码时需再次点击
	payPassword.on('change',"input[name='payPassword_rsainput']",function(){
		_cardwrap.css('visibility','hidden');
		_this.eq(k).removeClass("active");
		payPassword.attr('data-busy','0');
	}).on('blur',"input[name='payPassword_rsainput']",function(){
		
		_cardwrap.css('visibility','hidden');
		_this.eq(k).removeClass("active");					
		payPassword.attr('data-busy','0');
		
	});
	
	//使用keyup事件，绑定键盘上的数字按键和backspace按键
	payPassword.on('keyup',"input[name='payPassword_rsainput']",function(e){
	
	var  e = (e) ? e : window.event;
	
	//键盘上的数字键按下才可以输入
	if(e.keyCode == 8 || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
			k = this.value.length;//输入框里面的密码长度
			l = _this.size();//6
			
			for(;l--;){
			
			//输入到第几个密码框，第几个密码框就显示高亮和光标（在输入框内有2个数字密码，第三个密码框要显示高亮和光标，之前的显示黑点后面的显示空白，输入和删除都一样）
				if(l === k){
					_this.eq(l).addClass("active");
					_this.eq(l).find('b').css('visibility','hidden');
					
				}else{
					_this.eq(l).removeClass("active");
					_this.eq(l).find('b').css('visibility', l < k ? 'visible' : 'hidden');
					
				}				
			
			if(k === 6){
				j = 5;
			}else{
				j = k;
			}
			$('#cardwrap').css('left',j*30+'px');
		
			}
		}else{
		//输入其他字符，直接清空
			var _val = this.value;
			this.value = _val.replace(/\D/g,'');
		}
	});	
}





function  loadMap(){
	var map = new AMap.Map("mapContainer", {
            resizeEnable: true,
            center: [120.944565, 31.922909],//地图中心点
            zoom: 13,//地图显示的缩放级别
            keyboardEnable: false
    });
    AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
      var autoOptions = {
        city: "南通", //城市，默认全国
        input: "address"//使用联想输入的input的id
      };
      autocomplete= new AMap.Autocomplete(autoOptions);
      var placeSearch = new AMap.PlaceSearch({
            city:'南通',
            map:map
      })
      AMap.event.addListener(autocomplete, "select", function(e){
        
       	console.log(e)
      
       	$("#address").val(e.poi.district)
       	$("#full_address").val(e.poi.address)
       	
      });
    });
}




function chooseCar(){
	var carData=[{
		id:'1',
		carNum:'苏F88888',
		carType:'0',
		isdefault:'1',
	},{
		id:'2',
		carNum:'苏F88889',
		carType:'1',
		isdefault:'0',
	}];
	var html='';
	console.log(carData)
	for (var i in carData ) {
		var c='address_item_div';
		if(carData[i]['isdefault']==1){
			c+=" active"
		}
		html+='<div class="address_item " onclick="useCar(this,\'change_car\')">';
		html	+='<div class="'+c+'">';
		html	+=	'<div>'+carData[i]['carNum']+'('+carData[i]['carType']+')</div>';
		html	+=	'<div class="use_this" style="display: none;">';
		html	+=		'<button >选择车辆</button>';
		html	+=	'</div>';
		html	+=	'</div>';
		html	+='</div>';
	}
	if(carData.length<10){
		html+='<div class="address_item " id="addCar" onclick="addCar()"><div class="address_item_div " ><i class="fa fa-plus"></i>&nbsp;&nbsp;添加新车辆</div></div>'
	}
	
	var index=layer.open({
	  type: 1,
	  title: '选择车辆',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['700px'],
	  content: html //iframe的url
	});
}
function useCar(me,flg){
	
	 console.log(me)
	var clon=$(me).find('.address_item_div').clone();
	clon.find('.use_this').remove();
	console.log(flg)
//	$("#"+flg).prev().replaceWith(clon);
	$("#order_car .address_item_div").replaceWith(clon)
	layer.close(layer.index)
}
function addCar(){
	layer.close(layer.index);
	var html='<div class="add_form" >'
			+	'<form class="form-horizontal" role="form" style="width: 80%;margin-left:20px ;">'
			+	  '<div class="form-group">'
			+	    '<label for="name" class="col-sm-2 control-label">车牌号码</label>'
			+	    '<div class=" col-sm-10">'
			+	      '<input type="text" class="form-control" id="name" placeholder="请输入您的车牌号码" >'
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<label for="address" class="col-sm-2 control-label">汽车型号</label>'
			+	    '<div class="col-sm-10">'
			+			'<select class="form-control">'
			+			'<option value="0">微型车</option>'
			+			'<option value="1" >小型车</option>'
			+			'</select>'
			+	    '</div>'
			+	  '</div>'
			
			+	  '<div class="form-group">'
			+	    '<label for="idDefault" class="col-sm-2 control-label">设为默认</label>'
			+	    '<div class="col-sm-10" style="padding-top: 5px;">'
			+	    	'<input type="checkbox" class="" id="idDefault" placeholder=""    >'
			+	    '</div>'
			+	  '</div>'
			+	  '<div class="form-group">'
			+	    '<div class="col-sm-offset-2 col-sm-10">'
			+	      '<button type="button" class="btn btn-primary" onclick="submitAddress()" id="save">保存</button>'
			+	      '<button type="button" class="btn  btn-default "  id="reset" onclick="addReset()">取消</button>'
			+	    '</div>'
			+	  '</div>'
			+	'</form>'
			+'</div>';
	//iframe层
	var index=layer.open({
	  type: 1,
	  title: '新增车辆',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['700px'],
	  content: html //iframe的url
	}); 
}


function myPicker(me){
	$(me).datetimepicker({  
	    language : 'zh-CN',  
	    weekStart : 1,  
	    todayBtn : 0,  
	    autoclose : 1,  
	    startView : 2,  
	    minView: "month",
	  	startDate:new Date(),/*shezhi */
	  	endDate:'',/*shezhi */
	    format: 'yyyy-mm-dd HH:mm',  
	    forceParse : 0  
	})
}
$(function(){
	$("#car_wash_time").datetimepicker({  
	    language : 'zh-CN',  
	    weekStart : 1,  
	    todayBtn : 0,  
	    autoclose : 1,  
	    startView : 2,  
	    minView: 1,
	  	startDate:new Date(),/*shezhi */
	  	endDate:'',/*shezhi */
	  	minuteStep :60,
	    format: 'yyyy-mm-dd hh:ii',  
	    forceParse : 0  
	})
	$("#wm_time").datetimepicker({  
	    language : 'zh-CN',  
	    weekStart : 1,  
	    todayBtn : 0,  
	    autoclose : 1,  
	    startView : 2,  
	    minView: 1,
	  	startDate:new Date(),/*shezhi */
	  	endDate:'',/*shezhi */
	    format: 'yyyy-mm-dd hh:ii',  
	    forceParse : 0  
	})
	$("#yd_time").datetimepicker({  
	    language : 'zh-CN',  
	    weekStart : 1,  
	    todayBtn : 0,  
	    autoclose : 1,  
	    startView : 2,  
	    minView: 1,
	  	startDate:new Date(),/*shezhi */
	  	endDate:'',/*shezhi */
	    format: 'yyyy-mm-dd hh:ii',  
	    forceParse : 0  
	})
	$("#df_time").datetimepicker({  
	    language : 'zh-CN',  
	    weekStart : 1,  
	    todayBtn : 0,  
	    autoclose : 1,  
	    startView : 2,  
	    minView: 1,
	  	startDate:new Date(),/*shezhi */
	  	endDate:'',/*shezhi */
	    format: 'yyyy-mm-dd hh:ii',  
	    forceParse : 0  
	})
})
