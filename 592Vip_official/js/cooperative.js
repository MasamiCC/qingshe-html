$(function(){
	var imgList = [];
	for(var i =1;i<33;i++){
		imgList.push('../static/img/cooperative_'+i+'.png');
	}
	$('.cooperate_ul').discrete({
		collums: 8,
		rows: 4,
		imgList: imgList
	})	
})

