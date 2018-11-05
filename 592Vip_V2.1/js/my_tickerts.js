$(function(){
	 $('.icon_v').each(function(){
	    	$(this).bind({
	    		click:function(){
					$(this).next().toggleClass("show");
					if($(this).children().hasClass("fa-angle-down")){
						$(this).children().removeClass("fa-angle-down")
						$(this).children().addClass("fa-angle-up")
					}else{
						$(this).children().addClass("fa-angle-down")
					}
					
	    		}
	    		
	    	})
	    })
});
function ticketClick(){
	$('.icon_v').each(function(){
	    	$(this).bind({
	    		click:function(){
					$(this).next().toggleClass("show");
					if($(this).children().hasClass("fa-angle-down")){
						$(this).children().removeClass("fa-angle-down")
						$(this).children().addClass("fa-angle-up")
					}else{
						$(this).children().addClass("fa-angle-down")
					}
					
	    		}
	    		
	    	})
	    })
}
