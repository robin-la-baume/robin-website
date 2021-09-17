const video = document.getElementById("myVideo");
const pauseBtn = document.getElementById("pause-btn");
const muteBtn = document.getElementById("mute-btn");

function pauseVideo() {
  if (video.paused) {
    video.play();
    pausebBtn.innerHTML = "Pause";
  } else {
    video.pause();
    pauseBtn.innerHTML = "Play";
  }
}

function muteVideo() {
  if (video.muted == true) {
    video.muted = false;
    muteBtn.innerHTML = "Sound off";
  } else {
    video.muted = true;
    muteBtn.innerHTML = "Sound on";
  }
}