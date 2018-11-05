var countdown = 60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value = "发送验证码";
        countdown = 60;
        return false;
    } else {
        val.setAttribute("disabled", true);
        val.value = countdown + "s";
        countdown--;
    }
    setTimeout(function () {
        settime(val);
    }, 1000);
}

$(function () {

    $('.inp').bind('input propertychange', function() {  
        if($(this).val()){
            $(this).next().show()
        }else{
            $(this).next().hide()
        }
    }); 
    $(".goUser").click(function () {
        $(".userLogin").show();
        $(".phoneLogin").hide();
        $(".register").hide();
    })

    $(".goRegister").click(function () {
        $(".userLogin").hide();
        $(".phoneLogin").hide();
        $(".register").show();
    })
    $(".clear_user").click(function () {
        $(".input_user").val("")
    })
    $(".clear_phone").click(function () {
        $(".input_phone").val("")
    })
    $(".clear_password").click(function () {
        $(".input_password").val("")
    })
    $(".error_btn").click(function () {
        $(".error_box").hide();
    })

})