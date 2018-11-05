$(function(){
	if(isUser){
		loadLeftMenu(getLeftMenu());
	}
})
function getLeftMenu(){
	var data=[
		{name:'个人中心',link:'usercenter.html',key:'usercenter',img:'menu_home.png'},
		{name:'订单管理',link:'my_order.html',key:'',img:'menu_order.png',
		children:[
			{name:'历史订单',link:'my_order.html',key:'my_order'},
			{name:'我的评价',link:'my_evaluate.html',key:'my_evaluate'},
		]},
		{name:'优惠券',link:'my_tickets.html',key:'my_tickets',img:'menu_tickets.png',},
		{name:'个人资料',link:'#',key:'',img:'menu_user.png',
		children:[
			{name:'个人信息',link:'usercenter_userdoc.html',key:'usercenter_userdoc'},
			{name:'地址管理',link:'my_address.html',key:'my_address'},
			{name:'账户安全',link:'safe.html',key:'safe'},
		]},
		{name:'会员中心',link:'memberCenter.html',key:'memberCenter',img:'menu_592vip.png',},
		{name:'店铺收藏',link:'my_collection.html',key:'my_collect',img:'menu_collect.png',},
		
		
//		{name:'layout_user',link:'layout_user.html',key:'layout_user',icon:'fa fa-file'},
	]
	return data;
}
function loadLeftMenu(data){
	var ul=$('<ul></ul>');
	for (var i  in data) {
		var li=$('<li></li>');
		li.addClass('menu_li');
		if (key==data[i]['key']) {
			li.addClass('active');
		}
		if(data[i]['children']){
			li.append('<img src="../imgs/'+data[i]['img']+'"/><span class="menu_title">'+data[i]['name']+'</span>');
			var children=data[i]['children'];
			var ul2=$("<ul></ul>");
			for (var j in children) {
				var li2=$('<li></li>');
				
				li2.addClass('menu_li2');
				if (key==children[j]['key']) {
					li2.addClass('active');
				}
				li2.append('<a href="'+children[j]['link']+'">'+children[j]['name']+'</a>');
				ul2.append(li2)
			}
			li.append(ul2)
		}else{
			li.append('<img src="../imgs/'+data[i]['img']+'"/><span class="menu_title"><a href="'+data[i]['link']+'">'+data[i]['name']+'</a></span>');
		}
		
		ul.append(li)
	}
	$('.left_menu').empty().append(ul);
}

function updateMobile(){
	//iframe层
	index=layer.open({
	  type: 2,
	  title: '更换手机',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['500px', '300px'],
	  content: 'mobile_update.html' //iframe的url
	});
}
function updatePassword(){
	index=layer.open({
	  type: 2,
	  title: '修改密码',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['500px', '300px'],
	  content: 'password_update.html' //iframe的url
	});
}
function updateHeadImage(){
	index=layer.open({
	  type: 2,
	  title: '更新头像',
	  shadeClose: true,
	  shade: 0.8,
	  area: ['50%', '60%'],
	  content: 'headImage_update.html' //iframe的url
	});
}
