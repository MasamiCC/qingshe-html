  $(function(){
  	
			
	    
	     var swiper3 = new Swiper('.secondswiper .swiper-container', {
	        slidesPerView: 1.7,
	        spaceBetween: 10
	    });
	    
	  	$(".partFknowmore").click(function(){
	  		mui('#popover').popover('show');
	  	});
	  	$(".partTknowmore").click(function(){
	  		mui('#popover1').popover('show');
	  	});
	  	$('#close').click(function(){
				mui('#popover').popover('hide');
			});
		  $('#close1').click(function(){
				mui('#popover1').popover('hide');
			});	
			
			});
  	
	     $('#tabs a').click(function(e) {
//	          e.preventDefault();                
	          $('#tabs li').removeClass("current");
	          $(this).parent().addClass("current");
	          $("#content div").removeClass("show");
	          $('#' + $(this).attr('title')).addClass('show');
	          
	          var swiper1 = new Swiper('.show .thirdswiper .swiper-container', {
			        slidesPerView: 1.7,
			        spaceBetween: 10
			    });
	          
	          
	      });
	      
	 
	  
	
  
    