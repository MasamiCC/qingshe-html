var menu={
	live:{
		name:'生活',
		image:'../imgs/movie.png',
		children:[
			{name:'KTV',link:''},
			{name:'电影',link:''},
			{name:'电玩/游乐场',link:''},
			{name:'高档会所',link:''},
			{name:'棋牌',link:''},
			{name:'网咖',link:''},
			
		]
	},
	food:{
		name:'美食',
		image:'../imgs/laihuicui.png',
		children:[
			{name:'中餐',link:''},
			{name:'西餐',link:''},
			{name:'特色餐',link:''},
			{name:'自助餐',link:''},
			{name:'亚洲菜系',link:''},
			{name:'甜品',link:''}
		]
	},
	hotel:{
		name:'酒店',
		image:'../imgs/hotel.png',
		children:[
			{name:'星级酒店',link:''},
			{name:'商务型',link:''},
			{name:'度假型',link:''},
			{name:'会议型',link:''},
			{name:'观光型',link:''},
		]
	},
	travel:{
		name:'旅游',
		image:'../imgs/tourist.png',
		children:[
			{name:'商游',link:''},
			{name:'特色游',link:''},
			{name:'度假',link:''},
			{name:'温泉',link:''},
		]
	},
	dingzhi:{
		name:'定制',
		image:'../imgs/shoe.png',
		children:[
			{name:'珠宝玉石',link:''},
			{name:'工艺品',link:''},
			{name:'服饰',link:''},
			{name:'出行',link:''},
			{name:'化妆品',link:''},
		]
	}
}
function catMenu(menu){
	var div=$('<div></div>');
	div.addClass('nav');
	var ul=$("<ul></ul>");
	ul.addClass('lies')
	for (var i in menu) {
		var li=$("<li></li>");
		li.addClass('navlis');
		var ul_bottom=$("<ul></ul>");
		ul_bottom.addClass('ul_bottom');
		
		var li1=$("<li></li>");
		li1.addClass('paddingli');
		li1.append('<span><img src="'+menu[i]['image']+'"></span>&nbsp;<span class="yellow">'+menu[i]['name']+'</span><span class="navright"><img src="../imgs/right.png"></span>')
		ul_bottom.append(li1);
		
		var li2=$("<li></li>");
		li2.addClass('paddingli li2');
		if (menu[i]['children'].length>0) {
			var inlineli=$("<ul></ul>");
			inlineli.addClass('inlineli');
			var children=menu[i]['children'];
			for (j in children) {
				var lis='<li><a href="'+children[j]['link']+'">'+children[j]['name']+'</a></li>';
				inlineli.append(lis);
			}
			li2.append(inlineli);
		}
		ul_bottom.append(li2);
		
		li.append(ul_bottom);
		ul.append(li);
	}
	div.append(ul);
	$(".type").append(div);
}
$(function(){
	loadNav(navData);
	$('.type').click(function(){
		var size=$('.type .nav').size();
		if (size>0) {
			$('.type .nav').toggle('show');
		} else{
			//catMenu(menu);
		}
	});
	$('.lis').each(function(){
			$(this).bind({
				click:function(){
					if(!$(this).hasClass('totalactive')){
						$('.lis').removeClass('totalactive');
						$(this).addClass('totalactive');
					}
				}
			})
		})
	//登录注册跳转
	$(".login").on('click','.white',function(){
		var index=$(this).index();
		var url=index==0?'login.html':'register.html';
		location.href=url;
	})
	$(window).scroll(function(){
		var Wwidth=$(window).width();
		if (Wwidth>1400) {
			var Wheight=$(window).height();
			var Stop=$(window).scrollTop();
			if (Stop>200) {
				$(".right_sider").fadeIn()
			}else{
				$(".right_sider").fadeOut()
			}
		}else{
			$(".right_sider").fadeOut()
		}
		
	})
	loadRightSider();
})

