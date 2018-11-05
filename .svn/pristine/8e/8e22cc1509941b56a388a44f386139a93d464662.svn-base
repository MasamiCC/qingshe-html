var app = angular.module('myAddress', []);
app.controller('addressCtrl', function($scope) {
	$scope.showMask=false;
    $scope.addressLists ='' ;
    $scope.getAddress=function(){
    	//ajax请求数据，并赋值给$scope.addressLists
    	$scope.addressLists=[
	    	{id:1,name:'蒋爱军',address:'四海家园 复兴路',sex:0,address_detail:'12号楼315',phone:'18806297146'},
	    	{id:2,name:'蒋爱军2',address:'四海家园 复兴路2',sex:1,address_detail:'13号楼315',phone:'15995855970'},
	    	{id:3,name:'蒋爱军3',address:'四海家园 复兴路3',sex:0,address_detail:'星湖101设计创意中心8座',phone:'18806297146'},
	    	{id:4,name:'蒋爱军4',address:'四海家园 复兴路4',sex:1,address_detail:'13号楼315',phone:'15995855970'},
	    	{id:5,name:'蒋爱军5',address:'四海家园 复兴路5',sex:0,address_detail:'12号楼315',phone:'18806297146'},
	    	{id:6,name:'蒋爱军6',address:'四海家园 复兴路6',sex:1,address_detail:'13号楼315',phone:'15995855970'},
	    	{id:7,name:'蒋爱军7',address:'四海家园 复兴路7',sex:0,address_detail:'12号楼315',phone:'18806297146'},
//	    	{id:8,name:'蒋爱军8',address:'四海家园 复兴路8',sex:1,address_detail:'13号楼315',phone:'15995855970'},
	    	{id:9,name:'蒋爱军9',address:'四海家园 复兴路9',sex:0,address_detail:'12号楼315',phone:'18806297146'},
	  		{id:10,name:'蒋爱军10',address:'四海家园 复兴路10',sex:1,address_detail:'13号楼315',phone:'15995855970'},
	    ]
    }
    $scope.addAddress=function(){
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
    $scope.editAddress=function(address){
    	//iframe层
		index=layer.open({
		  type: 2,
		  title: '编辑地址',
		  shadeClose: true,
		  shade: 0.8,
		  area: ['50%', '60%'],
		  content: 'add_address.html' //iframe的url
		});
    	
    }
    $scope.removeAddress=function(address){
    	//ajax请求删除数据，完成调用$scope.getAddress（）；
    	console.log('删除操作')
    	console.log(address)
    }
    
});


var app2=angular.module('addAddress',[]);
app2.controller('addCtrl',function($scope){
    $scope.address ='' ;
    $scope.title='';
    $scope.loadAddress=function(){
    	var i=0;
    	if (i>0) {
    		$scope.getaddAddress();
    		$scope.title='编辑';
    	}else{
    		$scope.title='新增';
    	}
    };
    $scope.getaddAddress=function(){
    	$scope.address={
    		userName:'蒋爱军',
    		sex:1,
    		area:'江苏省南通市经济开发区',
    		addressId:'12',
    		mobile:'18806297146',
    		address:'通胜大道188号',
    		isDefault:true,
    	}
    };
    $scope.submitAddress=function(address){
		//根据address.addressId进行保存从操作
		$scope.address=address;
		$scope.address.area=$("#address").val();
		$scope.address.full_address=$("#full_address").val();
		
		console.log($scope.address)
		
    };
    $scope.formReset=function(){
    	var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
		parent.layer.close(index); //再执行关闭   
    }
    
    
})
