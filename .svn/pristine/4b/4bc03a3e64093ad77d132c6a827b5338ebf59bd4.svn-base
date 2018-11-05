 var gauge = new RadialGauge({
        renderTo: 'canvas-id',
        width: 240,//宽度
        height: 240,//高度
        units: '',//单位
        title: "爱心大使",	//标题
		colorTitle:"#fff",	//标题颜色
        startAngle: 45,
        ticksAngle: 270,
        colorPlate: "rgba(0,0,0,0)",//北京颜色
        //colorPlateEnd: "#ffffff",	//背景颜色
        colorUnits: "#fff",
        colorNumbers: "#fff",
        colorNeedle: "#fff",
        colorNeedleEnd: "#fff",
        colorNeedleCircleOuter: "#fff",
        colorNeedleCircleOuterEnd: "#fff",
        colorNeedleShadowUp: "#fff",
        colorNeedleShadowDown: "#fff",
        colorMajorTicks: ["#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB", "#EBEBEB"],
        colorMinorTicks: "#EBEBEB",
        colorBarProgress: 'rgba(255,255,255,1)',//外圈高亮颜色
        colorBar: 'rgba(255,255,255,0.5)',//外圈颜色
        minValue: 0,
        maxValue: 1000,
        majorTicks: ["0","200","400","600","800","1000"],
        minorTicks: "10",
        strokeTicks: true,
        highlights: [],
        needleCircleSize:8,
        highlightsWidth: 25,
        numbersMargin: 0,//数值距离外边聚
	    barWidth: 3,
	    barStrokeWidth: 0,
	    barProgress: 1,
	    barShadow: 0,
        //
        animation: true,
        animationDuration: 500,
        animationRule: "linear",
        animatedValue: true,
//      /animateOnInit: true,
        borders: false,
        valueBox: true,
        valueInt: 1,
    	valueDec: 0,
	    colorValueText: "#fff",
	    colorValueBoxRect: "rgba(0,0,0,0)",
	    colorValueBoxRectEnd: "rgba(0,0,0,0)",
	    colorValueBoxBackground: "",
	    colorValueBoxShadow: false,
	    colorValueTextShadow: false,
        needleType: "arrow",
        needleEnd: 50,
        needleWidth: 3,
        needleCircleInner: true,
        needleCircleOuter: true,
        needleShadow: false,
        borderShadowWidth: 0
        

    }).draw();


    gauge.value = 200;
    
    gauge.update();
    
    $(function(){
    	$('.shai_fonts').html(gauge.value);
//  	console.log(gauge.value)
    });
    $('.fbtn').click(function(){
    	mui('#popover').popover('show');
    });
    
