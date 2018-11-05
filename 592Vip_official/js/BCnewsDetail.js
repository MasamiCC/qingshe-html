$(function(){
//获取参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if(r != null) return decodeURI(r[2]);
    return null;
}
//console.log(data)
var newId=GetQueryString("id");//调用
console.log(newId)
	 $.ajax({
             type: "POST",
             url: "http://www.592vip.top/api/news/getNewsDetail/"+newId,
             success: function(data){
             	console.log(data)
             	var time=datatime(data.result.publish_time)
             	console.log(time)
             	console.log(data.result.news_content)
		            var html=  '<div class="BCnewsdetail_con">'
		             		+		'<div class="BCnewsdetail_concon">'
							+			'<div class="BCnewsdetail_title">'
							+				data.result.news_name
							+			'</div>'
							+			'<div class="BCnewsdetail_small_title">'
							+				'<span class="bigtime">'
							+					time[0]
							+				'</span>'
//							+				'<span class="smalltime">'
//							+					time[1]
//							+				'</span>'
							+				'<span class="source">来自'
							+					data.result.news_source
							+				'</span>'
							+			'</div>'
							+			'<div class="BCnewsdetail_content">'
							+				data.result.news_content
							+			'</div>'
							+		'</div>'
							+		'<div class="BCnewsdetail_bottom">'
							+			'<a href="javascript:history.go(-1)">'
							+				'<div class="BCnewsdetail_btn">'
							+					'返回新闻目录'
							+				'</div>'
							+			'</a>'
							+		'</div>'
							+	'</div>'
						
               $('.BCnewsdetail').append(html);   
               
               findimg();
//             去掉图片缩进
              $('.BCnewsdetail_content img').each(function(){
               	var p=$(this).parent();
               	var pp=$(this).parent().parent();
               	p.css('text-indent','0px');
               	pp.css('text-indent','0px');
               });
//             去掉图片缩进
              }
         });
         
         function datatime(date){
         	var datatime=new Date(date);
         	var newBigTime = datatime.getFullYear() + '-' + (datatime.getMonth() + 1) + '-' + datatime.getDate();
         	var hour=datatime.getHours();
         	var minute=datatime.getMinutes();
         	hour=hour<10?("0"+hour):hour;
         	minute=minute<10?("0"+minute):minute;
         	var newSmallTime=hour+':'+minute;
         	var time=[newBigTime,newSmallTime];
         	return time;
         }
         function findimg(){
         	$('.BCnewsdetail_concon img').each(function(){
         		var imgsrc=$(this).attr('src');
         		console.log(imgsrc)
         		var httpimg=imgsrc.substr(0,5)
         		if(httpimg!='https'){
         			imgsrc='https://www.592vip.com:91'+imgsrc
		       		$(this).attr('src',imgsrc);
		       		console.log(imgsrc)
         		}
         	});
         }
         
})
	

