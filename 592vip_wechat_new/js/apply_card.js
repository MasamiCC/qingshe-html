	mui.init();

$("#application_now").click(function(){
	 mui("#popover").popover("show");
});


	var address=[{
		id:1,
		reciver:'张三',
		mobile:'15995855970',
		cityname:'南通',
		areaname:'开发区',
		address:'通盛大道188号',
		flag:0
	},{
		id:1,
		reciver:'李斯',
		mobile:'18954574778',
		cityname:'南通',
		areaname:'崇川区',
		address:'南大街',
		flag:1
	},{
		id:1,
		reciver:'赵五',
		mobile:'15645645655',
		cityname:'南通',
		areaname:'开发区',
		address:'通盛大道120号',
		flag:1
	},{
		id:1,
		reciver:'忍者',
		mobile:'15900000000',
		cityname:'南通',
		areaname:'未知数',
		address:'通盛大道188号',
		flag:1
	}]
	
	function changeAddress(){
		mui("#popover").popover("toggle");
	}
	function addressClick(me){
		var checked=$(me).is(':checked');
		//console.log(checked)
		$('#address_list input[type=checkbox]').attr({
			checked:false
		})
		$(me).prop({
			checked:true
		})
		var clone=$(me).prev().find('ul').clone();
		$("#address ul").replaceWith(clone);
		mui("#popover").popover("toggle");
	}
	$(function(){
		loadAddress();
		$("#send_time").bind({
			'focus':function(e){
				$(this).blur()
				e.preventDefault();
				var now=new Date();
				var newD=new Date(now.setDate(now.getDate()+1))
				var picker = new mui.DtPicker({
					beginDate:new Date(),
					endDate:newD
				});
				picker.show(function(rs){
					console.log(rs)
					$("#send_time").val(rs.value)
				})
				return false;
			}
		})
		$("#ticket_list input[type=checkbox]").each(function(){
			$(this).bind({
				'click':function(){
					var checked=$(this).is(':checked');
					console.log(checked)
					$('#ticket_list input[type=checkbox]').attr({
						checked:false
					})
					$(this).prop({
						checked:'checked'
					})
					var name=$(this).prev().text();
					console.log(name)
					$(this).parents('.mui-collapse').removeClass('mui-active').find('.confirm_r').text(name)
					
				}
			})
			
		})
		$("#pay_list input[type=checkbox]").each(function(){
			$(this).bind({
				'click':function(){
					var checked=$(this).is(':checked');
					console.log(checked)
					$('#pay_list input[type=checkbox]').attr({
						checked:false
					})
					$(this).prop({
						checked:'checked'
					})
					var name=$(this).prev().text();
					console.log(name)
					$(this).parents('.mui-collapse').removeClass('mui-active').find('.confirm_r').text(name)
					
				}
			})
			
		})
		$("#area").on('input',function(){
			var val=$(this).val();
			$('#area_list').fadeIn();
			console.log(val)
		})
		$("#add_address").on('tap',function(){
			
			
			var temp={};
			temp.id=12;
			temp.reciver=$("#username").val(),
			temp.mobile=$("#mobile").val();
			temp.cityname='南通';
			temp.areaname='星空';
			temp.address=$("#address_detail").val();
			temp.flag=1;
			createAddressResponse(temp);
		})
		$("#area_list li").each(function(){
			$(this).bind({
				'click':function(){
					var li=$(this).clone();
					var area=li.find('span').text();
					$("#area").val(area);
					li.find('span').remove();
					var address=li.text();
					$("#address_detail").html(address)
					$('#area_list').fadeOut();
				}
			})
		})
		$("#add_new_address").on('tap',function(){
			mui("#popover").popover("toggle");
			mui("#popover2").popover("toggle");
			
		})
	})
	function loadTickets(){
		$("#ticket_list").empty()
		for (var i in tickets) {
			var html='<li class="mui-table-view-cell" data-id="'+tickets[i]['id']+'" data-value="'+tickets[i]['value']+'" data-coupon-type="'+tickets[i]['coupon_type']+'"> '
					+	'<div class="mui-input-row mui-checkbox ">'
					+	    '<label>'+tickets[i]['name']+'</label>'
					+	    '<input name="Checkbox" type="checkbox">'
					+	'</div>'
					+'</li>'
			$("#ticket_list").append(html)
		}
	}
	function createAddressResponse(data){
		address.push(data);
		loadAddress();
		mui("#popover2").popover("toggle");
		mui("#popover").popover("toggle");
		
		$("#address_form_div input").val('');
		$("#address_form_div textarea").val('')
	}
	function loadAddress(){
		console.log(address)
		$("#address_list").empty()
		for (var i in address) {
			var checked=''
			if (address[i]['flag']==0) {
				checked=' checked="checked"'
			}
			var html='<div class="mui-input-row mui-checkbox address_li" >'
				    +    '<div class="address_item">'
				    +    	'<ul>'
				    +    		'<li>'+address[i]['reciver']+'&nbsp; <span class="mui-pull-right">'+address[i]['mobile']+'&nbsp; </span></li>'
				    +    		'<li>'+address[i]['cityname']+address[i]['areaname']+address[i]['address']+' </li>'
				    +    	'</ul>'
				    +    '</div>'
				    +    '<input name="Checkbox" type="checkbox"'+checked+' onclick="addressClick(this)">'
				    +'</div>';
			$("#address_list").append(html)
		}
	}