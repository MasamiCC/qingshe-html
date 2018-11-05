$(function(){
		
	$(".attr_close").click(function(){
		mui("#creditPopover").popover("hide");
	})
	
	$("#aa").click(function(){
		mui("#creditPopover").popover("show");
	})
		
});


$(".bcmiddlecon").each(function(){
	$(this).bind({
		"click":function(){
			$(".bcbgcheck").hide()
			$(this).children().last().show();
			var diy=$(this).attr('id');
			if(diy=='bcdiy'){
				$(".inputcon").show();
			}else{
				$(".inputcon").hide();
			}
		}
	});
});
	


$(".bcfooter_conbg2").click(function(){
	var bcmiddlecon=$(".bcbgcheck:visible");
	if(bcmiddlecon.size()>0){
		if(bcmiddlecon.parent().attr('id')=='bcdiy'){
			var value=$("#moneyinput").val();
			if(value<2000){
				mui.alert("请输入大于或者等于2000的额度，谢谢！");
			}
		}
	}else{
		mui.alert("请先选择额度，谢谢！");
	}
	
});	

