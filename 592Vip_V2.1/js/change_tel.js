angular.module('changeTel',[]).controller('changeTelCtrl',['$scope',function($scope){
	
	$scope.yan_code="";
	$scope.newtel="";
	$scope.newtelcode="";
	$scope.dosend=function(){
	    var clicked=$('#get_yan_code').hasClass('clicked');
			if (!clicked) {
				$('#get_yan_code').addClass('clicked');
				clearInterval(timer);
				var time=59;
				timer=setInterval(function(){
					if (time>0){
						$("#get_yan_code").html(time+"s后重试");
						time--;
					} else{
						$("#get_yan_code").html("获取验证码");
						$("#get_yan_code").removeClass('clicked')
						clearInterval(timer);
					}
				},1000)
				
				
			}else{
				return false;
			}
		}
		
	
	$scope.dosendyancode=function(){
	    var clicked=$('#get_yan_code1').hasClass('clicked');
			if (!clicked) {
				if($scope.newtel!=""){
	    		$('#get_yan_code1').addClass('clicked');
				clearInterval(timer);
				var time=59;
				timer=setInterval(function(){
					if (time>0){
						$("#get_yan_code1").html(time+"s后重试");
						time--;
					} else{
						$("#get_yan_code1").html("获取验证码");
						$("#get_yan_code1").removeClass('clicked')
						clearInterval(timer);
					}
				},1000)
	    }
			}else{
				return false;
			}
		}
	
	$scope.gonext=function(){
		$("#part1").removeClass("presentactive");
	  $("#part2").siblings().removeClass("active");
	  $("#part2").siblings().addClass("active");
	 $("#part2").removeClass("active presentactive");
	 $("#part2").addClass("active presentactive");
	 $("#change_tel1").css("display","none");
	 $("#change_tel2").css("display","block");
		}
	
	$scope.gonextnext=function(){
		$("#part2").removeClass("presentactive");
	  $("#part3").siblings().removeClass("active");
	  $("#part3").siblings().addClass("active");
	 $("#part3").removeClass("active presentactive");
	 $("#part3").addClass("active presentactive");
	 $("#change_tel2").css("display","none");
	 $("#change_tel3").css("display","block");
		}
	
//	验证手机号
	$scope.checktel=function(){
		if(!(/^1[34578]\d{9}$/.test($scope.newtel))){ 
        alert("手机号码有误，请重填");  
        return false; 
    }
		}
	
	
	
}]);



