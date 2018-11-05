var app = angular.module('myCollect', ['mePagination']);
app.controller('collectCtrl', function($scope) {
	var a =function(){
		$scope.collectLists=[
	    	{id:1,shopName:'江南厨房1江南厨房1江南厨房1',shopImage:'../imgs/comment_pic1.png',shopScore:0,shopSale:'1'},
	    	{id:2,shopName:'江南厨房12',shopImage:'../imgs/Benefits_3.png',shopScore:1,shopSale:'2'},
	    	{id:3,shopName:'江南厨房13',shopImage:'../imgs/comment_pic3.png',shopScore:2,shopSale:'3'},
	    	{id:4,shopName:'江南厨房14',shopImage:'../imgs/comment_pic1.png',shopScore:3,shopSale:'4'},
	    	{id:5,shopName:'江南厨房15',shopImage:'../imgs/comment_pic2.png',shopScore:4,shopSale:'5'},
	    	{id:6,shopName:'江南厨房16',shopImage:'../imgs/comment_pic3.png',shopScore:5,shopSale:'6'},
	    	{id:7,shopName:'江南厨房17',shopImage:'../imgs/comment_pic1.png',shopScore:4,shopSale:'7'},
	    	{id:8,shopName:'江南厨房18',shopImage:'../imgs/comment_pic2.png',shopScore:3,shopSale:'8'},
	    	{id:9,shopName:'江南厨房19',shopImage:'../imgs/comment_pic3.png',shopScore:2,shopSale:'9'},
	  		{id:10,shopName:'江南厨房20',shopImage:'../imgs/comment_pic1.png',shopScore:1,shopSale:'10'},
	    ]
	}
	$scope.showMask=false;
    $scope.collectLists ='' ;
    $scope.myPage={
            		currentPage:1,//访问第几页数据，从1开始
            		totalItems:0,//数据库中总共有多少条数据
            		itemsPerPage: 5,//默认每页展示多少条数据，可更改
            		pagesLength: 15,
            		perPageOptions: [10, 20, 30, 40, 50,60]//可选择的每页展示多少条数据
        	  };
    //监测当页码。总数据，每页展示数据个数变化时，重新加载数据
 	$scope.$watch(function () {
     		return $scope.myPage.itemsPerPage+' '+$scope.myPage.currentPage+' '+$scope.myPage.totalItems;
 	},a);
    $scope.getCollect=function(){
    	//ajax请求数据，并赋值给$scope.addressLists
    	$scope.myPage.currentPage=1;
    	$scope.myPage.totalItems=10;
    	$scope.collectLists=[
	    	{id:1,shopName:'江南厨房1江南厨房1江南厨房1',shopImage:'../imgs/comment_pic1.png',shopScore:0,shopSale:'1'},
	    	{id:2,shopName:'江南厨房12',shopImage:'../imgs/Benefits_3.png',shopScore:1,shopSale:'2'},
	    	{id:3,shopName:'江南厨房13',shopImage:'../imgs/comment_pic3.png',shopScore:2,shopSale:'3'},
	    	{id:4,shopName:'江南厨房14',shopImage:'../imgs/comment_pic1.png',shopScore:3,shopSale:'4'},
	    	{id:5,shopName:'江南厨房15',shopImage:'../imgs/comment_pic2.png',shopScore:4,shopSale:'5'},
	    	{id:6,shopName:'江南厨房16',shopImage:'../imgs/comment_pic3.png',shopScore:5,shopSale:'6'},
	    	{id:7,shopName:'江南厨房17',shopImage:'../imgs/comment_pic1.png',shopScore:4,shopSale:'7'},
	    	{id:8,shopName:'江南厨房18',shopImage:'../imgs/comment_pic2.png',shopScore:3,shopSale:'8'},
	    	{id:9,shopName:'江南厨房19',shopImage:'../imgs/comment_pic3.png',shopScore:2,shopSale:'9'},
	  		{id:10,shopName:'江南厨房20',shopImage:'../imgs/comment_pic1.png',shopScore:1,shopSale:'10'},
	    ]
    }
    $scope.cancelCollect=function(){
    	//iframe层
		index=layer.open({
		  type: 2,
		  title: '新增地址',
		  shadeClose: true,
		  shade: 0.8,
		  area: ['50%', '60%'],
		  content: 'add_address.html' //iframe的url
		});
    	
    }
    $scope.showCollect=function(collect){
    	console.log(collect)
    }
    $scope.cancelCollect=function(collect){
    	console.log(collect)
    }
    
});
app.directive('hello', function() {
     return {  
            restrict : 'A',  
            controller : [ '$scope', '$element', '$timeout', function($scope, $element, $timeout) {  
                $timeout(function() {  
                      console.log()
                    $.fn.raty.defaults.path = '../imgs/';  
                      
                    $($element).raty({  
                        number : 5,  
                        score : $element[0].getAttribute('data-score'),  
                        half : false,  
                        size : 30  ,
                        readOnly:true,
						starOn:'icon1.png',
						starOff:'icon2.png',
						starHalf:'icon3.png',
                    });  
  
                }, 100);  
            } ]  
        };  
});

