$(function(){
	//点击退出登录
	var loginOut
	$(document).on('click','.login_out',function(){
		loginOut = layer.open({
		  type: 1,
		  area: '500px',
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "<div class='login_out_nav'><h4 class='title'>确定退出当前账号吗？</h4><div class='btn_area'><a class='btn confirm fl'>确定</a><a class='btn cancel fr'>取消</a></div></div>"
		});
	})
	
	//点击取消
	$(document).on('click','.login_out_nav .cancel',function(){
		layer.close(loginOut);
		layer.close(delUser);
	})
	
	
	//点击修改密码
	var changePassword;
	$(document).on('click','.change_password',function(){
		changePassword = layer.open({
		  type: 2,
		  area: ['500px', '580px'],
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "../html/components/change_password.html"
		});
	})

	// 点击新增账号
	var addTenant;
	$(document).on('click','.add_tenant',function(){
		changePassword = layer.open({
		  type: 2,
		  area: ['500px', '800px'],
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "../html/components/add_tenant.html"
		});
	})
		// 点击修改信息
		var changeUser;
		$(document).on('click','.change_user',function(){
			changeUser = layer.open({
				type: 2,
				area: ['500px', '670px'],
				title: false,
				closeBtn: 0,
				shade: 0.5,
				shadeClose: true,
				content: "../html/components/change_user.html"
			});
		})
	// 点击删除账号
	var delUser
	$(document).on('click','.del_user',function(){
		delUser = layer.open({
		  type: 1,
		  area: '500px',
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "<div class='login_out_nav'><h4 class='title'>确定删除<span>顾小白(<span>17601525654</span>)</span>账号吗？</h4><div class='btn_area'><a class='btn confirm fl'>确定</a><a class='btn cancel fr'>取消</a></div></div>"
		});
	})

	// 存在未填写的信息
	var nullValue
	$(document).on('click','.null_value',function(){
		nullValue = layer.open({
		  type: 1,
		  area: ['360px','180px'],
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "<div class='null_value_nav'><h4 class='title'>存在未填写的信息</h4><div class='l_btn_area'><a class='btn confirm'>确定</a></div></div>"
		});
	})
	// 点击查看详情
	var userDetails
	$(document).on('click','.user_details',function(){
		userDetails = layer.open({
		  type: 2,
		  area: ['400px', '430px'],
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "../html/components/user_details.html"
		});
	})

	// 两次密码不一致
	var diffPass
	$(document).on('click','.diff_pass',function(){
		diffPass = layer.open({
		  type: 1,
		  area: ['360px','180px'],
		  title: false,
		  closeBtn: 0,
		  shade: 0.5,
		  shadeClose: true,
		  content: "<div class='diff_pass_nav'><h4 class='title'>您输入的密码不一致，请重新输入</h4><div class='l_btn_area'><a class='btn confirm'>确定</a></div></div>"
		});
	})
})
