var chartData={};
var layerIndex;
$(function(){
	loadCartData();
//	$(".shopping_cat_goods").empty();
	//清空
	$(".cart_clear").click(function(){
		chartData={};
		loadCartData();
	})
addcart();
	
})

//加入购物车
function addcart(){
	$(".addToCart").each(function(){
		$(this).bind({
			'click':function(e){
				var hasAttr=$(this).attr('data-attr');
				if(!hasAttr){
					var id=$(this).attr("data-goodsid");
					var name=$(this).attr("data-name");
					var price=$(this).attr('data-price');
					var attr='';
					var attr_id='';
					addCart(name,price,id,1,'',0);
				}else{
					console.log('多规格')
					var name=$(this).attr("data-name");
					var id=$(this).attr("data-goodsid");
					var attrData={
						success: true,
						result: [
						{
						  id: 2,//规格ID
						  name: "小份",//规格名
						  type: "0",//'0:1级规格 1:2级规格'
						  goodsid: null,
						  price: null,
						  specs: [
						         {
						         id: 5,//规格ID
						         name: "不辣",//规格名
						         type: "1",//'0:1级规格 1:2级规格'
						         goodsid: 6,//商品ID
						         price: 44,//价格
						         specs: null
						         },
						         {
						         id: 6,
						         name: "微辣",
						         type: "1",
						         goodsid: 6,
						         price: 44.5,
						         specs: null
						         },
						         {
						         id: 7,
						         name: "中辣",
						         type: "1",
						         goodsid: 6,
						         price: 45,
						         specs: null
						         },
						         {
						         id: 8,
						         name: "重辣",
						         type: "1",
						         goodsid: 6,
						         price: 45.5,
						         specs: null
						         }
						        ]
						      },
						{
						  id: 3,
						  name: "中份",
						  type: "0",
						  goodsid: null,
						  price: null,
						  specs: [
						         {
						         id: 9,
						         name: "不辣",
						         type: "1",
						         goodsid: 6,
						         price: 64,
						         specs: null
						         },
						         {
						         id: 10,
						         name: "微辣",
						         type: "1",
						         goodsid: 6,
						         price: 64.5,
						         specs: null
						         },
						         {
						         id: 11,
						         name: "中辣",
						         type: "1",
						         goodsid: 6,
						         price: 65,
						         specs: null
						         },
						         {
						         id: 12,
						         name: "重辣",
						         type: "1",
						         goodsid: 6,
						         price: 65.5,
						         specs: null
						         }
						        ]
						 },
						{
						  id: 4,
						  name: "大份",
						  type: "0",
						  goodsid: 6,
				          price: 65.5,
						  specs: []
						 }
						],
						status: null,
						map: null
						};
					var x=e.clientX;
					var y=e.clientY;
					var wheight=$(window).height();
					x=$(this).offset().left+110;
					$('body').append('<div class="attr_div_bg"></div>')
					$('.attr_div_bg').append(loadAttrData(attrData,name,id))
					if (wheight-e.clientY<250) {
						$('.attr_div').css( {
					      left: x+'px',
					      bottom:wheight-y-25+'px'
					    });
					}else{
						$('.attr_div').css( {
					      left: x+'px',
					      top: y-20+'px'
					    });
					}
					
					if (wheight-e.clientY<250) {
						$('.attr_div img').css( {
					      bottom: 0+'px',
					      top:'auto'
					    });
					}
					$("#attr_lev1 span").eq(0).click();
					$('body').css({
						overflow:'hidden'
					})
				}
				
			}
		})
	})
	
	}


//操作chartData对象，对购物车进行操作
/*
 * name；宝贝名称
 * price：宝贝单价
 * id：商品id
 * count：变更数量 1增加，-1减少
 * attr：规格
 * attr_id ：规格id
 * */
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
//购物车内部 点击【+】/【-】执行函数，传递数据调用addcart函数
function cartList(me,flg,price){
	var goodsid=$(me).parents('.cart_list').attr('data-goodsid');
	var attr_id=$(me).parents('.cart_list').attr('data-attr-id');
	var name=$(me).parents('.cart_list').attr('data-name');
	price=parseFloat(price);
	addCart(name,price,goodsid,flg,'',attr_id)
}


