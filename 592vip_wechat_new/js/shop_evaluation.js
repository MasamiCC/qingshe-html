$(function(){
//	loadevaluation(data);
});
var data=[
			{
				id:1,
				userImage:'../image/se_header1.png',
				userName:'白雪公主',
				praise:'0',
				time:'2017-12-01',
				theme:'标准间',
				content:'没想到有早餐啊 但是起晚了 所以没吃到 房间还可以 就是周边坐车不太方便 差不多要走一 千米才到公交车站还有地铁站。',
				img:[
					'../image/se_evaluation1.png','../image/se_evaluation2.png','../image/se_evaluation3.png','../image/se_evaluation4.png'
				]
			},
			{
				id:2,
				userImage:'../image/se_header2.png',
				userName:'风吹屁屁凉',
				praise:'1',
				time:'2017-12-01',
				theme:'贵贵贵！山姆超市开业盛况 小编亲测到底有啥值得买？',
				theme:'标准间',
				content:'没想到有早餐啊 但是起晚了 所以没吃到 房间还可以 就是周边坐车不太方便 差不多要走一 千米才到公交车站还有地铁站。',
				img:[
					
				]
			},{
				id:3,
				userImage:'../image/se_header1.png',
				userName:'白雪公主',
				praise:'2',
				time:'2017-12-01',
				theme:'标准间',
				content:'没想到有早餐啊 但是起晚了 所以没吃到 房间还可以 就是周边坐车不太方便 差不多要走一 千米才到公交车站还有地铁站。',
				img:[
					'../image/se_evaluation1.png','../image/se_evaluation2.png','../image/se_evaluation3.png'
				]
			}
		];
		
		function loadevaluation(data){
//			console.log(data[0]['img'][0]);
			for (var i in data) {
				var e_html= '<div class="evaluation" id="'+data[i]['id']+'">'
							+		 '<div class="evaluation_left">'
							+			'<div class="evaluation_left_con">'
							+				'<img src="'+data[i]['userImage']+'"/>'
							+			'</div>'
							+		'</div>'
							+		'<div class="evaluation_right">'
							+			'<div class="evaluation_right_con">'
							+				 '<div class="evaluation_right_con_evaluations">'
							+				 	'<div class="evaluation_right_con_title">'
							+				 		data[i]['userName']
							+				 	'</div>'
							+				 	'<div class="evaluation_right_con_time">'
							+				 		data[i]['time']
							+				 	'</div>'
							+				 '</div>';
											 
							if(0==data[i]['praise']){
								e_html+='<div class="evaluation_right_con_evaluations e_con">'
									+		'<div class="e_inlineblock se_praise">'
									+		 	'<img src="../image/se_praise.png"/>'
									+		'</div>'
									+			'<div class="e_inlineblock se_praise_con">'
									+ 				'赞了该商品'
									+			'</div>'
									+	 '</div>'
							}else if(1==data[i]['praise']){
								e_html+='<div class="evaluation_right_con_evaluations e_con">'
									+	 '</div>'
							}else{
								e_html+='<div class="evaluation_right_con_evaluations e_con">'
									+		'<div class="e_inlineblock se_praise">'
									+		 	'<img src="../image/se_nopraise.png"/>'
									+		'</div>'
									+			'<div class="e_inlineblock se_praise_con">'
									+ 				'踩了该商品'
									+			'</div>'
									+	 '</div>'
							}
							
							e_html+=		 '<div class="evaluation_right_con_evaluations e_con e_fonts">'
							+				 	'<span class="e_gold">'
							+				 		'#'+data[i]['theme']+'#'
							+				 	'</span>'
							+				 	data[i]['content']
							+				 '</div>'
							+				 '<div class="evaluation_right_con_evaluations e_imgs_con">';
							
							var e_imgs=data[i]['img']
							
							if (e_imgs) {
								if (e_imgs.length==0) {
									e_html+='';
							}else{
								for(var j in e_imgs){
										e_html+= '<div class="e_imgs">'
											+		'<img src="'+e_imgs[j]+'"/>'
											+ 	'</div>'
											
								}
							}
						}		
							e_html+='</div>'
							+ '</div>'
							+		'</div>'
							+	'</div>'
							$("#e_main").append(e_html);
							console.log(e_imgs[j]);
				}	
			
			}
		
		mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					up: {
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
			});
			/**
			 * 下拉刷新具体业务实现
			 */
			
			var count = 0;
			/**
			 * 上拉加载具体业务实现
			 */
			function pullupRefresh() {
				setTimeout(function() {
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
					loadevaluation(data);
				}, 1500);
			}
