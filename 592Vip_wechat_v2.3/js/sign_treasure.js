$(function(){
	var hasred=$('.greygeticon').hasClass('red');
	if(hasred){
		$('.greygeticon').click(function(){
			mui('#myPopover2').popover('show');
			mui("#myPopover2").on('tap','.mui-icon',function(){
			mui('#myPopover2').popover('hide');
		})	
	})
	}
}	
);