//规格点击事件
function attrClick(me,flg){
	var _this=me;
	$(_this).siblings().removeClass('attr_active');
	$(_this).addClass('attr_active');
	if (flg==1) {
		$("#attr_lev2").empty();
	}
	var dataAttr=$(_this).attr('data-attr');
	//console.log($(_this).html())
	if (dataAttr) {
		var arr=dataAttr.split('|');
		$("#attr_lev2").append("<h4>规格二</h4>");
		for (var i in arr) {
			var attr=arr[i];
			var arr2=attr.split('-');
			var span=$('<span class="attr" onclick="attrClick(this,2)"></span>');
			if (i==0) {
				span.addClass('attr_active')
			}
			span.html(arr2[1]);
			span.attr({
				'data-attr-id':arr2[0],
				'data-attr-price':arr2[2]
			})
			$("#attr_lev2").append(span);
			$("#attr_lev2 span").eq(0).click();
		}
	}else{
		var price=$(_this).attr('data-attr-price');
		var attrId=$(_this).attr('data-attr-id');
		$(".price span").text(price);
		$("#attr_id").val(attrId);
	}
	$(".choose_attr").html('')
	$(".attr_active").each(function(){
		if ($(".choose_attr").html()=='') {
			$(".choose_attr").html($(this).html())
		}else{
			$(".choose_attr").html($(".choose_attr").html()+'-'+$(this).html())
		}
		
	})
}

//获取时间差
function timecha(){
	var begindate=$('#begin_time').val();
	 	var endtime=$('#end_time').val();
	 	var datebegin=( new Date(begindate)).valueOf();
	 	var dateend=( new Date(endtime)).valueOf();
		cha=(dateend-datebegin)/(1000*60*60*24)
	console.log(cha)
	console.log(chartData);
	
//	return cha;
}


//根据chartData进行加载购物车以及列表页面
function loadCartData(){
	timecha();
	console.log(cha)
	$(".cart_lists ul").empty();
	if(Object.keys(chartData).length==0){
		$(".cart_lists ul").append('<li class="cart_list cart_empty"><img src="../imgs/cart_empty.png"></li>');
	}
	
	var count=0;
	var totalPrice=0;
	if (Object.keys(chartData).length==0) {
		$('.cart_tj i span').fadeOut();
		$('.cart_tj i span').fadeOut(function(){
			$('.cart_tj i span').text(0);
		});
	}
	for (var i in chartData) {
		var li=$("<li class='cart_list'></li>");
		li.attr({
			'data-goodsid':chartData[i]['id'],
			'data-attr-id':chartData[i]['attr_id'],
			'data-name':chartData[i]['name'],
		})
		var html='<div id="" class="cart_name">'+chartData[i]['name'];
	var price=chartData[i]['price']*chartData[i]['num']*cha;
	console.log('price='+price)
			html+=	'</div>'
				+	'<div class="cart_btn" data-goodsid="'+chartData[i]['id']+'" ><div class="">'
				+		'<span onclick="cartList(this,-1,'+chartData[i]['price']+')">-</span>'
				+		'<input type="text" readonly="" value="'+chartData[i]['num']+'"/>'
				+		'<span onclick="cartList(this,1,'+chartData[i]['price']+')">+</span>'
				+	'</div></div>';
			html+='<div class="cart_price">￥'+price+'</div>';
		li.append(html)
		$(".cart_lists ul").append(li);
		count+=chartData[i]['num'];
		totalPrice+=price;
		
		
	}
//	$(".cart_lists ul").append('123');
//	$('.ruzhutianshu').remove();
	var livedays=	'<div  class="ruzhutianshu">'
							+	'入住天数<div class="days">*&nbsp;<span>'
							+ 	cha
							+	'</span><div>'
							+	'</div>'
	$(".cart_lists ul").append(livedays);	

	$('.cart_tj i span').text(count);
	$(".cart_total").text("￥"+parseFloat(totalPrice).toFixed(2));
	if (count>=1) {
		$(".cart_tj i span").fadeIn();
		$('.cart_clear').fadeIn()
	}else{
		$(".cart_tj i span").fadeOut()
	}
}




