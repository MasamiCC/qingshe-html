$(function(){
	
	//stepClick();
	btnClick()
	dcClick();
	$("#code").on('click',function(){
    	var clicked=$(this).hasClass('clicked');
    	if(!clicked){
    		$(this).addClass('clicked');
    		var mobile=$("#myMobile").val();
    		if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(mobile))){
    			alert('手机号码格式不正确');
    			$("#myMobile").focus();
    			$(this).removeClass('clicked')
    		}else{
    			countTime("#code",10)
    		}
    	}
    })
	$(".add_person").on('click',function(){
    	var pSize=$('.person').size();
    	if(pSize<6){
    		var html='<div class="col-xs-12 person">'
					+	'<div class="step_title_s">'
    				+		'<i class="fa fa-users"></i><span>家属一</span><i class="mui-pull-right delPerson fa fa-trash" onclick="delPerson(this)"></i>'
    				+	'</div>'
    				+	'<div class="form-group">'
        			+       ' <label for="" class="col-sm-3 control-label">姓名</label>'
        			+        '<div class="col-sm-8 form_item">'
        			+        	'<input type="text" class="form-control" placeholder="请输入家属姓名" name="name" data-title="姓名">'
        			+        '</div>'
        			+    '</div>'
    				+	'<div class="form-group">'
        			+        '<label for="" class="col-sm-3 control-label">关系</label>'
        			+        '<div class="col-sm-8 form_item">'
        			+        	'<input type="text" class="form-control" placeholder="与申请人关系" name="relationship" data-title="关系">'
        			+        '</div>'
        			+    '</div>'
        			+   	'<div class="form-group">'
        			+        '<label for="" class="col-sm-3 control-label">工作单位</label>'
        			+        '<div class="col-sm-8 form_item">'
        			+        	'<input type="text" class="form-control" placeholder="请输入工作单位或无业、务农" name="workplace" data-title="工作单位">'
        			+        '</div>'
        			+    '</div>'
        			+    '<div class="form-group">'
        			+        '<label for="" class="col-sm-3 control-label">联系方式</label>'
        			+        '<div class="col-sm-8 form_item">'
        			+        	'<input type="text" class="form-control" placeholder="请输入联系电话" name="phone" maxlength="11" data-title="联系方式">'
        			+        '</div>'
        			+    '</div>'
        			+    '<div class="form-group">'
        			+        '<label for="" class="col-sm-3 control-label">月收入</label>'
        			+        '<div class="col-sm-8 form_item">'
        			+        	'<input type="text" class="form-control" placeholder="请输入月收入" name="income" data-title="月收入"><span>元</span>'
        			+        '</div>'
        			+    '</div>'
					+'</div>';
    		$(this).before(html);
    		loadPersonTitle();
    		if(pSize==5){$(".add_person").hide()}
    	}

    })
})
function stepClick(){
	$(".apply_step li").click(function(){
		stepChange($(this).index());
	})
}
function stepChange(index){
	$(".apply_step li").removeClass('active').eq(index).addClass('active');
	$(".apply_form> div").removeClass('active').eq(index).addClass('active')
}
function dcClick(){
	$('.mui-row input[type=radio]').each(function(){
		$(this).on('click',function(){
			var siblings=$(this).parents('.dc_a_list').siblings().size();
			var index=$(this).parent().index();
			if(siblings==2){
				if(index==0){
					$(this).parents('.dc_a_list').next().slideDown()
				}else{
					$(this).parents('.dc_a_list').next().slideUp()
				}
			}
			console.log($(this).parents('.dc_a_list').siblings().size())
		})
	})
}
function loadPersonTitle(){
    	var arr=['一','二','三','四','五'];
    	$('.person').each(function(){
    		var index=$(this).index();
    		if(index>1){
    			$(this).find('.step_title_s span').html('家属'+arr[index-1])
    		}
    	})
    }
var mytimer='';
function countTime(ele,count){
	clearInterval(mytimer);
	mytimer=setInterval(function(){
		if (count>0) {
			$(ele).html(count+"s后重试");
			count--;
		}else{
			clearInterval(mytimer);
			$(ele).removeClass('clicked');
			$(ele).html("获取验证码");
		}
	},1000)
}
function changImg(me){
	console.log(me)
	$(me).parents('li').find('input[type=file]').click()
}
function change (obj) {
    if (!obj.files.length) return;
    if (obj.files.length > 1) {
        mui.alert("只允许上传一张图片!");
        return false;
    }

    var file = obj.files[0];

    var reader = new FileReader();
    reader.onload = function () {
        var result = this.result;    //data:base64     
        $(obj).parent().find('img').attr({
        	src:result
        })
        $(obj).parent().find('div').append('<i class="fa fa-times-circle fa-2x" onclick="delImg(this)"></i>')
        $(obj).parent().find('img').css({
        	height:($(obj).parent().width()-10)*112/178,
        	width:$(obj).parent().width()-10
        })
    };
    reader.readAsDataURL(file);
}
function delImg(me){
	$(me).parent().html('<img src="../imgs/social_add.png" onclick="changImg(this)">')
}
function delPerson(me){
	$(me).parents('.person').remove();
	loadPersonTitle();
	if($('.person').size()<6){
		$(".add_person").show()
	}
}

//上一步、下一步按钮点击事件
function btnClick(){
	$('.btn').each(function(){
		$(this).bind('click',function(){
			var index=$(this).parents('.active').index();//index表示第几个步骤
			var next=$(this).hasClass('next');//下一步
			var prev=$(this).hasClass('prev');//上一步
			if(next){
				//下一步根据需要先进行check在进行切换
				var checked=formCheck(index)
				if(checked){
					stepChange(index+1);
				}
			}else if(prev){
				//上一步直接切换
				stepChange(index-1)
			}
		})
		
	})
}
function formCheck(index){
	//表单check
	switch (index){
		case 0:
			return stepFirstCheck();
			break;
//		case 1:
//			return stepSecondCheck();
//			break;
//		case 2:
//			return stepThirdCheck();
//			break;
//		default:
//			return false;
//			break;
	}
}
//第一步check
function stepFirstCheck(){
	return true;	
}
//第二部check
function stepSecondCheck(){
	return true;	
}
//第三部check
function stepThirdCheck(){
	return true;	
}


//applySuccess('信息提交成功，稍后工作人员将与您联系。')
//applySuccess('您的申请已提交,5个工作日之后可重新提交。')
function applySuccess(msg){
	var html='<div class="layer_cont">'
			+	'<div class=""><h3>提交成功</h3></div>'
			+	'<div class="layer_cont_img"><img src="../imgs/pc_apply_succcess.png"></div>'
			+	'<div class="layer_cont_msg">'+msg+'</div>'
			+	'<div class="btns_div" style="    margin-top: 25px;"><span class="btn next">返回慈善基金</span></div>'
			+	'<div class="layer_cont_conect">联系客服<span>0513-85799999</span></div>'
			+'</div>'
	//自定页
	layer.open({
	  type: 1,
	  title:false,
	  skin: 'layui-layer-demo', //样式类名
	  closeBtn: 1, //不显示关闭按钮
	  anim: 2,
	  area:['600px','400px'],
	  shadeClose: true, //开启遮罩关闭
	  content:html
	});
}
