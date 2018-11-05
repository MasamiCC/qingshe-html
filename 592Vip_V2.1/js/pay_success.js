	  var  index='';
		$('#packet').on('click',function(){
		index=layer.open({
			title:false,
			type:2,
			area:['500px','500px'],
			shadeClose:true,
			content:'packetshare_layer.html',
		});
	});

