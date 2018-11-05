$(function(){
var IMG_LENGTH = 1;//图片最大1MB
var IMG_MAXCOUNT = 12;//最多选中图片张数

var UP_IMGCOUNT = 0;//上传图片张数记录
//打开文件选择对话框
$("#div_imgfile").click(function () {
    if ($(".lookimg").length >= IMG_MAXCOUNT) {
        alert("一次最多上传" + IMG_MAXCOUNT + "张图片");
        return;
    }
     _CRE_FILE = document.createElement("input");
    if ($(".imgfile").length <= $(".lookimg").length) {//个数不足则新创建对象
        _CRE_FILE.setAttribute("type", "file");
        var id=$(".lookimg").length;
//      _CRE_FILE.setAttribute("id", "abc"+id);
        _CRE_FILE.setAttribute("class", "imgfile");
        _CRE_FILE.setAttribute("accept", ".png,.jpg,.jpeg");
        _CRE_FILE.setAttribute("num", UP_IMGCOUNT);//记录此对象对应的编号
        $("#div_imgfile").after(_CRE_FILE);
    }
    else { //否则获取最后未使用对象
        _CRE_FILE = $(".imgfile").eq(0).get(0);
    }
    return $(_CRE_FILE).click();//打开对象选择框
});

//创建预览图，在动态创建的file元素onchange事件中处理
$(".imgfile").live("change", function () {
    if ($(this).val().length > 0) {//判断是否有选中图片

        //判断图片格式是否正确
        var FORMAT = $(this).val().substr($(this).val().length - 3, 3);
        if (FORMAT != "png" && FORMAT != "jpg" && FORMAT != "peg") {
            alert("文件格式不正确！！！");
            return;
        }

        //判断图片是否过大，当前设置1MB
        var file = this.files[0];//获取file文件对象
        
        console.log("file="+file);
        console.log(file)
        
        if (file.size > (IMG_LENGTH * 1024 * 1024)) {
            alert("图片大小不能超过" + IMG_LENGTH + "MB");
            $(this).val("");
            return;
        }
        /*
        //创建预览外层
        var _prevdiv = document.createElement("div");
        _prevdiv.setAttribute("class", "lookimg");
        _prevdiv.setAttribute("id", "123");
        //创建内层img对象
        var preview = document.createElement("img");
        $(_prevdiv).append(preview);
        
        console.log("preview="+preview+"preview="+typeof preview);
        
        //创建删除按钮
        var IMG_DELBTN = document.createElement("div");
        IMG_DELBTN.setAttribute("class", "lookimg_delBtn");
        IMG_DELBTN.innerHTML = "移除";
        $(_prevdiv).append(IMG_DELBTN);
        //创建进度条
        var IMG_PROGRESS = document.createElement("div");
        IMG_PROGRESS.setAttribute("class", "lookimg_progress");
        $(IMG_PROGRESS).append(document.createElement("div"));
        $(_prevdiv).append(IMG_PROGRESS);
        //记录此对象对应编号
        _prevdiv.setAttribute("num", $(this).attr("num"));
        //对象注入界面
        $("#div_imglook").children("div:last").before(_prevdiv);
        UP_IMGCOUNT++;//编号增长防重复

        //预览功能 start
       // alert(1); 
       var isIE = navigator.userAgent.match(/MSIE/)!= null,
         isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;
 //alert(2);
     if(isIE) {
        _CRE_FILE.select();
        var reallocalpath = document.selection.createRange().text;
//alert(3);
        // IE6浏览器设置img的src为本地路径可以直接显示图片
         if (isIE6) {
            preview.src = reallocalpath;
//          pic.style.width = '190px'
//              pic.style.height='180px'
         }else {
         	preview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            preview.filters("DXImageTransform.Microsoft.AlphaImageLoader").src = reallocalpath;
            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
             //preview.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
             preview.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
             
            //alert(4);
         }
     }else {
        //预览功能 start
        //alert(5);
        var reader = new FileReader();//创建读取对象
        
        console.log("preview="+reader+"preview="+typeof reader);
        
        reader.onloadend = function () {
            preview.src = reader.result;//读取加载，将图片编码绑定到元素
        }
        if (file) {//如果对象正确
            reader.readAsDataURL(file);//获取图片编码
        } else {
            preview.src = "";//返回空值
        }
        //预览功能 end
     }
    
    */
    
    }
});

//删除选中图片
$(".lookimg_delBtn").live("click", function () {
    $(".imgfile[num=" + $(this).parent().attr("num") + "]").remove();//移除图片file
    $(this).parent().remove();//移除图片显示
});

//删除按钮移入移出效果
$(".lookimg").live("mouseover", function () {
    if ($(this).attr("ISUP") != "1")
        $(this).children(".lookimg_delBtn").eq(0).css("display", "block");;
});
$(".lookimg").live("mouseout", function () {
    $(this).children(".lookimg_delBtn").eq(0).css("display", "none");;
});

//确定上传按钮
$("#btn_ImgUpStart").click(function () {

    if ($(".lookimg").length <= 0) {
        alert("还未选择需要上传的图片");
        return;
    }

    //全部图片上传完毕限制
    if ($(".lookimg[ISUP=1]").length == $(".lookimg").length) {
        alert("图片已全部上传完毕！");
        return;
    }

    //循环所有已存在的图片对象，准备上传
    for (var i = 0; i < $(".lookimg").length; i++) {
        var NOWLOOK = $(".lookimg").eq(i);//当前操作的图片预览对象
        NOWLOOK.index = i;
        //如果当前图片已经上传，则不再重复上传
        if (NOWLOOK.attr("ISUP") == "1")
            continue;

        //上传图片准备
        var IMG_BASE = NOWLOOK.children("img").eq(0).attr("src"); //要上传的图片的base64编码
        var IMG_IND = NOWLOOK.attr("num");
        var IMG_ROUTE = $(".imgfile[num=" + IMG_IND + "]").eq(0).val();//获取上传图片路径，为获取图片类型使用
        var IMG_ENDFOUR = IMG_ROUTE.substr(IMG_ROUTE.length - 4, 4);//截取路径后四位，判断图片类型
        var IMG_FOMATE = "jpeg"; //图片类型***
        if (IMG_ENDFOUR.trim() == ".jpg")
            IMG_FOMATE = "jpg";
        else if (IMG_ENDFOUR.trim() == ".png")
            IMG_FOMATE = "png";

        //图片正式开始上传
        $.ajax({
            type: "POST",
            url: IMG_AJAXPATH,
            data: { 'imgBase': IMG_BASE, 'imgFormat': IMG_FOMATE, 'lookIndex': NOWLOOK.index },//图片base64编码，图片格式（当前仅支持jpg,png,jpeg三种），图片对象索引
            dataType: "json",
            success: function (data) {
                if (data.isok == "1") {
                    //图片上传成功回调
                    var UPTIME = Math.ceil(Math.random() * 400) + 400;//生成一个400-800的随机数，假设进图条加载时间不一致
                    $(".lookimg").eq([data.ind]).attr("ISUP", "1");//记录此图片已经上传
                    $(".lookimg").eq([data.ind]).children(".lookimg_progress").eq(0).children("div").eq(0).animate({ width: "100%" }, UPTIME, function () {
                        $(this).css("background-color", "#00FF00").text('上传成功');
                    });
                }
                else {//图片未上传成功回调
                    $(".lookimg")[data.ind].children(".lookimg_progress").eq(0).children("div").eq(0).css("width", "100%").css("background-color", "red").text("上传失败");
                }
            },
            error: function (err) {
                //服务器连接失败报错处理
                alert("error");
                //alert(err.responseText);
            },
            beforeSend: function () {
                //图片上传之前执行的操作，当前为进度条显示
                NOWLOOK.children(".lookimg_progress").eq(0).css("display", "block");//进度条显示
            }
        });
    }
});
	});
$(function(){
	addPic(2,'../../592Vip/img/78dian.png');
})

/*
 	添加图片
 * id：返回的图片id；
 * src：返回的图片地址
 * */
function addPic(id,src){
	var div=$('<div></div>');
	div.attr('class','lookimg');
	div.attr('data-id',id);
	var img=new Image();
	img.src=src;
	$(img).load(function(){
		div.append(img);
	})
	var h='<div class="lookimg_delBtn" style="display: none;" onclick="removePic(this)">移除</div>'
    	+	'<div class="lookimg_progress">'
    	+		'<div></div>'
    	+	'</div>'
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
