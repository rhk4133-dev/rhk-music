let player;

// YouTube API Ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '200',
    width: '300',
    videoId: 'dQw4w9WgXcQ',
    playerVars: {
      'playsinline': 1
    }
  });
}

// Load new song
function loadSong(id) {
  player.loadVideoById(id);
}

// Play
function playSong() {
  player.playVideo();
}

// Pause
function pauseSong() {
  player.pauseVideo();
}