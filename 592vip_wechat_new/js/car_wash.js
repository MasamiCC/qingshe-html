var w_root='http://114.215.25.249/';

function userLogin(account,password){
	console.log(account)
	$.ajax({
		type:"get",
		url:w_root+"StandardApiAction_login.action?account="+account+"&password="+password,
		async:true,
		success:function(data){
			console.log(data)
		}
	});
}
