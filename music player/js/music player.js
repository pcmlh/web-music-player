var audio = document.getElementById('audio');
var playpause=document.getElementById("play-pause");
var volume=document.getElementById("volume");
var goforward=document.getElementById("GoForward");
audio.controls1= false;
function GoForward() {
    /*if(audio!=null&&audio.canPlayType()&&audio.canPlayType("audio/mpeg"));*/
    audio.src="../audio/Taylor%20Swift%20-%20Holy%20Ground.mp3";
    audio.play();
}
function togglePlayPause() {
    if(audio.paused || audio.ended) {
        playpause.title = "暂停";
        playpause.innerHTML = '<i class="fa fa-pause fa-4x"></i>';
        audio.play();
    }else{
        playpause.title="播放";
        playpause.innerHTML = '<i class="fa fa-play fa-4x"></i>';
        audio.pause();
    }
}
function setVolume() {
    audio.volume=volume.value;
}
