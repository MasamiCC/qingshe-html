//jquery新增方法
;
(function($, window, document, undefined) {

	//定义一个构造函数
	var Replacement = function() {
		this.imgList = []; //所有需要懒加载的对象
	}

	//在插件中使用这个对象
	$.fn.replacement = function(options) {
		//创建lazyLoad的实体
		var replacement = new Replacement();

		//获取所有对象，并把对象存入数组
		replacement.imgList = $($(this).selector);
		$.each(replacement.imgList,function(key,val){
			var localName = $(val).context.localName;
			var img = new Image();
			img.src = $(val).attr('replace-img');
			img.onload = function() {
			    if(localName == 'img'){
					$(val).attr("src", this.src);
				}else{
					$(val).css('background-image',"url("+this.src+")");
				}
		   }
		})

	}
})(jQuery, window, document);


//jquery新增方法
;
(function($, window, document, undefined) {

	//定义一个构造函数
	var LazyLoad = function(ele, opt) {
		this.imgList = [], //所有需要懒加载的对象

			//默认数值
		this.defaults = {

			//对某一容器内的图片进行懒加载（默认为body）
			'container': 'body',

			//回调函数
			'callBack': $.noop()
		},
		this.options = $.extend({}, this.defaults, opt)
	}

	//在插件中使用这个对象
	$.fn.lazyLoad = function(options) {
		//创建lazyLoad的实体
		var lazyLoad = new LazyLoad(this, options);

		//获取所有对象，并把对象存入数组
		lazyLoad.imgList = $(lazyLoad.options.container).find($(this).selector);
		$.each(lazyLoad.imgList,function(key,val){
			$(val).css('background-image',"url("+$(val).attr('data-original')+")");
		})

	}
})(jQuery, window, document);


//jquery新增分页方法
;
(function($, window, document, undefined) {

	//定义一个构造函数
	var Paging = function(ele, opt) {
		this.page = 1; //当前页数
		this.pageNum = 0; //总页数
		this.selfClassName = ''; //调用者本身
		//默认数值
		this.defaults = {
			//请求的接口
			'url': '',

			//每页显示的页数
			'pageSize': 10,

			//数据展示的区别
			'list': '',

			//js模板id
			'template': '',
		},
		this.options = $.extend({}, this.defaults, opt)
	}

	Paging.prototype = {
		//发送请求加载数据
		setData: function(){
			var that = this;
			$.ajax({
				type: "post",
				url: this.options.url,
				dataType: "json",
				crossDomain: true,
		        data: { currentPage: this.page,recordsPerPage: this.options.pageSize},
				success: function(data){
					if(data.success){
						var newsList = data.result;
						//转换时间
						$.each(newsList.items,function(key,value){
							var time = formatterDateTime(value.publish_time);
							value.publish_time = time;
						})
						//加载数据
						var html = template(that.options.template, newsList);
						$('.newsList_ul').html(html);
						//根据不同的条数生成分页器
						that.creatPagingUl(newsList);
					}
				}
			});
		},

		creatPagingUl: function(newsList){
			//总页数
			this.pageNum = newsList.pageNumber;
			//分页器html
			var pageHtml = '';
			//如果是第一页
			if(this.page == 1){
				pageHtml += "<li class='previous arrow disabled' aria-label='Previous'></li>";
			}else{
				pageHtml += "<li class='previous arrow' aria-label='Previous'></li>";
			}
			if(this.pageNum > 5 && this.page < 5){//如果大于5页且当前页数在前五页内
				for(var i = 1; i<=5;i++){
					if(i == this.page){
						pageHtml+= "<li class='active' data-num = '" + i +"'>" + i +"</li>";
					}else{
						pageHtml+= "<li data-num = '" + i +"'>" + i +"</li>";
					}
				}
				pageHtml+= "<li class='disabled'>...</li><li data-num = '" + this.pageNum +"'>" + this.pageNum +"</li><li class='next arrow' aria-label='Next'></li>";
			}else if(this.pageNum > 5 && this.page >= 5 && this.page <= this.pageNum-4){ //如果大于5页且当前页数超过5页且当前页小于总页数减去4
				pageHtml+= "<li data-num = '1'>1</li><li class='disabled'>...</li>";
				for(var i = this.page-2; i <= this.page+2; i++){
					if(i == this.page){
						pageHtml+= "<li class='active' data-num = '" + i +"'>" + i +"</li>";
					}else{
						pageHtml+= "<li data-num = '" + i +"'>" + i +"</li>";
					}
				}
				pageHtml+= "<li class='disabled'>...</li><li data-num = '" + this.pageNum +"'>" + this.pageNum +"</li><li class='next arrow' aria-label='Next'></li>";
			}else if(this.pageNum > 5 && this.page >= 5 && this.page > this.pageNum-4){//如果大于5页且当前页数超过5页且当前页大于于总页数减去4
				pageHtml+= "<li data-num = '1'>1</li><li class='disabled'>...</li>";
				for(var i = this.pageNum-4; i <= this.pageNum; i++){
					if(i == this.page){
						pageHtml+= "<li class='active' data-num = '" + i +"'>" + i +"</li>";
					}else{
						pageHtml+= "<li data-num = '" + i +"'>" + i +"</li>";
					}
				}
				//判断是否为最后一页
				if(this.page == this.pageNum){
					pageHtml+= "<li class='next arrow disabled' aria-label='Next'></li>";
				}else{
					pageHtml+= "<li class='next arrow' aria-label='Next'></li>";
				}
			}else if(this.pageNum <= 5){
				for(var i = 1; i<=this.pageNum;i++){
					if(i == this.page){
						pageHtml+= "<li class='active' data-num = '" + i +"'>" + i +"</li>";
					}else{
						pageHtml+= "<li data-num = '" + i +"'>" + i +"</li>";
					}
				}
				//判断是否为最后一页
				if(this.page == this.pageNum){
					pageHtml+= "<li class='next arrow disabled' aria-label='Next'></li>";
				}else{
					pageHtml+= "<li class='next arrow' aria-label='Next'></li>";
				}
			}
			//生成分页器
			$(this.selfClassName).html(pageHtml);
		}
	}

	//在插件中使用这个对象
	$.fn.paging = function(options) {
		//创建Paging的实体
		var paging = new Paging(this, options);
		paging.selfClassName = this.selector;
		//生成数据
		paging.setData();

		//按钮被点击
		$(document).on('click','.paging_ul li',function(){
			//如果class有disabled直接返回  如果是重复点击当前页直接返回
			if($(this).hasClass('disabled') || parseInt($(this).attr('data-num')) == paging.page){
				return false;
			}

			//判断是前进还是后退按钮
			var type = $(this).attr('aria-label');
			if(type == 'Previous'){
				paging.page = paging.page-1;
				//生成数据
				paging.setData();
			}else if(type == 'Next'){
				paging.page = paging.page+1;
				//生成数据
				paging.setData();
			}else{
				var num = parseInt($(this).attr('data-num'));
				paging.page = num;
				//生成数据
				paging.setData();
			}
		})
	}
})(jQuery, window, document);

