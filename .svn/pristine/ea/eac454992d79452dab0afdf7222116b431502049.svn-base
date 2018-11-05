var timer='';
function Countdown(ele,time){
	clearInterval(timer);
	timer=setInterval(function(){
		if (time>1) {
			time--;
			$(ele).html(time+"s后重试");
		} else{
			clearInterval(timer);
			$(ele).html('获取验证码').removeClass('clicked');
		}
	},1000)
}
function sendCodeClick(ele){
	var clicked=ele.hasClass('clicked');
	if (!clicked) {
		$(ele).addClass('clicked');
		var mobile=$("#mobile").val();
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))){
			alert('手机号码格式不正确');
			$(ele).removeClass('clicked');
		}else{
			Countdown('.send_code',10);
		}
	} else{
		return false;
	}
}
$(function(){
	$("#mobile").on('input',function(){
		var val=$(this).val();
		if(val.length==11){
			$('.send_code').addClass('active');
		}
	})
	$('.send_code').bind('click',function(){
		var active=$(this).hasClass('active');
		if (active) {
			sendCodeClick($('.send_code'))
		}else{
			alert('手机号码格式不正确');
		}
	})
	$(".login_btn").on('click','span',function(){
		var id=$(this).attr('id');
		if (id=='login_btn') {
			loginCheck()
		}else if(id=='register_btn'){
			registerCheck()
		}else if(id=='update_btn'){
			updateCheck()
		}
	})
	
})
//登录check
function loginCheck(){
	var mobile=$('#mobile').val();
	var password=$("#password").val();
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))){
		alert("手机号码格式不对");
		$('#mobile').focus();
	}else if(password==''){
		alert("密码不能为空");
		$('#password').focus();
	}else{
		console.log('登录操作')
	}
	
}
//注册check
function registerCheck(){
	var mobile=$('#mobile').val();
	var password=$("#password").val();
	var confirm_password=$("#confirm_password").val();
	var code=$("#code").val()
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))){
		alert("手机号码格式不对");
		$('#mobile').focus();
	}else if(code==''){
		alert("验证码不能为空");
		$('#code').focus();
	}else if(password==''){
		alert("密码不能为空");
		$('#password').focus();
	}else if(confirm_password==''){
		alert("确认密码不能为空");
		$('#confirm_password').focus();
	}else if(password!=confirm_password){
		alert("密码和确认密码不一致");
	}else{
		console.log('注册操作')
	}
}
//修改密码check
function updateCheck(){
	var mobile=$('#mobile').val();
	var password=$("#password").val();
	var confirm_password=$("#confirm_password").val();
	var code=$("#code").val()
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(mobile))){
		alert("手机号码格式不对");
		$('#mobile').focus();
	}else if(code==''){
		alert("验证码不能为空");
		$('#code').focus();
	}else if(password==''){
		alert("密码不能为空");
		$('#password').focus();
	}else if(confirm_password==''){
		alert("确认密码不能为空");
		$('#confirm_password').focus();
	}else if(password!=confirm_password){
		alert("密码和确认密码不一致");
	}else{
		console.log('修改密码操作')
	}
}
var showSlider=false;

