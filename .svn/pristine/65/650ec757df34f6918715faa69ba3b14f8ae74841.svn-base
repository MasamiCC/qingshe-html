$(function(){
	deltoggle();
	loadList(data);
});

//function getData(){
//	
//		return data;
//	}


	var data=[
			{
				id:1,
				type:'0',
				icons_name:'系统',
				title:'密码修改成功',
				con:'恭喜您，密码修改成功',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:2,
				type:'1',
				icons_name:'活动',
				title:'免费 | DIY冰皮月饼、绘本舞台剧、小恐龙游戏，快来跟我们一起过中秋！',
				con:'近几年来，绘本在中国内地引发了一场热潮，被认为是孩子未认识文字前，了解世界的最佳渠道。',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},	
			{
				id:3,
				type:'0',
				icons_name:'系统',
				title:'密码修改成功',
				con:'恭喜您，密码修改成功',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:4,
				type:'1',
				icons_name:'活动',
				title:'免费 | DIY冰皮月饼、绘本舞台剧、小恐龙游戏，快来跟我们一起过中秋！',
				con:'近几年来，绘本在中国内地引发了一场热潮，被认为是孩子未认识文字前，了解世界的最佳渠道。',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:5,
				type:'0',
				icons_name:'系统',
				title:'密码修改成功',
				con:'恭喜您，密码修改成功',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:6,
				type:'0',
				icons_name:'系统',
				title:'密码修改成功',
				con:'恭喜您，密码修改成功',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:7,
				type:'1',
				icons_name:'活动',
				title:'免费 | DIY冰皮月饼、绘本舞台剧、小恐龙游戏，快来跟我们一起过中秋！',
				con:'近几年来，绘本在中国内地引发了一场热潮，被认为是孩子未认识文字前，了解世界的最佳渠道。 ',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:8,
				type:'0',
				icons_name:'系统',
				title:'密码修改成功',
				con:'恭喜您，密码修改成功',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:9,
				type:'1',
				icons_name:'活动',
				title:'免费 | DIY冰皮月饼、绘本舞台剧、小恐龙游戏，快来跟我们一起过中秋！',
				con:'近几年来，绘本在中国内地引发了一场热潮，被认为是孩子未认识文字前，了解世界的最佳渠道。',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
			{
				id:10,
				type:'1',
				icons_name:'活动',
				title:'免费 | DIY冰皮月饼、绘本舞台剧、小恐龙游戏，快来跟我们一起过中秋！',
				con:'近几年来，绘本在中国内地引发了一场热潮，被认为是孩子未认识文字前，了解世界的最佳渠道。',
				msgdate:'2017-12-01',
				msgtime:'12:22:12',
			},
		];
		
		
function loadList(data){
	$(".msg_middle").empty();
		for (var i in data) {
			var html='<div class="inline_con message">'
					+		'<div class="main_icons_con_left">'
					+			'<div class="main_icons_left_con">'
					+				'<div class="main_icons ';
			if(0==data[i]['type']){
				html+='xt_icon">';
			}else{
				html+='hd_icon">';
			}
					html+=data[i]['icons_name']
					+				'</div>'
					+			'</div>'
					+		'</div>'
					+		'<div class="main_icons_con_right">'
					+			'<div class="main_icons_con_title">'
					+				data[i]['title']
					+			'</div>'
					+			'<div class="main_icons_con_con">'
					+				data[i]['con']
					+			'</div>'
					+		'</div>'
					+		'<div class="main_icons_con_con_right vergital_middle">'
					+				'<div class="inline firsttime">'
					+				data[i]['msgdate']
					+				'</div>'
					+				'&nbsp;&nbsp;'
					+				'<div class="inline">'
					+				data[i]['msgtime']
					+				'</div>'
					+ 				'<div class="inline del" onclick="del(\''+data[i]['id']+'\')">删除</div>'
					+		'</div>'
					+	'</div>'
						
		$('.msg_middle').append(html);
		}
		deltoggle();
		mssglayer();
	}


$(".trash").click(function(){
		data=[];
		loadList(data);
	})

function deltoggle(){
	$(".message").each(function(){
		$(this).bind({
			'mouseover':function(){
				$(this).children().find(".del").show();
			},
			'mouseout':function(){
				$(this).children().find(".del").hide();
			},
		});
}); 
}

function del(id){
	console.log(id)
	for (var i in data) {
		var idarrayname=data[i]['id'];
//		console.log('idarrayname'+idarrayname)
		if(id==idarrayname){
			data.splice(i,1);
		}
	}
//	console.log(data)
	loadList(data)
}


function mssglayer(){
	var  index='';
			$('.message').each(function(){
				$(this).bind('click',function(){
				index=layer.open({
					title:false,
					type:2,
					area:['500px','500px'],
					shadeClose:true,
					content:'msgcontent.html',
				});
			});
		}) ;
}
	