//jquery离散集的图片
;
(function($, window, document, undefined) {

	//定义一个构造函数
	var Discrete = function(ele, opt) {
		
		this.selfClassName = ''; //调用者本身
		this.boxWidth = 0; //每个盒子需要的宽度
		this.boxHeight = 0; //每个盒子需要的高度
		this.dispersed = true; //是否离散
		//默认数值
		this.defaults = {

			//行
			'collums': 0,

			//列
			'rows': 0,
			
			//图片列表
			'imgList': []
		},
		this.options = $.extend({}, this.defaults, opt)
	}
	
	//定义方法
	Discrete.prototype = {
		//创建离散图
		creatDis: function(){
			var wrap = $(this.selfClassName);
			var num = 0;
			for (var r = 0; r < this.options.rows; r++) {
				for (var c = 0; c < this.options.collums; c++) {
					$('<li><div class="box bg_lazy"></div></li>').width(this.boxWidth).height(this.boxHeight) //设置盒子的宽高
					    .css({
	                        'left': this.boxWidth * c + 'px',
	                        'top': this.boxHeight * r + 'px',
	                        'transform': 'rotate(' + (Math.random() * 40 - 20) + 'deg) ' +
	                        'translateX(' + (40*c-120) + 'px)' +
	                        'translateY(' + (50*r-60) + 'px)'
	                    })
					    .find('.box')
					    .attr({
	                        'data-original': this.options.imgList[num],
	                    })
					    .end()
					    .appendTo(wrap)					    
					    num++
			    }
			}
			this.dispersed = true;
        },
        //创建整幅图片
        creatFull: function(self){
        	var num = $(self).index()+1;
        	var bgImg = "url(../static/img/cooperative_big_"+num+".png)";
	        var bgLeft = 0;
	        var bgTop = 0;
	        var that = this;
	        $(that.selfClassName + ' li').each(function (index) {
	            var $this=$(this);
	            $(this).delay(40*index).animate({"opacity":0},200, function () {
	                $this.css({
	                    'transform': ' rotate(0deg) ' +
	                    'translateX(0)' +
	                    'translateY(0)'
	                });
	                $this.find('div').css({
	                    'background-image': bgImg,
	                    'background-size': 'auto',
	                    'backgroundPositionX': -bgLeft,
	                    'backgroundPositionY': -bgTop,
	                    'transform': 'scale(1)'
	                });
	                bgLeft += that.boxWidth;
	                if (bgLeft >= 1000) {
	                    bgTop += that.boxHeight;
	                    bgLeft = 0;
	                }
	                $this.animate({"opacity":1},300);
	            })
	        })
	        that.dispersed = false;
        },
        //重新生成离散
        creatDispersed: function(){
        	var that = this;
        	$(that.selfClassName + ' li').each(function (index) {
	            var c=index % that.options.collums;
	            var r=parseInt(index / that.options.collums);
	            var $this=$(this);
	            $(this).delay(10*index).animate({"opacity":0},200, function () {
	                $this.css({
	                    'transform': 'rotate(' + (Math.random() * 40 - 20) + 'deg)' +
	                    'translateX(' + (40*c-120) + 'px)' +
	                    'translateY(' + (50*r-60) + 'px)'
	                });
	                $this.find('div').css({
	                    'background-image': 'url(' + that.options.imgList[index]+ ')',
	                    'background-size': 'cover',
	                    'backgroundPositionX': 0,
	                    'backgroundPositionY': 0,
	                });
	                $this.animate({"opacity":1},200);
	            })
	        });
	        that.dispersed = true;
        }
        
	}

	//在插件中使用这个对象
	$.fn.discrete = function(options) {
		//创建lazyLoad的实体
		var discrete = new Discrete(this, options);
		
		//得到基础信息
		discrete.selfClassName = this.selector;
		discrete.boxWidth = $(this.selector).outerWidth() / discrete.options.collums;
		discrete.boxHeight = $(this.selector).outerHeight() / discrete.options.rows;
		
		//创建离散图片
		var first = true;
		discrete.creatDis(first);
		
		$(document).on('click',this.selector+' li',function(){
			if(discrete.dispersed){
				discrete.creatFull(this)
			}else{
				discrete.creatDispersed();
			}
		})

	}
})(jQuery, window, document);