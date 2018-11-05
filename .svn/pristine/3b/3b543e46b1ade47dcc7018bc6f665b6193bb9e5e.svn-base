var app = angular.module('myEvaluate', []);
app.controller('evaluateCtrl',function($scope){
	$scope.evaluateList='';
	$scope.getDate=function(){
		$scope.evaluateList=[{
			id:1,
			time:'1504675813',
			shopId:'123',
			shopName:'江南厨房1',
			shopImage:'../imgs/commenttouxiang2.png',
			order_goods:[
				{goodsid:1,name:'黄焖鸡米饭小份-微辣',count:1},
				{goodsid:2,name:'康师傅矿泉水',count:1}
			],
			evaluate:'是正品，做出的米饭口感很不错。没想到这个价已是买的第二只电饭煲了，型号也一样，所以操作很容不错，是正品，做出的米饭口感很不错。没想到这个价质量还可以，功能很不错，熬粥方便！目前没怎么使用电饭煲外观造型很大气',
			evaluate_pics:[
				'https://www.592vip.com:91/ordercomment/3002/ca93a701-72ce-4d2d-83f6-73ae7f248f81.jpeg'
			]
		},{
			id:2,
			time:'1505675813',
			shopId:'11',
			shopName:'江南厨房2',
			shopImage:'../imgs/commenttouxiang3.png',
			order_goods:[
				{goodsid:1,name:'黄焖鸡米饭小份-微辣',count:1},
				{goodsid:2,name:'康师傅矿泉水',count:1}
			],
			evaluate:'是正品饭煲了，型号也一样，所以操作很容不错型很大气',
			evaluate_answer:'好好',
			evaluate_pics:[
				'../imgs/comment_pic1.png','../imgs/comment_pic2.png','../imgs/comment_pic3.png','../imgs/commenttouxiang3.png','../imgs/commenttouxiang2.png'
			]
			
		},{
			id:3,
			time:'1506675813',
			shopId:'1234',
			shopName:'江南厨房3',
			shopImage:'../imgs/commenttouxiang2.png',
			order_goods:[
				{goodsid:1,name:'黄焖鸡米饭小份-微辣',count:1},
				{goodsid:2,name:'康师傅矿泉水',count:1}
			],
			evaluate:'是正品饭煲了，型号也一样，所以操作很容不错型很大气',
			evaluate_answer:'好好好',
			evaluate_pics:[
				'../imgs/comment_pic3.png','../imgs/comment_pic2.png',
			]
			
		},{
			id:4,
			time:'1506675813',
			shopId:'1235',
			shopName:'江南厨房3',
			shopImage:'../imgs/commenttouxiang2.png',
			order_goods:[
				{goodsid:1,name:'黄焖鸡米饭小份-微辣',count:1},
				{goodsid:2,name:'康师傅矿泉水',count:1},
				{goodsid:1,name:'黄焖鸡米饭小份-微辣',count:1},
			],
			evaluate:'是正品饭煲了，型号也一样，所以操作很容不错型很大气',
			evaluate_answer:'好好好好',
			evaluate_pics:[]
			
		},
		]
	}
	$scope.showEvaluate=function(evaluate){
		console.log(evaluate);
		//iframe层
		index=layer.open({
		  type: 2,
		  title: '评价详情',
		  shadeClose: true,
		  shade: 0.8,
		  area: ['50%', '60%'],
		  content: 'evaluate_detail.html' //iframe的url
		});
	}
	$scope.showImage=function(src){
		//iframe层
		var html='<p style="text-align:center;padding:10px"> <img src="'+src+'" style="max-width:100%"/></p>';
		index=layer.open({
		  type: 1,
		  title:'图片预览',
		  skin: 'layui-layer-rim', //加上边框
		  area: 'auto', //宽高
		  maxWidth :600,
		  content: html
		});
	}
})
app.filter('date', function() { //可以注入依赖
    return function(text) {
    	console.log(new Date(text));
    	var date=new Date(text*1000);
    	var m=date.getMonth();
    	m=(m+1)<10?'0'+(m+1):(m+1);
    	var d=date.getDate();
    	d=d<10?'0'+d:d;
        return m+'-'+d;
    }
});
app.filter('time', function() { //可以注入依赖
    return function(text) {
    	var date=new Date(text*1000);
    	var h=date.getHours();
    	h=h<10?'0'+h:h;
    	var m=date.getMinutes();
        return h+':'+m;
    }
});



