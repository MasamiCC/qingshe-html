$(document).ready(function(){$(".header").load("../html/components/header.html",function(){var o=window.location.pathname;changeHeaderActive(o)}),$(".join_nav").load("../html/components/join.html"),$(".footer").load("../html/components/footer.html"),$(".bcBtns").load("../html/components/btns.html"),$("#Btnsall").hide(),$(window).scroll(function(){350<$(this).scrollTop()?$("#Btnsall").fadeIn():$("#Btnsall").fadeOut()}),$(document).on("click",".customer.btniebg",function(){$(".bcBtns_item .iframe_nav").addClass("show")}),$(document).on("click",".iframe_nav .close",function(o){o.stopPropagation(),$(this).closest(".iframe_nav").removeClass("show")})}),window.onload=function(){$(".loading_area").fadeOut(),$(".iframe_nav iframe").attr("src","https://www.sobot.com/chat/pc/index.html?sysNum=2d82f41063a5453fa088bd67b41cef38"),$(".bg_lazy").lazyLoad({container:"body"}),$(".zip_img").replacement(),console.log("%c轻奢点评"," font-size:2em;color: #b39054;text-shadow: 5px 5px 5px ragb(0,0,0,0.1);font-weight: bold;")};var changeHeaderActive=function(a){$.each($(".header_link"),function(o,n){var t=$(n).attr("dara-src");-1!=a.indexOf(t)&&$(n).addClass("active")})},wow=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!1,live:!0});function goTop(){return $("html ,body").animate({scrollTop:0},300),!1}wow.init();