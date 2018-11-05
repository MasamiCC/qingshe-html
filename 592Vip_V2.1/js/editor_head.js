$(function(){
var IMG_LENGTH = 1;//图片最大1MB
//var IMG_MAXCOUNT = 12;//最多选中图片张数

//var UP_IMGCOUNT = 0;//上传图片张数记录
//打开文件选择对话框
$("#div_imgfile").click(function () {
//  if ($(".lookimg").length >= IMG_MAXCOUNT) {
//      alert("一次最多上传" + IMG_MAXCOUNT + "张图片");
//      return;
//  }
     _CRE_FILE = document.createElement("input");
    if ($("#imgfile").length <= $("#lookimg").length) {//个数不足则新创建对象
        _CRE_FILE.setAttribute("type", "file");
        var id=$("#lookimg").length;
//      _CRE_FILE.setAttribute("id", "abc"+id);
        _CRE_FILE.setAttribute("id", "imgfile");
        _CRE_FILE.setAttribute("accept", ".png,.jpg,.jpeg");
//      _CRE_FILE.setAttribute("num", UP_IMGCOUNT);//记录此对象对应的编号
        $("#div_imgfile").after(_CRE_FILE);
    }
    else { //否则获取最后未使用对象
        _CRE_FILE = $("#imgfile").eq(0).get(0);
    }
    return $(_CRE_FILE).click();//打开对象选择框
});

//创建预览图，在动态创建的file元素onchange事件中处理
$("#imgfile").on("change", function () {
//  if ($(this).val().length > 0) {//判断是否有选中图片
//
//      //判断图片格式是否正确
//      var FORMAT = $(this).val().substr($(this).val().length - 3, 3);
//      if (FORMAT != "png" && FORMAT != "jpg" && FORMAT != "peg") {
//          alert("文件格式不正确！！！");
//          return;
//      }
//
//      //判断图片是否过大，当前设置1MB
//      var file = this.files[0];//获取file文件对象
//      
//      console.log("file="+file);
//      console.log(file)
//      
//      if (file.size > (IMG_LENGTH * 1024 * 1024)) {
//          alert("图片大小不能超过" + IMG_LENGTH + "MB");
//          $(this).val("");
//          return;
//      }
//      
        var pic = document.getElementById("preview"),

        file = document.getElementById("f");

 

    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();

 

     // gif在IE浏览器暂时无法显示

     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){

         alert("图片的格式必须为png或者jpg或者jpeg格式！"); 

         return;

     }

     var isIE = navigator.userAgent.match(/MSIE/)!= null,

         isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

 

     if(isIE) {

        file.select();

        var reallocalpath = document.selection.createRange().text;

 

        // IE6浏览器设置img的src为本地路径可以直接显示图片

         if (isIE6) {

            pic.src = reallocalpath;

         }else {

            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现

             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";

             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片

             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

         }

     }else {

        html5Reader(file);

     }
        
        
  
    
//  }
});

	});
$(function(){
//	addPic(2,'../imgs/user.png');
})

/*
 	添加图片
 * id：返回的图片id；
 * src：返回的图片地址
 * */
function addPic(id,src){
	var div=$('<div></div>');
	div.attr('id','lookimg');
	div.attr('data-id',id);
	var img=new Image();
	img.src=src;
	$(img).load(function(){
		div.append(img);
	})
	var h='<div class="lookimg_delBtn" style="display: none;" onclick="removePic(this)">移除</div>'
    	+		'<div></div>'
    	+'</div>';
	div.append(h)
	$("#clear").before(div);
}

/*
 
 * 移除图片
 * */
function removePic(me){
	var _this=$(me);
	_this.parent().remove();
}
function change() {

    var pic = document.getElementById("preview"),

        file = document.getElementById("f");

 

    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();

 

     // gif在IE浏览器暂时无法显示

     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){

         alert("图片的格式必须为png或者jpg或者jpeg格式！"); 

         return;

     }

     var isIE = navigator.userAgent.match(/MSIE/)!= null,

         isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

 

     if(isIE) {

        file.select();

        var reallocalpath = document.selection.createRange().text;

 

        // IE6浏览器设置img的src为本地路径可以直接显示图片

         if (isIE6) {

            pic.src = reallocalpath;

         }else {

            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现

             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";

             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片

             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

         }

     }else {

        html5Reader(file);

     }

}

 

 function html5Reader(file){

     var file = file.files[0];

     var reader = new FileReader();

     reader.readAsDataURL(file);

     reader.onload = function(e){

         var pic = document.getElementById("preview");

         pic.src=this.result;

     }

 }
