mui.init()
    $(function(){
		abc();
		var type=GetQueryString('type');
		if(ele_datas[type]){
			loadLine(ele_datas[type]['shopList'])
		}
    })
    function abc(){
    	$(".doshop").fadeIn()
    }
    function loadLine(datas){
//	console.log(datas)
	$('.doshop').empty()
    	for (var i in datas) {
//  		console.log(i)
			
    		
			var divhtml='<div data-id='+datas[i]["id"]+' class="';
			 if(i%2=="0"){
					    	 divhtml+='driveInRight shopline_list">';
					    }else{
					    	divhtml+='driveInLeft shopline_list odd_shopline_list">'
					    }

					    
				    divhtml+='<a href="http://wx.592vip.com/shop/getShopDetailNew?shopid='+datas[i]["id"]+'">'

				    divhtml+='<a href="javascript:void(0)">'

				   if(i!=="1"){ 
				        divhtml+=   '<div class="shop_l">'
					    +			'<div class="shop_l_con">'
						+    			'<div class="lists">'
						+    				'<div class="list_first">'
						+    					'<div class="list_icon"><img src="../image/shopname.png"/></div>'
						+    				'</div>'
						+    				'<div class="shop_name">'+datas[i]['shopName']+'</div>'
						+    			'</div>'
						+    			'<div class="lists secondlist">'
						+    				'<div class="list_first">'
						+    					'<div class="list_icon"><img src="../image/promotion.png"/></div>'
						+    				'</div>'
						+    				'<div class="shop_name">'+datas[i]['shopMsg']+'</div>'
						+    			'</div>'
						+    			'<div class="lists thirdlist">'
//						+    				'<div class="list_first">'
//						+				'<div class="">'
						+					'<span class="ele_a">'
				    	+						datas[i]['ele_actions_s']
				    	+					'</span>'
						+				'</div>'
//						+   				'</div>'
//						+    			'</div>'
					    +			'</div>'
					    +		'</div>'
					   	+ 	'<div class="shop_r">'
					    +			'<div class="shop_r_con">'
					    +				'<div class="shop_r_con_l">'
					    +					'<div class="shop_r_con_l_con">'
					    +						'<img src="../image/'+datas[i]["shopImg2"]+'"/>'
					    +					'</div>'
					    +				'</div>'
					    +				'<div class="shop_r_con_r">'
					    +					'<div class="shop_r_con_r_con">'
					    +						'<div class="">'
					    +							'<img src="../image/'+datas[i]["id"]+'_3.png"/>'
					    +						'</div>'
					    +						'<div class="">'
					    +							'<img src="../image/'+datas[i]["shopImg1"]+'"/>'
					    +						'</div>'
					    +					'</div>'
					    +				'</div>'
					    +			'</div>'
					    +		'</div>'
					    +        '</a>'
					    +	'</div>'
					   }else{
					   	divhtml+= '<div class="shop_l">'
					    +			'<div class="shop_r_con shop_r_con2">'
					    +				'<div class="shop_r_con_l">'
					    +					'<div class="shop_r_con_l_con">'
					    +						'<img src="../image/'+datas[i]["shopImg2"]+'"/>'
					    +					'</div>'
					    +				'</div>'
					    +				'<div class="shop_r_con_r">'
					    +					'<div class="shop_r_con_r_con">'
					    +						'<div class="">'
					    +							'<img src="../image/'+datas[i]["id"]+'_3.png"/>'
					    +						'</div>'
					    +						'<div class="">'
					    +							'<img src="../image/'+datas[i]["shopImg1"]+'"/>'
					    +						'</div>'
					    +					'</div>'
					    +				'</div>'
					    +			'</div>'
					    +		'</div>'
					    +   '<div class="shop_r">'
					    +			'<div class="shop_l_con shop_1_con2">'
						+    			'<div class="lists">'
						+    				'<div class="list_first">'
						+    					'<div class="list_icon"><img src="../image/shopname.png"/></div>'
						+    				'</div>'
						+    				'<div class="shop_name">'+datas[i]['shopName']+'</div>'
						+    			'</div>'
						+    			'<div class="lists secondlist">'
						+    				'<div class="list_first">'
						+    					'<div class="list_icon"><img src="../image/promotion.png"/></div>'
						+    				'</div>'
						+    				'<div class="shop_name">'+datas[i]['shopMsg']+'</div>'
						+    			'</div>'
						+    			'<div class="lists thirdlist">'
//						+    				'<div class="list_first">'
//						+				'<div class="">'
						+					'<span class="ele_a">'
				    	+						datas[i]['ele_actions_s']
				    	+					'</span>'
//						+				'</div>'
//						+   				'</div>'
						+    			'</div>'
					    +			'</div>'
					    +		'</div>'
					   }
					   divhtml+=		'</a>' 
		
		
//		 dolocation(datas);
		
			$('.doshop').append(divhtml);
			
    	}
    	listClick()
//  	$('.shopline_list').on('click',function(){
//  (function(){
//      location.href='http://wx.592vip.com/shop/getShopDetailNew?shopid='+datas[i]['id'];
//      console.log(data[i]['id']);
//  })();
//})
//  	
//  	  $(".shopline_list").on("click",function(){
//						alert(1);
//						location.href='http://wx.592vip.com/shop/getShopDetailNew?shopid='+datas[i]["id"];
//						console.log(datas[i]["id"]);
//	 		 });
	 
//  }
  
  
// function dolocation(datas){
//		   $('.shopline_list').on('click',function(i){
//  location.href='http://wx.592vip.com/shop/getShopDetailNew?shopid='+datas[i]['id'];
//  console.log(data[i]['id']);
//})
  }
  
  
  
 

//获取URL参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


function listClick(){
	$('.doshop').on('tap','.shopline_list',function(){
		var shopid=$(this).attr('data-id');
		console.log(shopid)
		if(GetQueryString('flg')==1){
			var u = navigator.userAgent;
		    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		    if(isAndroid){
				client.goShop(shopid);    
			}else if(isiOS){
				goShop(shopid); 
			}
		}else{
			window.location.href='http://wx.592vip.com/shop/getShopDetailNew?shopid='+shopid;
		}
	})
}

