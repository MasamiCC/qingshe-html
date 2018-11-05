function cancelCollect(){
	layer.confirm('确定取消收藏该商家？', {
	  btn: ['确定','取消'] //按钮
	},  function(){
	  layer.msg('ajax操作', {
	    time: 20000, //20s后自动关闭
	    btn: ['明白了', '知道了']
	  });
	});
}
