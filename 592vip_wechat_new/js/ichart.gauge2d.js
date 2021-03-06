/**
 * @overview the ichartjs Plug-in,the circular gauge component
 * @component#iChart.Gauge2D
 * @extend#iChart.Chart
 */
iChart.Gauge2D = iChart.extend(iChart.Chart, {
	/**
	 * initialize the context for the Gauge2D
	 */
	configure : function(config) {
		/**
		 * invoked the super class's configuration
		 */
		iChart.Gauge2D.superclass.configure.call(this);

		this.type = 'gauge2d';
		this.dataType = 'single';
		
		this.set({
			/**
			 * @cfg {Float/String} Specifies the gauge's radius.If given a percentage,it will relative to minDistance.(default to '100%')
			 */
			radius : '95%',
			value : null,
			panel:{
				
				background_color:'red',
				gradient:true,
				gradient_mode:'RadialGradientOutIn',
				border:{
					color:'#dedede',
					width:0
				},
				iborder:{
					radius:'80%',
					color:'#333',
					width:10
				}
			},
			tickmarks:{
				start_angle:45,
				/**
				 * @cfg {Float} Specifies the gauge's end angle.(default to null)
				 */
				end_angle:null,
				space_angle:4,
				radius:'80%',
				width:10,
				bg_color:'#4fa9db',
				size:2,
				count:5,
				color:'#344352',
				lower : 0,
				upper : 100,
				small_color:'#344352',
				small_count:5,
				/**
				 * [[0, 60, 'green'],[60, 80 'yellow'],[80, 100, 'red']]
				 */
				ranges:[]
			},
			
			label:{
				fontsize:11,
				/**
				 * @cfg {Number} the distance of column's bottom and text(default to 12)
				 */
				label_space : 12
			},
			/**
			 * @cfg {Object/String} Specifies the config of Top Text details see <link>iChart.Text</link>,If given a string,it will only apply the text.note:If the text is empty,then will not display
			 */
			text : {
				text:'',
				line_height:24,
				fontweight : 'bold',
				/**
				 * Specifies the font-size in pixels of top text.(default to 18)
				 */
				fontsize : 18
			},
			screen:{
				/**
				 * @cfg {Number} Specifies the number of decimal.(default to 0)
				 */
				decimalsnum : 1,
				unit_pre:'',
				unit_post:'',
				background_color:'#fefefe',
				height:22,
				width:0,
				fontsize:0,
				fontweight:600,
				border : {
					enable : true
				}
			},
			needle:{
				radius:'100%',
				size:4,
				color:'#fff',
				alpham:0.9,
				border:{
				  enable:true,
				  width:0,
				  color:'',
				}
			},
			cap:{
				size:1,
				color:'',
				border:{
				  enable:true,
				  width:1,
				  color:'#bcbcbc'
				}
			},
            animation:true,
            animation_duration:500,
            animation_timing_function : 'easeOut'
		});
		
		this.push('data',[0]);
	},
	doAnimation : function(t, d,_) {
		var v = _.animationArithmetic(t,_.needle.start, _.needle.offset, d);
		_.panel.draw();
		_.tickmark.draw();
		_.screen.push('text',v);
		_.screen.draw();
		if(_.text)
		_.text.draw();
		_.needle.push('value',v);
		_.needle.draw();
	},
	to:function(value){
		var _ = this._();
		if(value==_.needle.value)return;
		if(_.processAnimation){
			_.needle.start = _.needle.get('value');
		}else{
			_.needle.start = _.needle.value;
		}
		_.needle.value = parseFloat(value);
		_.needle.offset = _.needle.value-_.needle.start;
		_.runAnimation(_);
	},
	doConfig : function() {
		iChart.Gauge2D.superclass.doConfig.call(this);
		var _ = this._(),pi=Math.PI,pi2=pi*2,f = Math.floor(_.get('minDistance') * 0.5),r = iChart.parsePercent(_.get('radius'),f);
		/**
		 * disable tip and legend
		 */
		_.push('tip',false);
		_.push('legend',false);
		
		_.originXY(_,[r + _.get('l_originx'),_.get('r_originx') - r,_.get('centerx')],[_.get('centery')]);
		
		/**
		 * build dial panel
		 */
		_.panel = new iChart.Custom(iChart.apply(_.get('panel'),{
			z_index:_.get('z_index')-10,
			radius:r,
			shadow:_.get('shadow'),
			originx:_.x,
			originy:_.y,
			configFn:function(_){
				_.r = _.get('radius');
				_.applyGradient(_.x-_.r,_.y-_.r,2*_.r*0.9,2*_.r*0.9);
				_.ir = iChart.parsePercent(_.get('iborder.radius'),_.r);
				_.iborder = _.get('iborder.width')>0;
			},
			drawFn:function(_){
				_.T.sector(_.x, _.y, _.r, 0, 0, pi2, _.get('f_color'), _.get('border.width'), _.get('border.width'), _.get('border.color'), _.get('shadow'), false, true);
				
				if(_.iborder){
					_.T.sector(_.x, _.y, _.ir, 0, 0, pi2, 0, true, _.get('iborder.width'), _.get('iborder.color'),_.get('iborder.shadow'), false, true, true);
				}
			}
		}), _);
		
		/**
		 * build tickmark
		 */
		_.tickmark = new iChart.Custom(iChart.apply(_.get('tickmarks'),{
			z_index:_.get('z_index')-9,
			originx:_.x,
			originy:_.y,
			label:_.get('label'),
			configFn:function(_){
				_.r = iChart.parsePercent(_.get('radius'),r);
				_.tickbg = [];
				_.tickmarks = [];
				_.labels = [];
				_.pushIf('end_angle',-_.get('start_angle'));
				var count= _.push('count',iChart.lowTo(2,_.get('count'))),
					A = _.push('space_angle',iChart.angle2Radian(_.get('space_angle'))),
					sA = _.push('start_angle',iChart.angle2Radian(_.get('start_angle')+ 90))+A,
					eA = _.push('end_angle',iChart.angle2Radian(_.get('end_angle')+ 450))-A,
					colors = [].concat(_.get('bg_color')),
					tcolors = [].concat(_.get('color')),
					stcolors = [].concat(_.get('small_color')),
					scount = _.get('small_count')||1,
					lower = _.get('lower'),
					upper = _.get('upper'),
					T = (upper - lower)/count,
					tA = eA- sA,
					S = tA/count,
					AA = S/scount,
					size = _.get('size'),
					w = _.get('width')-1,
					tr = _.r - w -_.get('label.label_space'),
					wA = size/2/_.r,
					sAA,
					swA = wA*0.6;
				
				_.minMarks = T/scount;
				_.lower =lower;
				_.upper =upper;
				
				_.sA =sA;
				_.eA =eA;
				_.tA =tA;
				
				for(var i=0;i<=count;i++){
					tcolors[i] = tcolors[i] || tcolors[i-1];
					stcolors[i] = stcolors[i] || stcolors[i-1];
					
					_.tickmarks.push({
						start:sA-wA,
						end:sA+wA,
						radius:_.r-1,
						width:w,
						color:tcolors[i]
					});
					
					(i<count)&&colors[i]&&_.tickbg.push({
						start:sA-(i==0?A:0),
						end:sA+S+(count-i==1?A:0),
						color:colors[i]
					});
					
					sAA = sA;
					for(var j=0;i<count&&j<scount-1;j++){
						sAA+=AA;
						_.tickmarks.push({
							start:sAA-swA,
							end:sAA+swA,
							radius:_.r-1-w*0.4,
							width:w*0.6,
							color:stcolors[i]
						});
					}
					
					_.labels.push(new iChart.Text(iChart.apply(_.get('label'),{
						text : lower,
						textAlign:'center',
						textBaseline:'middle',
						originx : _.x+Math.cos(sA)*tr,
						originy : _.y+Math.sin(sA)*tr
					}), _));
					
					lower+=T;
					sA+=S;
				}
			},
			drawFn:function(_){
				_.tickbg.each(function(bg){
					_.T.sector(_.x, _.y, _.r,_.get('width'),bg.start, bg.end,bg.color, 0, 0, 0, 0, false, true, true);
				});
				
				_.tickmarks.each(function(tick){
					_.T.sector(_.x, _.y, tick.radius,tick.width,tick.start,tick.end,tick.color, 0, 0, 0, 0, false, true, true);
				});
				
				_.labels.each(function(label){
					label.draw();
				});
			}
		}), _);
		
		var value = (!_.get('value')&&_.get('value')!=0)?_.tickmark.lower:_.get('value');
		
		/**
		 * build screen
		 */
		_.screen = new iChart.Text(iChart.apply(_.get('screen'),{
			z_index:_.get('z_index')-8,
			originx:_.x-_.get('screen.width')/2,
			originy:_.y+r/3,
			text:value
		}), _);
		
		_.screen.on('beforedraw', function() {
			this.push('text',this.get('unit_pre')+parseFloat(this.get('text')).toFixed(this.get('decimalsnum'))+this.get('unit_post'));
			return true;
		});
		
		if ($.isString(_.get('text'))) {
			_.push('text', $.applyIf({
				text : _.get('text')
			}, _.default_.text));
		}
		
		if (_.get('text.text') != '') {
			_.text = new $.Text(iChart.apply(_.get('text'),{
				z_index:_.get('z_index')-8,
				originx:_.x,
				originy:_.y-r/3,
				textBaseline:'middle'
			}), _);
			_.components.push(_.text);
		}
		/**
		 * build needle
		 */
		_.needle = new iChart.Custom({
			z_index:_.get('z_index')-6,
			needle:_.get('needle'),
			cap:_.get('cap'),
			radius:iChart.parsePercent(_.get('needle.radius'),_.tickmark.r - _.get('tickmarks.width')*0.5),
			originx:_.x,
			originy:_.y,
			tickmark:_.tickmark,
			value:value,
			getRadian:function(v){
				var l = _.tickmark.lower,u = _.tickmark.upper;
				if(l>u){
					v = iChart.between(u,l,v);
				}else{
					v = iChart.between(l,u,v);
				}
				return Math.abs(((v-l)/(u-l))*_.tickmark.tA)+_.tickmark.sA;
			},
			configFn:function(_){
				_.tickmark = _.get('tickmark');
				_.r = iChart.parsePercent(_.get('needle.radius'),_.tickmark.r - _.tickmark.get('width')*0.5);
				_.getRadian = _.get('getRadian');
				_.value = _.get('value');
				_.start = _.tickmark.lower;
				_.offset = _.value - _.start;
			},
			drawFn:function(_){
				var A = _.getRadian(_.get('value')),cap = _.get('cap.size'),Q = _.get('needle.size')/cap;
				
				_.T.polygon(_.get('needle.color'),_.get('needle.border.enable'),_.get('needle.border.width'),_.get('needle.border.color'),_.get('needle.shadow'),_.get('needle.alpham')||1,[{x:_.x+Math.cos(A-Q)*cap,y:_.y+Math.sin(A-Q)*cap},{x:_.x+Math.cos(A+Q)*cap,y:_.y+Math.sin(A+Q)*cap},{x:_.x+Math.cos(A)*_.r,y:_.y+Math.sin(A)*_.r}]);
				
				_.T.sector(_.x, _.y,cap, 0, 0, pi2, _.get('cap.color'),_.get('cap.border.enable'),_.get('cap.border.width'),_.get('cap.border.color'),_.get('needle.shadow'), false, true);
			}
		}, _);
		
		_.components.push(_.screen);
		_.components.push(_.panel);
		_.components.push(_.tickmark);
		_.components.push(_.needle);
	}

});
/**
 * @end
 */