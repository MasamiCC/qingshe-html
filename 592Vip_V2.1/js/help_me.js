$(function(){
});


var  index='';

//$('.hm_main_bottom_con_blue').on('click',function(){
//	index=layer.open({
//	    type: 2,
//	    title: '轻奢点评慈善基金管理办法',
//	    maxmin: true,
//	    shadeClose:true,
//	    area: ['800px', '700px'],
//	    content: 'help_undertaking_con.html',
//	  });
//	});
	
	
$('#confirmpay').on('click',function(){
	var checkeded=$("#read").hasClass('checkeded');
	var confirmpayable=$(this).hasClass('confirmpay_abled');
		if(confirmpayable){
				index=layer.open({
			    type: 2,
			    title: '救助申请人诚信承诺书',
			    maxmin: true,
			    shadeClose:true,
			    area: ['800px', '700px'],
			    content: 'help_undertaking_con.html',
			  });
		}

	});
	
	
$('#read').on('click',function(){
	var checked=$("#read").hasClass('checked');
	  		if(checked){
	  			$("#read").removeClass('checked').prop('checked',false);
	  			$("#confirmpay").removeClass('confirmpay_abled');
	  		}else{
	  			$("#read").addClass('checked').prop('checked',true);
	  			$("#confirmpay").addClass('confirmpay_abled');
	  		}
	  	})


//$("#confirmpay").on('click',function(){
//	var checkeded=$("#read").hasClass('checkeded');
//	var confirmpayable=$(this).hasClass('confirmpay_abled');
//		if(confirmpayable){
//			location.href='../html/social_donation_apply_f.html';
//		}
//	});

