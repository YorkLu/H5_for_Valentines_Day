//拼图顺序数组
var jigsawArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

//初始化
$(function () {
    //乱序
    jigsawArr.sort(function () {
        return Math.random() > 0.5;
    });
    //一一对应图片
    for (var i = 0; i < 9; i++) {
        $(".jigsaw-pieces:nth-child(" + (i + 1) + ")").css(
            "background-image", "url(img/jigsaw_0" + (jigsawArr[i].toString()) + ".png)"
        );
    }
})

//交换数组元素
function operateArr(i, j) {
    var temp = jigsawArr[i];
    jigsawArr[i] = jigsawArr[j];
    jigsawArr[j] = temp;
}

//交换图片
function exchangeImg(i, j) {
    var img_i = $(".jigsaw-pieces:nth-child(" + (i + 1) + ")").css("background-image");
    var img_j = $(".jigsaw-pieces:nth-child(" + (j + 1) + ")").css("background-image");
    $(".jigsaw-pieces:nth-child(" + (i + 1) + ")").css("background-image", img_j);
    $(".jigsaw-pieces:nth-child(" + (j + 1) + ")").css("background-image", img_i);
}

//标记选中的两块拼图
var selectA = -1;//标记选中的拼图，-1代表未选中
var selectB = -1;//同上

//点击事件
$(".click-on-pieces").click(function () {
    var clickAt = $(this).index();
    //未选中
    if (selectA == -1) {
        selectA = clickAt;
        $(this).addClass("active2");
    }
    //重复点击已选拼图=取消选择
    else if (selectA == clickAt) {
        selectA = -1;
        selectB = -1;
        $(this).removeClass("active2");
    }
    //选中不同两块，交换
    else {
        selectB = clickAt;
        operateArr(selectA, selectB);
        exchangeImg(selectA, selectB);
        selectA = -1;
        selectB = -1;
        $(".active2").removeClass("active2");
        if (jigsawArr.join("") == "123456789") {
            $(".click-on-pieces").unbind("click")
            $(".jigsaw-pieces").fadeOut();
            //更改文字
            $(".before-passing-game").fadeOut(function () {
                $(".after-passing-game").fadeIn();
                //显示下方section
                $(".section3").show();
            });
        }
    }
});