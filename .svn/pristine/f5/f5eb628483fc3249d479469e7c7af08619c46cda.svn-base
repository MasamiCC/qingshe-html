$(function(){
		//商品减少
		$(".cart_buy").on('tap','.cart-btn-numbox-plus',function(){
			var name=$(this).parent().attr('data-title');
			var price=$(this).parent().attr('data-price');
			var id=$(this).parent().attr('data-id');
			addCart(name,price,id,1,'',0);
		})
		//商品添加
		$(".cart_buy").on('tap','.cart-btn-numbox-minus',function(){
			var name=$(this).parent().attr('data-title');
			var price=$(this).parent().attr('data-price');
			var id=$(this).parent().attr('data-id');
			addCart(name,price,id,-1,'',0);
		})
		//吊起规格
		$(".cart_buy").on('tap','.cart_gg',function(){
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
			$("#attr1").empty();
			for (var i in attrData.result) {
				
				var span=$('<span class="attr"></span>');
				if (i==0) {
					span.addClass('attr_active')
				}
				span.html(attrData.result[i].name).bind({
					'click':function(){
						attrClick(this,1)
					}
				});
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
				$("#attr1").append(span)
				
			}
			$("#attr1 span").eq(0).click();
			$("#cart_goods").val($(this).parents('.cart_item').attr('data-goodsid'));
			mui("#attr").popover("toggle");
		})
		
		
		$("#nav").on('tap','.mui-tab-item',function(){
			mui("#popover").popover("toggle");
		})
		//规格窗口关闭
		$(".attr_close").click(function(){
			mui("#attr").popover("toggle");
		})
		//加入购物车
		$(".add_to_cart").click(function(){
			var name=$('.attr_title').text();
			var attr_id=$("#attr_id").val();
			var attr='';
			$(".attr_active").each(function(){
				if (attr=='') {
					attr+=$(this).text();
				}else{
					attr+=","+$(this).text();
				}
			})
			var id=$("#cart_goods").val();
			var price=parseFloat($(".price span").text())
			addCart(name,price,id,1,attr,attr_id);
			mui("#attr").popover("toggle");
		})
		//清空
		$(".cart_clear").click(function(){
			chartData={};
			loadCartData();
			mui("#popover").popover("toggle");
		})
		
	})
	
	var chartData={};
	if (Object.keys(chartData).length>0) {
		loadCartData();
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
		var goodsid=$(me).parents('.cart_g_list').attr('data-goodsid');
		var attr_id=$(me).parents('.cart_g_list').attr('data-attr-id');
		var name=$(me).parents('.cart_g_list').attr('data-name');
		var attr=$(me).parents('.cart_g_list').find('.goods_attr').text();
		price=parseFloat(price);
		addCart(name,price,goodsid,flg,attr,attr_id)
	}
	
	
	//规格点击事件
	function attrClick(me,flg){
		var _this=me;
		$(_this).siblings().removeClass('attr_active');
		$(_this).addClass('attr_active');
		if (flg==1) {
			$("#attr2").empty();
		}
		var dataAttr=$(_this).attr('data-attr');
		if (dataAttr) {
			var arr=dataAttr.split('|');
			for (var i in arr) {
				var attr=arr[i];
				var arr2=attr.split('-');
				var span=$('<span class="attr"></span>');
				if (i==0) {
					span.addClass('attr_active')
				}
				span.html(arr2[1]).bind({
					'click':function(){
						attrClick(this,2)
					}
				});
				span.attr({
					'data-attr-id':arr2[0],
					'data-attr-price':arr2[2]
				})
				$("#attr2").append(span);
				$("#attr2 span").eq(0).click()
			}
		}else{
			var price=$(_this).attr('data-attr-price');
			var attrId=$(_this).attr('data-attr-id');
			$(".price span").text(price);
			$("#attr_id").val(attrId);
		}
	}

	//根据chartData进行加载购物车以及列表页面
	function loadCartData(){
		console.log(chartData)
		$("#cart_goods_list ul").empty()
		var count=0;
		var totalPrice=0;
		if (Object.keys(chartData).length==0) {
			$('.cart_buy .cart-btn-numbox-minus').fadeOut();
			$('.cart_buy .mui-input-numbox').fadeOut(function(){
				$('.cart_buy .mui-input-numbox').text(0)
			});
		}
		for (var i in chartData) {
			var li=$("<li class='cart_g_list'></li>");
			li.attr({
				'data-goodsid':chartData[i]['id'],
				'data-attr-id':chartData[i]['attr_id'],
				'data-name':chartData[i]['name'],
			})
			var html='<div id="" class="cart_g_left">'+chartData[i]['name'];
			if (chartData[i]['attr']) {
				html+='<p class="goods_attr">'+chartData[i]['attr']+'</p>'
			}
			var price=chartData[i]['price']*chartData[i]['num'];
				html+=	'</div>'
					+	'<div class="cart_g_right" data-goodsid="'+chartData[i]['id']+'" >'
					+		'<span><small>￥</small><span class="price_c">'+price.toFixed(2)+'</span></span>'
					+		'<img src="../image/min@2X.png" class="cart-btn cart-btn-numbox-minus" onclick="cartList(this,-1,'+chartData[i]['price']+')">'
					+		'<span class="mui-input-numbox">'+chartData[i]['num']+'</span>'
					+		'<img src="../image/plus@2X.png" class="cart-btn cart-btn-numbox-plus" onclick="cartList(this,1,'+chartData[i]['price']+')">'
					+	'</div>';
			li.append(html)
			$("#cart_goods_list ul").append(li)
			count+=chartData[i]['num'];
			totalPrice+=price;
			
			
		}
		//变更商品列表
		$(".cart_buy").each(function(){
			var gid=$(this).attr('data-goodsid');
			if (chartData[gid+"-0"]) {
				$(this).find('.cart-btn-numbox-minus').fadeIn();
				$(this).find('.mui-input-numbox').text(chartData[gid+"-0"]['num']).fadeIn();
			} else{
				$(this).find('.cart-btn-numbox-minus').fadeOut();
				$(this).find('.mui-input-numbox').text(0).fadeOut();
			}
			
		})
		$(".buy_count").text(count);
		$(".total_price").text("￥"+parseFloat(totalPrice).toFixed(2));
		if (count>=1) {
			$(".buy_count").fadeIn()
		}else{
			$(".buy_count").fadeOut()
		}
	}