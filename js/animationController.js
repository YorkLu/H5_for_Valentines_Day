//根据屏幕宽度计算各种常量
var fullWidth = $(document.body).outerWidth(true);//全屏宽度
var fullHeight = $(document.body).outerHeight(true);//全屏高度
var titlePadding = fullWidth * 0.02;//元素间隔
var titleSize = fullWidth * 0.2;//标题大小
var titleTop = $(".title").position().top;//标题距离顶部距离
var jigsawLeft = 0.1140 * fullWidth;
var jigsawTop = 0.066 * fullWidth + 0.13 * fullHeight;
var jigsawWidth = fullWidth * 0.770;
var jigsawHeight = fullWidth * 0.95;
var btnHeight = fullWidth * 0.28;
var userInfoHeight = fullWidth * 0.54;

//初始化
$(function () {
    $(".pattern").height(fullWidth * 0.9);//设置花纹高度
    $(".title").width(titleSize);//设置标题宽度
    $(".title").height(titleSize);//设置标题高度
    $(".title-lower").css("margin-top", titleSize + titlePadding);//设置标题下半部位置
    $(".name-en").css("top", titleTop + titleSize * 2 + titlePadding * 2);//作家名称位置
    $(".frame").height(fullWidth * 1.16);//设置画框位置
    $(".jigsaw").width(jigsawWidth);//设置拼图宽度
    $(".jigsaw").height(jigsawHeight);//设置拼图高度
    $(".jigsaw").css("marginTop", fullWidth * 0.066);//设置拼图位置
    $(".btn").height(btnHeight);//接听按钮高度
    $(".user-info").height(userInfoHeight);//用户信息高度
    /*
     * 由于画框是叠在拼图上方的（实现光影效果）
     * 使得拼图不可点击
     * 故增加一组透明层实现点击效果
     * */
    $(".click-on").width(jigsawWidth);
    $(".click-on").height(jigsawHeight);
    $(".click-on").css("marginTop", fullWidth * 0.066);
})

//fullPage.js配置参数与回调函数
$(function () {
    $('#content').fullpage({
        //参数
        'scrollingSpeed': 700,
        'loopHorizontal': false,
        //回调函数
        /*
         * onLeave：
         * index 是离开的“页面”的序号，从1开始计算；
         * nextIndex 是滚动到的“页面”的序号，从1开始计算；
         * direction 判断往上滚动还是往下滚动，值是 up 或 down；
         * */
        'onLeave': function (index, nextIndex, direction) {
            switch (index) {
                //标题
                case 1:
                    break;
                //拼图
                case 2:
                    break;
                //画集
                case 3:
                    break;
                //语音
                case 4:
                    break;
                //canvas
                case 5:
                    break;
            }

            //目标页面标号
            switch (nextIndex) {
                //标题
                case 1:
                    break;
                //拼图
                case 2:
                    break;
                //画集
                case 3:
                    break;
                //语音
                case 4:
                    break;
                //canvas
                case 5:
                    break;
            }
        }
    });
});


//信封部分相关
$(".pic_05").click(function () {
    $(".before-envelop-open").fadeOut();
    $(".pic_05").fadeOut(function () {
        $(".letter-paper").fadeIn();
        $(".after-envelop-open").fadeIn();
    });
});

$(".after-envelop-open").click(function () {
    $(".section4").show(function () {
        $.fn.fullpage.moveSectionDown();
        playRing();
    });
});

//播放按钮
$(".btn-right").click(function () {
    stopRing();
    playVoice();
    $(".btn-left").animate({
        left: "40%"
    });
    $(".btn-right").fadeOut();
})