const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumnBtn = document.getElementById("jsVolumeBtn");

function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = ' <i class="fas fa-pause"></i> ';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = ' <i class="fas fa-play"></i> ';
    }
}

function handleVolumeClick() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumnBtn.innerHTML = ' <i class="fas fa-volume-up"></i> '
    } else {
        videoPlayer.muted = true;
        volumnBtn.innerHTML = ' <i class="fas fa-volume-mute"></i> '
    }
}

function init() {
    playBtn.addEventListener("click", handlePlayClick);   
    volumnBtn.addEventListener("click", handleVolumeClick); 
}

if (videoContainer) {
    init();
}