$(function(){
	$("#content_wxzf").hide();
	$("#content_zfbzf").hide();	
	
	$('#content_money').blur(function(){
	
	var money=$("#content_money").val()*1;
	console.log("moeny"+money);
	if(isNaN(money)){
		alert("您输入的不是一个数字，请重新输入，谢谢！");
	}else{
		var showMoney=$("#content_show");
		var num=showMoney.val(money);
		num.toFixed(2)
	}
	});

$('#content_wx').click(function(){
         $("#content_wxzf").show();
         $("#content_zfbzf").hide();
});
$('#content_zfb').click(function(){
         $("#content_zfbzf").show();
         $("#content_wxzf").hide();
     });



});

