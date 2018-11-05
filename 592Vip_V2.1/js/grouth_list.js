
var app2=angular.module('grouthList',[]);
app2.controller('grouthListCtrl',function($scope){
    $scope.grouthList ='' ;
    $scope.loadgrouthList=function(){
    	$scope.grouthList=[
    		{id:'1',time:'1504851075000',num:'12',type:'消费'},
    		{id:'2',time:'1554851075000',num:'125',type:'消费'},
    		{id:'3',time:'1554851075000',num:'5',type:'消费'},
    		{id:'4',time:'1554851075000',num:'10',type:'消费'},
    		{id:'5',time:'1554851075000',num:'11',type:'消费'},
    		{id:'6',time:'1554851075000',num:'12',type:'消费'},
    		{id:'7',time:'1554851075000',num:'13',type:'消费'},
    		{id:'8',time:'1554851075000',num:'15',type:'消费'},
    		{id:'8',time:'1554851075000',num:'22',type:'消费'},
    		{id:'8',time:'1554851075000',num:'5',type:'消费'},
    	];
    };
    
    
})
