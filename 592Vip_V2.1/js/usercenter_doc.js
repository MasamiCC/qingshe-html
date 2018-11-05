$(function(){
//	function pickedFunc(){
//	$dp.$('d523_y').value=$dp.cal.getP('y');
//	$dp.$('d523_M').value=$dp.cal.getP('M');
//	$dp.$('d523_d').value=$dp.cal.getP('d');
//	}
	
	var  index='';
	$('#group_change').on('click', function(){
		index=layer.open({
			  type: 1,
			  title:'修改用户名',
//			  closeBtn: 0,
			  shadeClose: true,
//			  skin: 'yourclass',
			  area: ['380px', '205px'],
			  content: '<div class="username">'
			  		+	'<div class="">'
					+	'<input type="text" name="" id="username" value="" placeholder="请输入新的用户名"/>'
					+	'</div>'
					+	'<div class="user_icons">'
					+		'<span class="icon_confirm" id="icon_confirm" onclick="layerClose()">确定</span><span class="icon_cancel" id="icon_cancel" onclick="layerClose()">取消</span>'
					+	'</div>'
					+'</div>'
			});
			


			$("#icon_confirm").click(function(){
		     if(""==$("#username").val()){
		     	alert("请输入正确的用户名，谢谢！");
		     }
		     
		});
		$("#icon_cancel").click(function(){
		    if (confirm("您确定取消吗？")==true){ 
		    	return ture;
		    } 
		    else{ 
		    	return false;
		    } 
		});
			
     });

//layer.confirm('您确定取消吗？', {
//			  btn: ['确定','取消'] //按钮
//			}, function(){
//				if(""==$("#username").val()){
//					layer.msg('请输入正确的用户名，谢谢！', {icon: 1});
//		     }
//			}, function(){
//			  layer.msg('您确定取消吗？', {
//			    time: 20000, //20s后自动关闭
//			    btn: ['确定', '取消']
//			  });
//			});
//		
		
});
function layerClose(){
		 	window.parent.location.reload();
			var index = parent.layer.getFrameIndex(window.name);
			parent.layer.close(index);
		 }