function loadAttrData(attrData,name,id){
	var div=$('<div class="attr_div"></div>');
	div.append('<img src="../imgs/gg-bg.png" />')
	var div1=$('<div class="attr_lev1" id="attr_lev1" ><h4>规格一</h4></div>')
	
	for (var i in attrData.result) {
				
		var span=$('<span class="attr" onclick="attrClick(this,1)"></span>');
		if (i==0) {
			span.addClass('attr_active')
		}
		span.html(attrData.result[i].name);
		var speces=attrData.result[i].specs;
		if (speces.length>0) {
			var attri='';
			for (var j in speces) {
				if (attri=='') {
					attri+=speces[j]['id']+"-"+speces[j]['name']+"-"+speces[j]['price'];
				}else{
					attri+="|"+speces[j]['id']+"-"+speces[j]['name']+"-"+speces[j]['price'];
				}
			}
			span.attr({
				'data-attr':attri,
			})
		}else{
			span.attr({
				'data-attr-id':attrData.result[i].id,
				'data-attr-price':attrData.result[i].price,
				'data-attr-name':attrData.result[i].name,
			})
		}
		div1.append(span)
	}
	var divc=$('<div class="attr_c"></div>');
	divc.append(div1);
	
	divc.append('<div id="attr_lev2"><h4>规格二</h4></div>');
	div.append(divc);
	div.append('<div><h4>已选:<span class="choose_attr"></span></h4></div>')
	div.append('<div class="price"><small>￥</small><span>44</span></div>')
	div.append('<input type="hidden" name="attr_id" id="attr_id" value="">')
	
	div.append('<div style=""><button class="add_to_cart" onclick="addToCart(this)" data-name="'+name+'" data-goodsid="'+id+'">选好了，加入购物车</button><span class="close_attr" onclick="attrReset()">不要了</span></div>')
	return div;
}
function addToCart(me){
	var name=$(me).attr('data-name');
	var price=parseFloat($(".price span").html()).toFixed(2);
	var id=$(me).attr('data-goodsid')
	var attr_id=$('#attr_id').val();
	addCart(name,price,id,1,'',attr_id);
	attrReset()
	
}
function junpToThis(me){
	var _this=$(me);
	var item=$("#cat_item"+_this.attr('data-id'));
	var  itemTop=item.offset().top;
	var cat_list=$('#cat_list');
	var  listTop=cat_list.offset().top;
	$(".cat_list").scrollTop($(".cat_list").scrollTop()+itemTop-listTop);
}
function attrReset(){
	$(".attr_div_bg").remove();
	$('body').css({
		'overflow':'auto'
	})
}


function innerhtmlData(){
	
	var innerhtmlData={
						success: true,
						result: [
						        {
						        id: 28,
						        name: "小房间1",
						        img: "../imgs/comment_pic1.png",
						        attribute1: "16-18平米 1.8米大床房1张",
						        attribute2: "适合女生入住",
						        price: 85.5,
						        num: 20
						        },
						        {
						        id: 29,
						        name: "小房间2",
						        img: "../imgs/comment_pic1.png",
						        attribute1: "16-18平米 1.8米大床房1张",
						        attribute2: "适合女生入住",
						        price: 90.5,
						        num: 10
						        },
						        {
						        id: 30,
						        name: "小房间3",
						        img: "../imgs/comment_pic1.png",
						        attribute1: "16-18平米 1.8米大床房1张",
						        attribute2: "适合女生入住",
						        price: 120.5,
						        num: 30
						        },
						],
						status: null,
						map: null

						};
						return innerhtmlData;
}

function loadinnerhtmlData(){
	var htmldata=innerhtmlData();
	console.log(htmldata.result[1][name]);
	$(".shopping_cat_goods").empty();
	var  html;
	for (var i in htmldata.result) {
		html+= 	'<div class="shopping_cat_item">'
					+		'<div class="shopping_cat_img">'
					+			'<img src="'+htmldata.result[i]["img"]+'"/>'
					+		'</div>'
					+		'<div class="shopping_cat_pro">'
					+			'<div class="shopping_goods_title">'
					+				htmldata.result[i]["name"]
					+			'</div>'
					+			'<div class="shopping_goods_sale">'
			        +    				htmldata.result[i]["attribute1"]
			        +    		'</div>'
			        +    		'<div class="shopping_goods_sale">'
			        +    				htmldata.result[i]["attribute2"]
			        +    		'</div>'
					+			'<div class="shopping_goods_pro">'
//					+				'<div class="shopping_goods_old">'
//					+					'￥500'
//					+				'</div>'
					+				'<div class="shopping_goods_new">'
					+					htmldata.result[i]["price"]
					+					'<button data-goodsid="'+htmldata.result[i]["id"]+'" data-price="'+htmldata.result[i]["price"]+'" class="addToCart" data-name="'+htmldata.result[i]["name"]+'">加入购物车</button>'
					+				'</div>'
					+			'</div>'
					+		'</div>'
					+	'</div>'
					console.log(htmldata.result[i]["name"]);
	}
	$('.shopping_cat_goods').append(html)
}

$("#sel_room_btn").click(function(){
	loadinnerhtmlData();
	addcart();
});
