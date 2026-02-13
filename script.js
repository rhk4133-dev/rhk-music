let songs = [
"h13lbNkUaEg","sf7VoyW_5ro","EtGh9oC2SZ0","yh3C2JU-m_Y",
"1PxT9i4-uTc","Q-_cu_78eIA","0pVMxbQh-Lc","NeXbmEnpSz0",
"palMj0iq-3g","LbrJZgyqp5w","vipdDXKHT_0","ElIizBi-rEc",
"DL8BsPDe4ck","N5BmQz4AmFI","CQSzGF9VAak","pPGcYXZhCPY",
"YjoKyFJf4CU","aorAeMA06i0","vmu53OX935A","wc-pzBaSiPA",
"PMzTLWTWLZU","g5O5ufz8w34","5Eqb_-j3FDA","uXgzCjAv-9k",
"Zu6z3qUPu1s","sX4Bxks_VlI","hoNb6HuNmU0","LK7-_dgAVQE",
"Pm7sWFzcPes","yu8nxs1gw48","wiur_AGatGU","LAdp3ZHeP4Q",
"rUeyfai1ddc","FCDAnPFJUPA","AN8-o7ckg6k"
];

let player;
let currentIndex = 0;
let currentDisc = null;
let likedSongs = JSON.parse(localStorage.getItem("liked")) || [];

const grid = document.getElementById("songGrid");
const progress = document.getElementById("progress");
const volumeSlider = document.getElementById("volume");
const miniTitle = document.getElementById("miniTitle");

songs.forEach((id,index)=>{
  const card=document.createElement("div");
  card.className="card";

  card.innerHTML=`
    <div class="disc" id="disc${index}"
    style="background-image:url('https://img.youtube.com/vi/${id}/hqdefault.jpg')"></div>

    <div class="song-name">Song ${index+1}</div>

    <div class="bottom">
      <span>▶</span>
      <button class="play-btn" onclick="playSong(${index})">Play</button>
    </div>
  `;

  grid.appendChild(card);
});

function onYouTubeIframeAPIReady(){
  player=new YT.Player('youtubePlayer',{
    height:'0',
    width:'0',
    videoId:songs[0],
    playerVars:{controls:0},
    events:{
      'onReady':()=>{
        setInterval(updateProgress,1000);
      },
      'onStateChange':(event)=>{
        if(event.data===0){
          nextSong();
        }
      }
    }
  });
}

function playSong(index){
  if(currentDisc){
    currentDisc.classList.remove("playing");
  }

  currentIndex=index;
  player.loadVideoById(songs[index]);
  player.playVideo();

  currentDisc=document.getElementById("disc"+index);
  currentDisc.classList.add("playing");

  miniTitle.innerText="Song "+(index+1);
}

function togglePlay(){
  if(player.getPlayerState()==1){
    player.pauseVideo();
  }else{
    player.playVideo();
  }
}

function nextSong(){
  currentIndex=(currentIndex+1)%songs.length;
  playSong(currentIndex);
}

function prevSong(){
  currentIndex=(currentIndex-1+songs.length)%songs.length;
  playSong(currentIndex);
}

function updateProgress(){
  if(player && player.getDuration){
    let duration=player.getDuration();
    let current=player.getCurrentTime();
    if(duration>0){
      progress.value=(current/duration)*100;
    }
  }
}

progress.addEventListener("input",()=>{
  let duration=player.getDuration();
  player.seekTo((progress.value/100)*duration);
});

volumeSlider.addEventListener("input",()=>{
  player.setVolume(volumeSlider.value);
});

function likeSong(){
  if(!likedSongs.includes(currentIndex)){
    likedSongs.push(currentIndex);
    localStorage.setItem("liked",JSON.stringify(likedSongs));
    alert("❤️ Saved!");
  }
}

/* Swipe Support */
let startX=0;

document.addEventListener("touchstart",(e)=>{
  startX=e.touches[0].clientX;
});

document.addEventListener("touchend",(e)=>{
  let endX=e.changedTouches[0].clientX;
  if(endX-startX>50){
    prevSong();
  }else if(startX-endX>50){
    nextSong();
  }
});