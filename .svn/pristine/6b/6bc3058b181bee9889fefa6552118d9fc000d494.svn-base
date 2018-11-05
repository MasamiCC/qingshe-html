	var timer='';
	var m=0;
	var chouJiangtimer='';
	$(function(){
		
		timer=setInterval(function(){
//			if(m<10){
				getUsers(m)
				m++;
//			}else{
//				clearInterval(timer)
//			}
			
		},1000)
		$('.select').click(function(){
			$('.jx_list').slideToggle()
		})
		$('.jx_list').on('click','li',function(e){
			e.stopPropagation();
			$("#lev").val($(this).attr('data-value'));
			$('.select span').html($(this).text())
			$('.jx_list').slideUp()
		})
		
	})
	//获取用户信息
	function getUsers(m){
		var data=[
			{id:m,name:'李思',mobile:'159****5970'},
			{id:m,name:'张三',mobile:'159****9234'}
		]
		loadUsers(data,m);
	}
	//加载用户信息
	function loadUsers(data,m){
		if(data.length>0){
			var num=parseInt($('.ntlg_title1 span').html());
			$('.ntlg_title1 span').html(num+data.length)
			for(var i in data){
				var li=$('<li></li>');
				li.attr({
					'id':'user'+data[i]['id']
				})
				li.append('<span class="name">'+data[i]['name']+m+'</span><span class="mobile">'+data[i]['mobile']+'</span>');
				$('.canyu_list').prepend(li)
			}
		}
		
	}
	//开始抽奖
	function actionBegin(me){
		var clicked=$(me).hasClass('clicked');
		var lev=$("#lev").val();
		if(clicked){
			alert('正在抽奖，请先结束抽奖')
		}else{
			$(me).addClass('clicked');
			if(!lev){
				alert('请先选择奖项');
				$(me).removeClass('clicked');
			}else{
				chouJiangtimer=setInterval(function(){
					var li=$('.canyu_list li');
					var index=parseInt(Math.random()*li.size());
					$('.ntlg_title2 span').html(li.eq(index).find('.name').html()+"&nbsp;"+li.eq(index).find('.mobile').html())
				},50)
				$("#ntlg_start").hide().removeClass('clicked');
				$("#ntlg_end").show()
			}
			
		}
	}
	//结束抽奖
	function actionEnd(me){
		var clicked=$(me).hasClass('clicked');
		var lev=$("#lev").val();
		if(!clicked){
			$(me).addClass('clicked');
			clearInterval(chouJiangtimer);
			data={id:1,name:'老蒋',mobile:'159****1111'};
			choujiangCallback(lev,data);
			$("#ntlg_start").show();
			$("#ntlg_end").hide().removeClass('clicked');
		}
		
		
	}
	
	//抽奖回掉
	function choujiangCallback(lev,data){
		console.log(data['id'])
		var arr={'0':'一','1':'二','2':'三'}
		$('.choujiang_list').prepend('<li><span class="jx text-'+lev+'">'+arr[lev]+'等奖</span><span class="name">'+data['name']+'</span><span class="mobile">'+data['mobile']+'</span></li>');
		$('#user'+data['id']).remove();
	}