// 播放铃声
function playRing() {
    iosRing = new Audio('src/opening.mp3');
    iosRing.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    iosRing.play();
}
// 停止铃声
function stopRing() {
    iosRing.pause();
    iosRing = null;
}
// 播放录音
function playVoice() {
    iosRing = new Audio('src/voice.mp3');
    iosRing.addEventListener('ended', function () {
        this.pause();
        $(".btn-left").css("opacity", "1");
        $(".btn-left").click(function () {
            $(".section5").show(function () {
                $.fn.fullpage.moveSectionDown();
            });
        });
    }, false);
    iosRing.play();
}