
var app2=angular.module('grouth',[]);
app2.controller('grouthCtrl',function($scope){
    $scope.grouthList ='' ;
    $scope.grouth='';
    $scope.getgrouthList=function(){
    	$scope.grouthList=[
    		{name:'尊贵图标',pic:'../imgs/qy_vip.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'轻奢沙龙',pic:'../imgs/qy_sl.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'专线服务',pic:'../imgs/qy_service.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'生日礼包',pic:'../imgs/qy_birth.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'车位预留',pic:'../imgs/qy_car.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'社区权限',pic:'../imgs/qy_sq.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'专享折扣',pic:'../imgs/qy_zk.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'在线预约',pic:'../imgs/qy_online.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'评价积分',pic:'../imgs/qy_pj.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    		{name:'新功能体验',pic:'../imgs/qy_new.png',intro:'每月金牌和钻石会员有机会获得的礼包。发放对象：已实名认证成功且上月25日当天会员级别为金牌钻石的会员'},
    	];
    	$scope.grouth=2000;
    };
    $scope.showList=function(){
    	index=layer.open({
		  type: 2,
		  title: '',
		  shadeClose: true,
		  shade: 0.8,
		  area: ['400px', '500px'],
		  content: 'grouth_list.html' //iframe的url
		});
    }
    
    
})
