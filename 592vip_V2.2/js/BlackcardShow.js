$(function(){
		loadList(qydata);
		loadQuanyi();
		var swiper = new Swiper('.swiper-container', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        slidesPerView: 1,
	        spaceBetween: 30,
	        loop: true
	    });
	    
	    $('.blackcard_fipic img').click(function(){
		var index=$(this).parents('.blackcard_firstitem').index();
		active=index;
		var toIndex=index+1;
		
	    swiper.slideTo(toIndex, 1000, false);//切换到第一个slide，速度为1秒
	    swiper.update();
	    
	});
});


var qydata=[
	{
		swiper_img:'newblackicon1.png',
		swiper_title:'尊贵图标',
		swiper_content:'不求闪耀全场，只让你展现真正的自己。',
		key:'zgtb'
	},
	{
		swiper_img:'newblackicon2.png',
		swiper_title:'贴心管家',
		swiper_content:'最知心的沟通，最细心的安排，最舒心的服务，全方位满足会员需求，想您所想，做您最贴心的私人管家，管家专线：4001588592。',
		key:'txgj'
	},
	{
		swiper_img:'newblackicon3.png',
		swiper_title:'轻奢福利',
		swiper_content:'各式美味试吃，五星级酒店试睡，特色景区试玩，首发、首映限量参加，不止是免费，快人一步，只在轻奢专享福利。',
		key:'qsfl'
	},
	{
		swiper_img:'newblackicon4.png',
		swiper_title:'轻奢沙龙',
		swiper_content:'轻奢点评所到一个城市将会同步开设592VIP实体社交沙龙，供轻奢会员专享。',
		key:'qssl'
	},
	{
		swiper_img:'newblackicon5.png',
		swiper_title:'特权折扣',
		swiper_content:'会员专属特权，我们不一样。',
		key:'tqzk'
	},
	{
		swiper_img:'newblackicon6.png',
		swiper_title:'车位预留',
		swiper_content:'不管外面有多拥挤，在轻奢的世界里，您都拥有属于您的专属车位。（该特权仅限参与区块链红利释放体系的黑卡会员所有）',
		key:'cwyl'
	},
	{
		swiper_img:'newblackicon7.png',
		swiper_title:'公益慈善',
		swiper_content:'轻奢点评慈善基金，由轻奢点评和红十字会联合成立，专注健康扶贫，只要在轻奢消费或经营，就是在做慈善。未来慈善不再是奢侈品，而应成为大家的生活习惯。',
		key:'gycs'
	},
	{
		swiper_img:'newblackicon8.png',
		swiper_title:'优先体验',
		swiper_content:'针对平台开发的新版功能，符合要求的会员可优先体验和尊享服务。',
		key:'yxty'
	},
	{
		swiper_img:'newblackicon9.png',
		swiper_title:'定制旅行',
		swiper_content:'根据会员的个性化需求，帮助制定专属行程与旅行计划，为您提供最专业的建议和定制方案，带您深入当地的风土人情，助您体验旅行真正的乐趣。',
		key:'dzlx'
	},
	{
		swiper_img:'newblackicon10.png',
		swiper_title:'酒店特权',
		swiper_content:'为您做好需要的预定和安排，确认跟进、特殊需求偏好、加急处理、售后协调维权等，让您享受完美省心的入住体验。（该特权仅限参与区块链红利释放体系满3个周期以上的会员所有）',
		key:'jdtq'
	},
	{
		swiper_img:'newblackicon11.png',
		swiper_title:'私人飞机',
		swiper_content:'独有的高端服务，让会员有机会享受更低的价格乘坐私人飞机出行。（该特权仅限参与区块链红利释放体系满5个周期以上的会员所有）',
		key:'srfj'
	},
	{
		swiper_img:'newblackicon12.png',
		swiper_title:'海外专享',
		swiper_content:'房产购置、热门投资、子女入学、境外医疗等，轻奢点评为你提供多样化的选择，不管您走到哪里，轻奢点评服务到哪里。',
		key:'hwzx'
	},
	{
		swiper_img:'newblackicon13.png',
		swiper_title:'免担租赁',
		swiper_content:'独有的高端服务，让会员有机会享受更低的价格乘坐私人飞机出行。（该特权仅限参与区块链红利释放体系满5个周期以上的会员所有）',
		key:'mdzl'
	},
	{
		swiper_img:'newblackicon14.png',
		swiper_title:'高尔夫俱乐部',
		swiper_content:'该特权仅限参与区块链红利释放体系满5个周期以上的会员所有。',
		key:'gefclub'
	},
	{
		swiper_img:'newblackicon15.png',
		swiper_title:'黑卡私董会',
		swiper_content:'从线上走向线下，面对面更为精准的圈层社交，只为凝聚对的人。',
		key:'hksdh'
	},
	{
		swiper_img:'newblackicon16.png',
		swiper_title:'嘉宾特权',
		swiper_content:'该特权仅限参与区块链红利释放体系并累计贡献不低于5000积分用于慈善基金健康扶贫的黑卡会员所有',
		key:'jbtq'
	},
	{
		swiper_img:'newblackicon17.png',
		swiper_title:'游艇俱乐部',
		swiper_content:'该特权仅限参与区块链红利释放体系满5个周期以上的会员所有。',
		key:'ytclub'
	},
	{
		swiper_img:'newblackicon18.png',
		swiper_title:'共享分红权',
		swiper_content:'该特权仅限参与区块链红利释放体系的黑卡会员所有。',
		key:'gxfh'
	},
	{
		swiper_img:'newblackicon19.png',
		swiper_title:'生日祝福',
		swiper_content:'在会员生日当天会收到轻奢点评为您送来的轻奢祝福和生日礼物。',
		key:'srzf'
	},
	{
		swiper_img:'newblackicon20.png',
		swiper_title:'消费折扣',
		swiper_content:'同样的产品，劲爆的折扣，我们为您打造属于您的消费新体验。',
		key:'xfzk'
	},
	{
		swiper_img:'newblackicon21.png',
		swiper_title:'分层社交',
		swiper_content:'轻奢点评是专为不同层次、不同业态、不同爱好、不同类别的轻奢族打造的专属社区，只为给你带来更精准的社交。',
		key:'fcsj'
	},
];
function loadQuanyi(){
		for (var i in qydata) {
			var html='<div class="blackcard_firstitem">'
					+		'<div class="blackcard_fipic">'
					+			'<img src="../img/'+qydata[i]['swiper_img']+'"/>'
					+		'</div>'
					+		'<div class="blackcard_fifont">'
					+			qydata[i]['swiper_title']
					+		'</div>'
					+	'</div>';
			$('.blackcard_firstitemcon').append(html)
		}
	}
		function loadList(data){
			$('.swiper-wrapper').html('')
			for (var i in qydata) {
				var html='<div class="swiper-slide">'
					+		'<div class="swiperbg">'
					+   		'<div class="swiper_img">'
					+   			'<img src="../img/'+qydata[i]['swiper_img']+'" alt="" />'
					+   		'</div>'
					+   		'<div class="swiper_title">'
					+   			qydata[i]['swiper_title']
					+   		'</div>'
					+   		'<div class="swiper_content">'
					+   			qydata[i]['swiper_content']
					+   		'</div>'
					+   		'<div class="open_soon_con">'
					+              '<a href="../html/joinUs.html">'
					+         	  		'<span class="open_soon">'
					+   		    		'立即开通领取特权'
					+   		    	'</span>'
					+				'</a>'
					+   		'</div>'
					+   	'</div>'
					+      '</div>'
				
				$('.swiper-wrapper').append(html)
			}
	}
		