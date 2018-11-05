$(function(){
	$('.mui-bar.mui-bar-tab').on('tap','a',function(){
		var href=$(this).attr('href');
		console.log(href);
		if(href!='#'){
			location.href=href;
		}
	})
	//loadBacTop()
})


function loadBacTop(bottom){
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var height=$(window).height()
		if (top>=height) {
			var size=$('.backtop').size();
			if (size>=1) {
				$('.backtop').fadeIn()
			}else{
				var html='<div class="backtop">'
					+	'<img id="to_top" src="../image/backtop.png" style="left: 331px; top: 2117px;max-width:2.5rem">'
					+'</div>';
				$("body").append(html);
				$('.backtop').css({
					position:'fixed',
					bottom:bottom+'px',
					right:'22px',
					'z-index':'999'
				})
			}
			$('.backtop').bind({
				'click':function(){
					$(window).scrollTop(0);
				}
			})
			
		}else{
			$('.backtop').fadeOut()
		}
	})
}
	//获取URL参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

//轻奢点评allCitys数据转换成poppicker数据
function createData(data){
	var res=[];
	for(var key in data){
		var temp={};
		temp['value']=data[key]['id'];
        temp['text']=data[key]['name'];
        if(data[key]['city_id']){
        	temp['city_id']=data[key]['city_id'];
        }
        if(typeof data[key]['citys'] == 'object'){
        	temp['children']=createData(data[key]['citys']);
        }
        res.push(temp)
    }
    return res;
}