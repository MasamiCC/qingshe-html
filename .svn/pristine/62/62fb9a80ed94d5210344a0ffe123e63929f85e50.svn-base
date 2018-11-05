var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isWeChat=(u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger');//微信终端


function callNative(fname,weChatUrl,data){
	if(isWeChat){
    	location.href=weChatUrl;
    }else if(isAndroid){
    	client.call(fname,data);
	}else if(isiOS){
		calliOS(fname,data);
	}
}

//倒计时 
function countDown(timer,ele,time){
	clearInterval(timer);
	timer=setInterval(function(){
		if(time>1){
			time--;
			$(ele).html(time+'s后重试')
		}else{
			$(ele).html('发送验证码').removeClass('clicked');
			clearInterval(timer);
		}
	},1000)
}