var navData=[
	{name:'首页',link:'homepage.html'},
	{name:'黑卡俱乐部',link:'blackCard.html'},
	{name:'奢探',link:'luxury_list.html'},
	{name:'沙龙',link:'#'},
	{name:'慈善基金',link:'charitable_list.html'},
	{name:'轻奢资讯',link:'information.html'},
]
		
function loadNav(navData){
	var pathname=window.location.pathname;
	pathname=pathname.substr(pathname.lastIndexOf('/')+1,pathname.length);
	var ul=$('<ul class="ul"></ul>');
	for (var i  in navData) {
		var li=$("<li></li>");
		li.addClass('lis');
		li.html('<a href="'+navData[i]['link']+'">'+navData[i]['name']+'</a>');
		if (navData[i]['link']==pathname) {
			li.addClass('totalactive');
		} 
		ul.append(li)
		
	}
	$(".ul").replaceWith(ul)
}
var showSlider=true;
function loadRightSider(){
	if (showSlider) {
		var html='<div class="right_sider">'
				+	'<ul>'
				+		'<li id="down_load"><span style="color:#efc56d;display:block;font-size:13px;line-height:1.5;text-align:center">APP下载</span>'
				+			'<img src="../imgs/down_load.png"/>'
				+		'</li>'
				+		'<li id="check">'
				+			'<img src="../imgs/check.png" alt="" />'
				+		'</li>'
				+		'<li id="shake">'
				+			'<img src="../imgs/shake.png"/>'
				+		'</li>'
				+		'<li id="top">'
				+			'<img src="../imgs/top.png"/>'
				+		'</li>'
				+	'</ul>'
				+'</div>';
		$('body').append(html);
		$(".right_sider").on('click','li',function(){
			console.log($(this).attr('id'))
			var id=$(this).attr('id');
			if (id=='top') {
				$(window).scrollTop(0)
			}
		})
	}
	
}


function createLoginForm(){
	var  html='<div class="login_d login_right">'
				+	'<div class="">'
//				+		'<div class="login_title">'
//				+			'用户登录'
//				+		'</div>'
				+		'<div class="login_form">'
				+			'<form action="" method="post">'
				+				'<div class="">'
				+					'<span><i class="fa fa-user"></i></span><input type="tel" name="" id="mobile" maxlength="11" value="" placeholder="请输入手机号码">'
				+				'</div>'
				+				'<div class="">'
				+					'<span><i class="fa fa-lock"></i></span><input type="password" name="" id="password" value="" placeholder="请输入密码">'
				+				'</div>'
				+			'</form>'
				+			'<div class="login_btn">'
				+				'<span id="login_btn">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>'
				+			'</div>'
				+			'<div class="" style="margin: 20px auto;">'
				+				'<span><a href="updatePass.html">忘记密码？</a></span>'
				+				'<span style="float: right;"><a href="register.html">去注册</a></span>'
				+			'</div>'
				+		'</div>'
				+	'</div>'
				+'</div>';
	return html;
}


$(function(){
//	$(".showcon").hide();
	$(".header_left .switch").click(function(){
		index=layer.open({
		  type: 2,
		  title: '城市切换',
		  shadeClose: true,
		  shade: 0.8,
		  area: ['60%', '50%'],
		  content: 'changecity.html' //iframe的url
		});
	})
})


//下拉
$("#xiala").click(function(){
//	$(this).next().show();
	$(this).parent().next().show();
	$(".mineshow").show();
	$(this).parent().addClass("minecontaborder");
});
$("#showcon").mouseleave(function(){
	$(this).hide();
	$(this).siblings().removeClass("minecontaborder")
});
//下拉

//header_ma
$("#qsapp").mouseover(function(){
	$(this).next().show();
});
$("#qsapp").mouseleave(function(){
	$(this).next().hide();
});
$("#qswc").mouseover(function(){
	$(this).next().show();
});
$("#qswc").mouseleave(function(){
	$(this).next().hide();
});
//header_ma





