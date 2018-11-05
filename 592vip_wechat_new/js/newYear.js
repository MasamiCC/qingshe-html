$(function(){
	loadNewYear()
})
function loadNewYear(){
	var now=Date.parse(new Date())/1000;
	var nBegin=0;
	var nEnd=1514822399;
	if(now>=nBegin&&now<=nEnd){
		$('.shop_msg').addClass('newYear');
		var html='<li class="mui-table-view-cell lis" style="position:relative">'
				+	'<div>'
				+		'<img  src="../image/newYearbanner@2x.png" style="max-width:100%"/>'
				+	'</div>'
				+	'<div class="newYear_title">'
				+		'活动期间本店全场折扣低至5折'
				+	'</div>'
				+	'<div class="newYear_shake">'
				+		'<img  src="../image/shakeball@2x.png" style="max-width:100%"/>'
				+	'</div>'
				+'</li>'
		$('.newYear').append(html)
	}
}
