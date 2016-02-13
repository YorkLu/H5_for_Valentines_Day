/**
 * 常用函数
 * by YorkLu
 */

//判断是否微信
function isWechat() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        //SOMETHING TO DO
    } else {
        //SOMETHING TO DO
    }
}

//启动下载
function downloadFile(url) {
    try {
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);

        //针对坑逼搜狗无法下载的问题
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf("sogou") != -1) {
            location.href = url;
        }
        //TODO：测试更多移动端浏览器，如UC、遨游
    } catch (e) {
        //SOMETHING TO DO
    }
}

//RAF兼容性写法
window.RAF = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();
