//扩展mui.showLoading
(function($, window) {
    //显示加载框
    $.showLoading = function(message,type) {
        if ($.os.plus && type !== 'div') {
            $.plusReady(function() {
                plus.nativeUI.showWaiting(message);
            });
        } else {
            var html = '';
            html += '<i class="mui-spinner mui-spinner-white"></i>';
            html += '<p class="text">' + (message || "数据加载中") + '</p>';

            //遮罩层
            var mask=document.getElementsByClassName("mui-show-loading-mask");
            if(mask.length==0){
                mask = document.createElement('div');
                mask.classList.add("mui-show-loading-mask");
                document.body.appendChild(mask);
                mask.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});
            }else{
                mask[0].classList.remove("mui-show-loading-mask-hidden");
            }
            //加载框
            var toast=document.getElementsByClassName("mui-show-loading");
            if(toast.length==0){
                toast = document.createElement('div');
                toast.classList.add("mui-show-loading");
                toast.classList.add('loading-visible');
                document.body.appendChild(toast);
                toast.innerHTML = html;
                toast.addEventListener("touchmove", function(e){e.stopPropagation();e.preventDefault();});
            }else{
                toast[0].innerHTML = html;
                toast[0].classList.add("loading-visible");
            }
        }   
    };

    //隐藏加载框
      $.hideLoading = function(callback) {
        if ($.os.plus) {
            $.plusReady(function() {
                plus.nativeUI.closeWaiting();
            });
        } 
        var mask=document.getElementsByClassName("mui-show-loading-mask");
        var toast=document.getElementsByClassName("mui-show-loading");
        if(mask.length>0){
            mask[0].classList.add("mui-show-loading-mask-hidden");
        }
        if(toast.length>0){
            toast[0].classList.remove("loading-visible");
            callback && callback();
        }
      }
})(mui, window);

$(function(){
//	收input
	jQuery("body").on("touchend", function() { //body上面绑定touchend事件
			jQuery("input[type=text]").each(function (i, v) { //自定义一个.input_box classname ，多个时绑定多个，遍历
			if(jQuery(this).is(":focus") === true){ //如果当前input框获取到了焦点
			jQuery(this).blur(); // 使其失去即可
			}
			});
		})
	
	//选择地区
	var userPicker3 = new mui.PopPicker({
		layer:3
	});
	userPicker3.setData(data);
	var showUserPickerButton3 = document.getElementById('area');
	showUserPickerButton3.addEventListener('tap', function(event) {
		userPicker3.show(function(items) {
			//判断第三个选项是否存在
			if(items[2].name){
				showUserPickerButton3.value = (items[0] || {}).name + " " + (items[1] || {}).name + " " + (items[2] || {}).name;
			}else{
				showUserPickerButton3.value = (items[0] || {}).name + " " + (items[1] || {}).name;
			}
			//返回 false 可以阻止选择框的关闭
			//return false;
		});
	}, false);
	
	
	//监听input file的change事件
	$(".file_input").on('change',function(){
		var self = this;
		if (!self.files.length) return;
	    if (self.files.length > 1) {
	        mui.alert("只允许上传一张图片!");
	        return false;
	    }else{
	    	//得到图片
	    	var file = self.files[0];
	    	//转换成base64格式
	    	var reader = new FileReader();
	    	reader.onload = function () {
		        var result = this.result;    //data:base64   
		        var $_img = $("<img src='' class='upload_img' />");
		        $_img.attr({
		        	src: result
		        });
		        
		        //判断是否是第一次
		        if($(self).next().length ===0){
		        	$(self).prev().hide();
		            $(self).closest('.upload_area').append($_img);
		        }else{
		        	$(self).next().attr({
			        	src: result
			        });
		        }
		    };
		    reader.readAsDataURL(file);
	    }
	})


	//提交表单的事件
	$('.bussiness_form').submit(function(e){
		//创建蒙版对象
		var mask = mui.createMask();

		mui.showLoading("正在提交..","div");
		mask.show();//显示遮罩

		//关闭
		//mui.hideLoading()
		//mask.close();
	});	
	
})
