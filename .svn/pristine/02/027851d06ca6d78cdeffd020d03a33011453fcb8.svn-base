	function getGoodsDetailHtml(goodsid){
		var goodsBasicHtml=getGoodsBasicHtml(goodsid);
		var goodsAttrHtml=getGoodsAttrHtml(goodsid);
		var goodsChartHtml=getGoodsChartHtml(goodsid);
		var goodsContHtml=getGoodsContHtml(goodsid);
		return goodsBasicHtml+goodsAttrHtml+goodsChartHtml+goodsContHtml;
	}
	
	function getGoodsBasicHtml(goodsid){
		var item=$('<div></div>');
		item.addClass('detail_item');
		var pic=$('<div class="detail_pic"></div>');
		var picHtml='<img src="../image/carbck.png"/>'
				+	'<div onclick="showNj(this,\''+goodsid+'\')" data-id="'+goodsid+'">'
				+		'5张'
				+		'<div class="" style="display: none;">'
	    		+			'<img src="../image/backtop.png" data-preview-src="" data-preview-group="'+goodsid+'" id="img'+goodsid+'">'
	    		+			'<img src="../image/banner@2X.png" data-preview-src="" data-preview-group="'+goodsid+'" id="">'
	    		+			'<img src="../image/biaozhi.png" data-preview-src="" data-preview-group="'+goodsid+'" id="">'
	    		+		'</div>'
				+	'</div>';
		pic.html(picHtml)
		var basic=$('<div class="detail_basic"></div>');
		var basicHtml='<div class="detail_goods_title">'
				+		'<span class="detail_v detail_qs">轻奢会员专享</span>'
				+		'<span class="detail_v detail_hk">黑卡会员专享</span>'
				+		'<span class="detail_goods_title_c">江南厨房熏鱼'+goodsid+'</span>'
				+	'</div>'
				+	'<div class="detail_sale">'
				+		'月售100 剩余10份'
				+	'</div>'
				+	'<div class="detail_price">'
				+		'<div class="mui-pull-left">'
				+			'<span class="detail_price_n">￥166. <small>50</small> </span>'
				+			'<span class="detail_price_o">￥300</span>'
				+		'</div>'
				+		'<div class="mui-pull-right">'
				+			'<span class="cart_btn" data-id="1" data-title="江南厨房熏鱼" data-price="11.0"><i class="fa fa-shopping-cart"></i>加入购物车</span>'
				+		'</div>'
				+		'<div class="empty"></div>'
				+	'</div>';
		basic.html(basicHtml);
		item.append(pic,basic);
		return item.prop('outerHTML');
	}
	function getGoodsAttrHtml(goodsid){
		var item=$('<div></div>');
		item.addClass('detail_item');
		var item_title=$('<div class="detail_item_title">商品其他属性'+goodsid+'</div>');
		var detail_item_c=$('<div class="detail_item_c"></div>');
		var ul=$('<ul></ul>');
		var ulHtml='<li>房间面积：20-50m2</li>'
				+	'<li>房间设施：浴缸，免费WIFI，24小时热水</li>'
				+	'<li>客房服务：叫醒服务</li>'
		ul.append(ulHtml);
		detail_item_c.append(ul);
		item.append(item_title,detail_item_c);
		return item.prop('outerHTML');
	}
	function getGoodsChartHtml(goodsid){
		var item=$('<div></div>');
		item.addClass('detail_item');
		var item_title=$('<div class="detail_item_title detail_item_title_b">商品评价'+goodsid+'</div>');
		var detail_good='<span class="detail_good">（好评率<span>100%</span>）</span>';
		var pingjiaMore='<span class="mui-pull-right mui-navigate-right">5条评论 </span>';
		item_title.append(detail_good,pingjiaMore);
		var detail_item_c=$('<div class="detail_item_c"></div>');
		var pjHtml='';
		for (var i = 0; i < 3; i++) {
			pjHtml+='<div class="evaluation">'
				+	'<div class="evaluation_user_pic">'
				+		'<img src="../image/se_header1.png">'
				+	'</div>'
				+	'<div class="evaluation_con">'
				+		'<div class="evaluation_user">'
				+			'风吹屁屁凉'
				+			'<span class="mui-pull-right">2017-11-02</span>'
				+		'</div>'
				+		'<div class="evaluation_up_down">'
				+			'<i class="fa fa-thumbs-up"></i>赞了该商品'
				+		'</div>'
				+		'<div class="evaluation_content">'
				+			'<span>#江南厨房熏鱼#</span>'
				+			'不过最近我都是在吃台湾的比较多，例如张君雅小妹妹的甜甜圈，XO酱烤牛肉粒，还有越南的TIPO白巧克力面包干...'
				+		'</div>'
				+		'<div class="evaluation_imgs">'
				+			'<img src="../image/se_evaluation1.png">'
				+			'<img src="../image/se_evaluation1.png">'
				+			'<img src="../image/se_evaluation1.png">'
				+			'<img src="../image/se_evaluation1.png">'
				+		'</div>'
				+	'</div>'
				+'</div>'
		}
		detail_item_c.append(pjHtml);
		
		item.append(item_title,detail_item_c);
		return item.prop('outerHTML');
	}
	function getGoodsContHtml(goodsid){
		var item=$('<div></div>');
		item.addClass('detail_item');
		var item_title=$('<div class="detail_item_title">图文详情'+goodsid+'</div>');
		var detail_item_c=$('<div class="detail_item_c detail_item_c_media"></div>');
		detail_item_c.html('<p>红色至尊版'+goodsid+'</p><img src="../image/at_js.png">')
		item.append(item_title,detail_item_c);
		
		return item.prop('outerHTML');
	}
	function showNj(me,goodsid){
		var previewImageApi = mui.previewImage();
		previewImageApi.open(document.getElementById("img"+goodsid));
	}
	mui.init({
		swipeBack: false
	});
	(function($) {
		$('.mui-scroll-wrapper').scroll({
			indicators: true //是否显示滚动条
		});
		document.getElementById('slider').addEventListener('slide', function(e) {
			var sliders=document.getElementById("slider").querySelectorAll('.mui-slider-item');
			var sliderNumber=e.detail.slideNumber;
			var goodsId=sliders[sliderNumber].getAttribute('data-id');
			if (sliders[sliderNumber].querySelector('.mui-loading')) {
				setTimeout(function() {
					sliders[sliderNumber].innerHTML = getGoodsDetailHtml(goodsId);
					cart_btnClick()
				}, 500);
				
			}
		});
	})(mui);
	
	$(function(){
		$('.mui-control-content').css({
			'maxHeight':$(window).height()-44,
			'overflow':'auto'
		})
		//规格窗口关闭
		$(".attr_close").click(function(){
			mui("#attr").popover("toggle");
		})
		$("#nav").on('tap','.detail_cart',function(){
			mui("#popover").popover("toggle");
		})
		//清空
		$(".cart_clear").click(function(){
			chartData={};
			loadCartData();
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
		cart_btnClick()
	})
	var chartData={};
	loadCartData();
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
		$("#cart_goods_list ul").empty();
		var count=0;
		var totalPrice=0;
		if (Object.keys(chartData).length==0) {
			$('.detail_cart span').fadeOut().html(0);
			$('.total').html('购物车空空如也~').addClass('nodata');
			$('.js_btn').removeClass('active').html('请选择商品')
			mui("#popover").popover("hide");
		}else{
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
			$('.detail_cart span').fadeIn().text(count);
			$('.total').html("￥"+parseFloat(totalPrice).toFixed(2)).removeClass('nodata');
			$('.js_btn').addClass('active').html('去结算')
		}
		//cart_btnClick()
	}
	
	//加入购物车按钮点击
	function cart_btnClick(){
		$('.cart_btn').unbind().on('tap',function(){
			var attr=$(this).attr('data-attr');
			var goodsid=$(this).attr('data-id');
			if(attr){
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
				loadAttrData(attrData,goodsid);
			}else{
				var name=$(this).attr('data-title');
				var price=$(this).attr('data-price');
				var id=$(this).attr('data-id');
				addCart(name,price,id,1,'',0);
			}
			
		})
	}
	function loadAttrData(attrData,goodsid){
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
		$("#cart_goods").val(goodsid);
		mui("#attr").popover("show");
	}
	loadImage()
	function loadImage(){
		console.log(1)
		var wWidth=$(window).width()
		$('.detail_pic>img').css({
			'height':wWidth*9/12
		})
	}
