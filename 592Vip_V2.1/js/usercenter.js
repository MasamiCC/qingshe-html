//  店铺评分
    $('.collectshop_star').raty({
			score: function() {
			    return $(this).attr('data-score');
			},
			size: 40,
			number: 5,
			readOnly:true,
			starOn:'../imgs/icon1.png',
			starOff:'../imgs/icon2.png',
			starHalf:'../imgs/icon3.png',
		});
//  店铺评分