function countDown(start,end,speed){
	setInterval(function (){
		if(start>end){
			if(start%10==0){
				$('.fold').css({
					animation:'fold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
				})
				$('.unfold').css({
					animation:'unfold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
				})
				$('#ten .upperCard span').html(parseInt(start/10)-1);
				$('#ten .lowerCard span').html(parseInt(start/10)-1)
				$('#ten .first span').html(parseInt(start/10)-1)
				$('#ten .second span').html(parseInt(start/10)-1)
				
				$('#ge .upperCard span').html(start%10)
				$('#ge .lowerCard span').html(9)
				$('#ge .first span').html(9)
				$('#ge .second span').html(start%10)
			}else{
				$('#ten .upperCard span').html(parseInt(start/10))
				$('#ten .lowerCard span').html(parseInt(start/10))
				$('#ten .first span').html(parseInt(start/10))
				$('#ten .second span').html(parseInt(start/10))
				
				$('#ge .upperCard span').html(start%10)
				$('#ge .lowerCard span').html(start%10-1)
				$('#ge .first span').html(start%10-1)
				$('#ge .second span').html(start%10)
				$('#ge .fold').css({
					animation:'fold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
				})
				$('#ge .unfold').css({
					animation:'unfold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
				})
				$('#ten .fold').css({
					animation:'none'
				})
				$('#ten .unfold').css({
					animation:'none'
				})
			}
			
			start--;
		}else{
			$('.fold').css({
				animation:'none'
			})
			$('.unfold').css({
				animation:'none'
			})
		}
	},speed)
}
var newYearTimer='';
function countDown2(start,end,speed){
	var sy=(start%10<end%10)?9:start%10;
	var sz=parseInt(start/10);
	clearInterval(newYearTimer)
	newYearTimer=setInterval(function (){
		$('#ge .upperCard span').html(sy)
		$('#ge .lowerCard span').html(sy)
		$('#ge .first span').html(sy)
		$('#ge .second span').html(sy)
		if(sy>end%10){
			$('#ge .fold').css({
					animation:'fold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
			})
			$('#ge .unfold').css({
				animation:'unfold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
			})
			sy--
		}else{
			$('#ge .fold').css({
				animation:'none'
			})
			$('#ge .unfold').css({
				animation:'none'
			})
			if(sz<=parseInt(end/10)){
				clearInterval(newYearTimer)
			}
		}
		$('#ten .upperCard span').html(sz)
		$('#ten .lowerCard span').html(sz)
		$('#ten .first span').html(sz)
		$('#ten .second span').html(sz)
		console.log(sz)
		if(sz>parseInt(end/10)){
			$('#ten .fold').css({
					animation:'fold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
			})
			$('#ten .unfold').css({
				animation:'unfold .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal forwards'
			})
			sz--
		}else{
			$('#ten .fold').css({
				animation:'none'
			})
			$('#ten .unfold').css({
				animation:'none'
			})
			if(sy<end%10){
				clearInterval(newYearTimer)
			}
		}
		
	},speed)
}
$(function(){
	$('img').on('tap',function(e){
		e.preventDefault();
	})
})
