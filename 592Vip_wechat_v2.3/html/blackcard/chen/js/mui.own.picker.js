(function(h,i,k,d){var g=30;var j=90;var f=40;var e=10;var o=h.rad2deg=function(p){return p/(Math.PI/180)};var m=h.deg2rad=function(p){return p*(Math.PI/180)};var c=navigator.platform.toLowerCase();var n=navigator.userAgent.toLowerCase();var a=(n.indexOf("iphone")>-1||n.indexOf("ipad")>-1||n.indexOf("ipod")>-1)&&(c.indexOf("iphone")>-1||c.indexOf("ipad")>-1||c.indexOf("ipod")>-1);var l=h.Picker=function(r,q){var p=this;p.holder=r;p.options=q||{};p.init();p.initInertiaParams();p.calcElementItemPostion(true);p.bindEvent()};l.prototype.findElementItems=function(){var p=this;p.elementItems=[].slice.call(p.holder.querySelectorAll("li"));return p.elementItems};l.prototype.init=function(){var p=this;p.list=p.holder.querySelector("ul");p.findElementItems();p.height=p.holder.offsetHeight;p.r=p.height/2-e;p.d=p.r*2;p.itemHeight=p.elementItems.length>0?p.elementItems[0].offsetHeight:f;p.itemAngle=parseInt(p.calcAngle(p.itemHeight*0.8));p.hightlightRange=p.itemAngle/2;p.visibleRange=j;p.beginAngle=0;p.beginExceed=p.beginAngle-g;p.list.angle=p.beginAngle;if(a){p.list.style.webkitTransformOrigin="center center "+p.r+"px"}};l.prototype.calcElementItemPostion=function(q){var p=this;if(q){p.items=[]}p.elementItems.forEach(function(t){var s=p.elementItems.indexOf(t);p.endAngle=p.itemAngle*s;t.angle=p.endAngle;t.style.webkitTransformOrigin="center center -"+p.r+"px";t.style.webkitTransform="translateZ("+p.r+"px) rotateX("+(-p.endAngle)+"deg)";if(q){var r={};r.text=t.innerHTML||"";r.value=t.getAttribute("data-value")||r.text;p.items.push(r)}});p.endExceed=p.endAngle+g;p.calcElementItemVisibility(p.beginAngle)};l.prototype.calcAngle=function(u){var s=this;var p=b=parseFloat(s.r);u=Math.abs(u);var r=parseInt(u/s.d)*180;u=u%s.d;var t=(p*p+b*b-u*u)/(2*p*b);var q=r+o(Math.acos(t));return q};l.prototype.calcElementItemVisibility=function(q){var p=this;p.elementItems.forEach(function(t){var u=Math.abs(t.angle-q);if(u<p.hightlightRange){t.classList.add("highlight");var s=k.getElementsByClassName("mui-picker");var r=k.getElementsByClassName("picker-model-div");if(t.innerHTML==="按年"){s[1].classList.add("hide");s[2].classList.add("hide");r[1].classList.add("estop");r[2].classList.add("estop")}else{if(t.innerHTML==="按月"){s[1].classList.remove("hide");s[2].classList.add("hide");r[1].classList.remove("estop");r[2].classList.add("estop")}else{if(t.innerHTML==="按日"){s[1].classList.remove("hide");s[2].classList.remove("hide");r[1].classList.remove("estop");r[2].classList.remove("estop")}}}}else{if(u<p.visibleRange){t.classList.add("visible");t.classList.remove("highlight")}else{t.classList.remove("highlight");t.classList.remove("visible")}}})};l.prototype.setAngle=function(q){var p=this;p.list.angle=q;p.list.style.webkitTransform="perspective(1000px) rotateY(0deg) rotateX("+q+"deg)";p.calcElementItemVisibility(q)};l.prototype.bindEvent=function(){var q=this;var r=0;var p=null;var s=false;q.holder.addEventListener(h.EVENT_START,function(t){s=true;t.preventDefault();q.list.style.webkitTransition="";p=(t.changedTouches?t.changedTouches[0]:t).pageY;r=q.list.angle;q.updateInertiaParams(t,true)},false);q.holder.addEventListener(h.EVENT_END,function(t){s=false;t.preventDefault();q.startInertiaScroll(t)},false);q.holder.addEventListener(h.EVENT_CANCEL,function(t){s=false;t.preventDefault();q.startInertiaScroll(t)},false);q.holder.addEventListener(h.EVENT_MOVE,function(v){if(!s){return}v.preventDefault();var u=(v.changedTouches?v.changedTouches[0]:v).pageY;var t=u-p;var x=q.calcAngle(t);var w=t>0?r-x:r+x;if(w>q.endExceed){w=q.endExceed}if(w<q.beginExceed){w=q.beginExceed}q.setAngle(w);q.updateInertiaParams(v)},false);q.list.addEventListener("tap",function(t){elementItem=t.target;if(elementItem.tagName=="LI"){q.setSelectedIndex(q.elementItems.indexOf(elementItem),200)}},false)};l.prototype.initInertiaParams=function(){var p=this;p.lastMoveTime=0;p.lastMoveStart=0;p.stopInertiaMove=false};l.prototype.updateInertiaParams=function(s,q){var r=this;var p=s.changedTouches?s.changedTouches[0]:s;if(q){r.lastMoveStart=p.pageY;r.lastMoveTime=s.timeStamp||Date.now();r.startAngle=r.list.angle}else{var t=s.timeStamp||Date.now();if(t-r.lastMoveTime>300){r.lastMoveTime=t;r.lastMoveStart=p.pageY}}r.stopInertiaMove=true};l.prototype.startInertiaScroll=function(p){var B=this;var y=p.changedTouches?p.changedTouches[0]:p;var z=p.timeStamp||Date.now();var A=(y.pageY-B.lastMoveStart)/(z-B.lastMoveTime);var r=A>0?-1:1;var w=r*0.0006*-1;var s=Math.abs(A/w);var x=A*s/2;var u=B.list.angle;var t=B.calcAngle(x)*r;var q=t;if(u+t<B.beginExceed){t=B.beginExceed-u;s=s*(t/q)*0.6}if(u+t>B.endExceed){t=B.endExceed-u;s=s*(t/q)*0.6}if(t==0){B.endScroll();return}B.scrollDistAngle(z,u,t,s)};l.prototype.scrollDistAngle=function(r,q,t,s){var p=this;p.stopInertiaMove=false;(function(x,u,A,y){var v=13;var B=y/v;var w=0;(function z(){if(p.stopInertiaMove){return}var C=p.quartEaseOut(w,u,A,B);p.setAngle(C);w++;if(w>B-1||C<p.beginExceed||C>p.endExceed){p.endScroll();return}setTimeout(z,v)})()})(r,q,t,s)
};l.prototype.quartEaseOut=function(q,p,s,r){return -s*((q=q/r-1)*q*q*q-1)+p};l.prototype.endScroll=function(){var p=this;if(p.list.angle<p.beginAngle){p.list.style.webkitTransition="150ms ease-out";p.setAngle(p.beginAngle)}else{if(p.list.angle>p.endAngle){p.list.style.webkitTransition="150ms ease-out";p.setAngle(p.endAngle)}else{var q=parseInt((p.list.angle/p.itemAngle).toFixed(0));p.list.style.webkitTransition="100ms ease-out";p.setAngle(p.itemAngle*q)}}p.triggerChange()};l.prototype.triggerChange=function(q){var p=this;setTimeout(function(){var r=p.getSelectedIndex();var s=p.items[r];if(h.trigger&&(r!=p.lastIndex||q===true)){h.trigger(p.holder,"change",{"index":r,"item":s})}p.lastIndex=r;typeof q==="function"&&q()},0)};l.prototype.correctAngle=function(q){var p=this;if(q<p.beginAngle){return p.beginAngle}else{if(q>p.endAngle){return p.endAngle}else{return q}}};l.prototype.setItems=function(r){var q=this;q.items=r||[];var p=[];q.items.forEach(function(s){if(s!==null&&s!==d){p.push("<li>"+(s.text||s)+"</li>")}});q.list.innerHTML=p.join("");q.findElementItems();q.calcElementItemPostion();q.setAngle(q.correctAngle(q.list.angle));q.triggerChange(true)};l.prototype.getItems=function(){var p=this;return p.items};l.prototype.getSelectedIndex=function(){var p=this;return parseInt((p.list.angle/p.itemAngle).toFixed(0))};l.prototype.setSelectedIndex=function(q,r,u){var p=this;p.list.style.webkitTransition="";var t=p.correctAngle(p.itemAngle*q);if(r&&r>0){var s=t-p.list.angle;p.scrollDistAngle(Date.now(),p.list.angle,s,r)}else{p.setAngle(t)}p.triggerChange(u)};l.prototype.getSelectedItem=function(){var p=this;return p.items[p.getSelectedIndex()]};l.prototype.getSelectedValue=function(){var p=this;return(p.items[p.getSelectedIndex()]||{}).value};l.prototype.getSelectedText=function(){var p=this;return(p.items[p.getSelectedIndex()]||{}).text};l.prototype.setSelectedValue=function(s,t,u){var p=this;for(var q in p.items){var r=p.items[q];if(r.value==s){p.setSelectedIndex(q,t,u);return}}};if(h.fn){h.fn.picker=function(p){this.each(function(t,s){if(s.picker){return}if(p){s.picker=new l(s,p)}else{var r=s.getAttribute("data-picker-options");var q=r?JSON.parse(r):{};s.picker=new l(s,q)}});return this[0]?this[0].picker:null};h.ready(function(){h(".mui-picker").picker()})}})(window.mui||window,window,document,undefined);(function(f,a){f.dom=function(g){if(typeof(g)!=="string"){if((g instanceof Array)||(g[0]&&g.length)){return[].slice.call(g)}else{return[g]}}if(!f.__create_dom_div__){f.__create_dom_div__=a.createElement("div")}f.__create_dom_div__.innerHTML=g;return[].slice.call(f.__create_dom_div__.childNodes)};var e='<div class="mui-poppicker">		<div class="mui-poppicker-header">			<button class="mui-btn mui-poppicker-btn-cancel">取消</button>			<button class="mui-btn mui-btn-blue mui-poppicker-btn-ok">确定</button>			<div class="mui-poppicker-clear"></div>		</div>		<div class="mui-poppicker-body">		</div>	</div>';var c='<div class="mui-picker">		<div class="mui-picker-inner">			<div class="mui-pciker-rule mui-pciker-rule-ft"></div>			<ul class="mui-pciker-list">			</ul>			<div class="mui-pciker-rule mui-pciker-rule-bg"></div>		</div>	</div>';var d=f.PopPicker=f.Class.extend({init:function(h){var g=this;g.options=h||{};g.options.buttons=g.options.buttons||["取消","确定"];g.panel=f.dom(e)[0];a.body.appendChild(g.panel);g.ok=g.panel.querySelector(".mui-poppicker-btn-ok");g.cancel=g.panel.querySelector(".mui-poppicker-btn-cancel");g.body=g.panel.querySelector(".mui-poppicker-body");g.mask=f.createMask();g.cancel.innerText=g.options.buttons[0];g.ok.innerText=g.options.buttons[1];g.cancel.addEventListener("tap",function(i){g.hide()},false);g.ok.addEventListener("tap",function(j){if(g.callback){var i=g.callback(g.getSelectedItems());if(i!==false){g.hide()}}},false);g.mask[0].addEventListener("tap",function(){g.hide()},false);g._createPicker();g.panel.addEventListener(f.EVENT_START,function(i){i.preventDefault()},false);g.panel.addEventListener(f.EVENT_MOVE,function(i){i.preventDefault()},false)},_createPicker:function(){var g=this;var k=g.options.layer||1;var l=(100/k)+"%";g.pickers=[];for(var j=1;j<=k;j++){var m=f.dom(c)[0];m.style.width=l;g.body.appendChild(m);var h=f(m).picker();g.pickers.push(h);m.addEventListener("change",function(n){var p=this.nextSibling;if(p&&p.picker){var i=n.detail||{};var o=i.item||{};p.picker.setItems(o.children)}},false)}},setData:function(h){var g=this;h=h||[];g.pickers[0].setItems(h)},getSelectedItems:function(){var h=this;var g=[];for(var k in h.pickers){var j=h.pickers[k];g.push(j.getSelectedItem()||{})}return g},show:function(h){var g=this;g.callback=h;g.mask.show();a.body.classList.add(f.className("poppicker-active-for-page"));g.panel.classList.add(f.className("active"));g.__back=f.back;f.back=function(){g.hide()}},hide:function(){var g=this;if(g.disposed){return}g.panel.classList.remove(f.className("active"));g.mask.close();a.body.classList.remove(f.className("poppicker-active-for-page"));f.back=g.__back
},dispose:function(){var g=this;g.hide();setTimeout(function(){g.panel.parentNode.removeChild(g.panel);for(var h in g){g[h]=null;delete g[h]}g.disposed=true},300)}})})(mui,document);(function(d,a){d.dom=function(f){if(typeof(f)!=="string"){if((f instanceof Array)||(f[0]&&f.length)){return[].slice.call(f)}else{return[f]}}if(!d.__create_dom_div__){d.__create_dom_div__=a.createElement("div")}d.__create_dom_div__.innerHTML=f;return[].slice.call(d.__create_dom_div__.childNodes)};var e='<div class="mui-dtpicker" data-type="datetime">		<div class="mui-dtpicker-header">			<button data-id="btn-cancel" class="mui-btn">取消</button>			<button data-id="btn-ok" class="mui-btn mui-btn-blue">确定</button>		</div>		<div class="mui-dtpicker-title"><h5 data-id="title-y">年</h5><h5 data-id="title-m">月</h5><h5 data-id="title-d">日</h5><h5 data-id="title-h">时</h5><h5 data-id="title-i">分</h5></div>		<div class="mui-dtpicker-body">		    <div class="picker-model">		      <div class="picker-model-div"></div>		      <div class="picker-model-div"></div>		      <div class="picker-model-div"></div>		      <div class="picker-model-div"></div>		    </div>			<div data-id="picker-y" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-m" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-d" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-h" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-i" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>		</div>	</div>';var c=d.DtPicker=d.Class.extend({init:function(g){var f=this;var i=d.dom(e)[0];a.body.appendChild(i);d('[data-id*="picker"]',i).picker();var h=f.ui={picker:i,mask:d.createMask(),ok:d('[data-id="btn-ok"]',i)[0],cancel:d('[data-id="btn-cancel"]',i)[0],y:d('[data-id="picker-y"]',i)[0],m:d('[data-id="picker-m"]',i)[0],d:d('[data-id="picker-d"]',i)[0],h:d('[data-id="picker-h"]',i)[0],i:d('[data-id="picker-i"]',i)[0],labels:d('[data-id*="title-"]',i),};h.cancel.addEventListener("tap",function(){f.hide()},false);h.ok.addEventListener("tap",function(){var j=f.callback(f.getSelected());if(j!==false){f.hide()}},false);h.y.addEventListener("change",function(j){if(f.options.beginMonth||f.options.endMonth){f._createMonth()}else{f._createDay()}},false);h.m.addEventListener("change",function(j){f._createDay()},false);h.d.addEventListener("change",function(j){if(f.options.beginMonth||f.options.endMonth){f._createHours()}},false);h.h.addEventListener("change",function(j){if(f.options.beginMonth||f.options.endMonth){f._createMinutes()}},false);h.mask[0].addEventListener("tap",function(){f.hide()},false);f._create(g);f.ui.picker.addEventListener(d.EVENT_START,function(j){j.preventDefault()},false);f.ui.picker.addEventListener(d.EVENT_MOVE,function(j){j.preventDefault()},false)},getSelected:function(){var f=this;var i=f.ui;var h=f.options.type;var g={type:h,y:i.y.picker.getSelectedItem(),m:i.m.picker.getSelectedItem(),d:i.d.picker.getSelectedItem(),h:i.h.picker.getSelectedItem(),i:i.i.picker.getSelectedItem(),toString:function(){return this.value}};switch(h){case"datetime":g.value=g.y.value+"-"+g.m.value+"-"+g.d.value+" "+g.h.value+":"+g.i.value;g.text=g.y.text+"-"+g.m.text+"-"+g.d.text+" "+g.h.text+":"+g.i.text;break;case"date":g.value=g.y.value+"-"+g.m.value+"-"+g.d.value;g.text=g.y.text+"-"+g.m.text+"-"+g.d.text;break;case"time":g.value=g.h.value+":"+g.i.value;g.text=g.h.text+":"+g.i.text;break;case"month":g.value=g.y.value+"-"+g.m.value;g.text=g.y.text+"-"+g.m.text;break;case"hour":g.value=g.y.value+"-"+g.m.value+"-"+g.d.value+" "+g.h.value;g.text=g.y.text+"-"+g.m.text+"-"+g.d.text+" "+g.h.text;break}return g},setSelectedValue:function(i){var g=this;var h=g.ui;var f=g._parseValue(i);h.y.picker.setSelectedValue(f.y,0,function(){h.m.picker.setSelectedValue(f.m,0,function(){h.d.picker.setSelectedValue(f.d,0,function(){h.h.picker.setSelectedValue(f.h,0,function(){h.i.picker.setSelectedValue(f.i,0)})})})})},isLeapYear:function(f){return(f%4==0&&f%100!=0)||(f%400==0)},_inArray:function(i,h){for(var f in i){var g=i[f];if(g===h){return true
}}return false},getDayNum:function(g,h){var f=this;if(f._inArray([1,3,5,7,8,10,12],h)){return 31}else{if(f._inArray([4,6,9,11],h)){return 30}else{if(f.isLeapYear(g)){return 29}else{return 28}}}},_fill:function(f){f=f.toString();if(f.length<2){f=0+f}return f},_isBeginYear:function(){return this.options.beginYear===parseInt(this.ui.y.picker.getSelectedValue())},_isBeginMonth:function(){return this.options.beginMonth&&this._isBeginYear()&&this.options.beginMonth===parseInt(this.ui.m.picker.getSelectedValue())},_isBeginDay:function(){return this._isBeginMonth()&&this.options.beginDay===parseInt(this.ui.d.picker.getSelectedValue())},_isBeginHours:function(){return this._isBeginDay()&&this.options.beginHours===parseInt(this.ui.h.picker.getSelectedValue())},_isEndYear:function(){return this.options.endYear===parseInt(this.ui.y.picker.getSelectedValue())},_isEndMonth:function(){return this.options.endMonth&&this._isEndYear()&&this.options.endMonth===parseInt(this.ui.m.picker.getSelectedValue())},_isEndDay:function(){return this._isEndMonth()&&this.options.endDay===parseInt(this.ui.d.picker.getSelectedValue())},_isEndHours:function(){return this._isEndDay()&&this.options.endHours===parseInt(this.ui.h.picker.getSelectedValue())},_createYear:function(l){var g=this;var h=g.options;var j=g.ui;var i=[];if(h.customData.y){i=h.customData.y}else{var f=h.beginYear;var k=h.endYear;for(var m=f;m<=k;m++){i.push({text:m+"",value:m})}}j.y.picker.setItems(i)},_createMonth:function(k){var g=this;var h=g.options;var i=g.ui;var j=[];if(h.customData.m){j=h.customData.m}else{var f=h.beginMonth&&g._isBeginYear()?h.beginMonth:1;var n=h.endMonth&&g._isEndYear()?h.endMonth:12;for(;f<=n;f++){var l=g._fill(f);j.push({text:l,value:l})}}i.m.picker.setItems(j)},_createDay:function(k){var f=this;var h=f.options;var j=f.ui;var i=[];if(h.customData.d){i=h.customData.d}else{var m=f._isBeginMonth()?h.beginDay:1;var g=f._isEndMonth()?h.endDay:f.getDayNum(parseInt(this.ui.y.picker.getSelectedValue()),parseInt(this.ui.m.picker.getSelectedValue()));for(;m<=g;m++){var l=f._fill(m);i.push({text:l,value:l})}}j.d.picker.setItems(i);k=k||j.d.picker.getSelectedValue()},_createHours:function(m){var i=this;var j=i.options;var l=i.ui;var g=[];if(j.customData.h){g=j.customData.h}else{var k=i._isBeginDay()?j.beginHours:0;var f=i._isEndDay()?j.endHours:23;for(;k<=f;k++){var n=i._fill(k);g.push({text:n,value:n})}}l.h.picker.setItems(g)},_createMinutes:function(m){var h=this;var j=h.options;var l=h.ui;var f=[];if(j.customData.i){f=j.customData.i}else{var k=h._isBeginHours()?j.beginMinutes:0;var g=h._isEndHours()?j.endMinutes:59;for(;k<=g;k++){var n=h._fill(k);f.push({text:n,value:n})}}l.i.picker.setItems(f)},_setLabels:function(){var f=this;var g=f.options;var h=f.ui;h.labels.each(function(k,j){j.innerText=g.labels[k]})},_setButtons:function(){var f=this;var g=f.options;var h=f.ui;h.cancel.innerText=g.buttons[0];h.ok.innerText=g.buttons[1]},_parseValue:function(i){var g=this;var f={};if(i){var j=i.replace(":","-").replace(" ","-").split("-");f.y=j[0];f.m=j[1];f.d=j[2];f.h=j[3];f.i=j[4]}else{var h=new Date();f.y=h.getFullYear();f.m=h.getMonth()+1;f.d=h.getDate();f.h=h.getHours();f.i=h.getMinutes()}return f},_create:function(h){var f=this;h=h||{};h.labels=h.labels||["年","月","日","时","分"];h.buttons=h.buttons||["取消","确定"];h.type=h.type||"datetime";h.customData=h.customData||{};f.options=h;var g=new Date();var i=h.beginDate;if(i instanceof Date&&!isNaN(i.valueOf())){h.beginYear=i.getFullYear();h.beginMonth=i.getMonth()+1;h.beginDay=i.getDate();h.beginHours=i.getHours();h.beginMinutes=i.getMinutes()}var k=h.endDate;if(k instanceof Date&&!isNaN(k.valueOf())){h.endYear=k.getFullYear();h.endMonth=k.getMonth()+1;h.endDay=k.getDate();h.endHours=k.getHours();h.endMinutes=k.getMinutes()}h.beginYear=h.beginYear||(g.getFullYear()-5);h.endYear=h.endYear||(g.getFullYear()+5);var j=f.ui;f._setLabels();f._setButtons();j.picker.setAttribute("data-type",h.type);f._createYear();f._createMonth();f._createDay();f._createHours();f._createMinutes();f.setSelectedValue(h.value)},show:function(h){var f=this;var g=f.ui;f.callback=h||d.noop;g.mask.show();a.body.classList.add(d.className("dtpicker-active-for-page"));g.picker.classList.add(d.className("active"));f.__back=d.back;d.back=function(){f.hide()}},hide:function(){var f=this;if(f.disposed){return}var g=f.ui;g.picker.classList.remove(d.className("active"));g.mask.close();a.body.classList.remove(d.className("dtpicker-active-for-page"));d.back=f.__back},dispose:function(){var f=this;f.hide();setTimeout(function(){f.ui.picker.parentNode.removeChild(f.ui.picker);for(var g in f){f[g]=null;delete f[g]}f.disposed=true},300)}})})(mui,document);