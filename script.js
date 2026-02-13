let songs=[
"h13lbNkUaEg","sf7VoyW_5ro","EtGh9oC2SZ0","yh3C2JU-m_Y",
"1PxT9i4-uTc","Q-_cu_78eIA","0pVMxbQh-Lc","NeXbmEnpSz0"
];

let player;
let currentIndex=0;
let liked=JSON.parse(localStorage.getItem("fav"))||[];

const grid=document.getElementById("songGrid");
const progress=document.getElementById("progress");
const volume=document.getElementById("volume");
const miniTitle=document.getElementById("miniTitle");

function render(list){
  grid.innerHTML="";
  list.forEach((id,index)=>{
    grid.innerHTML+=`
    <div class="card">
      <div class="disc" id="disc${index}"
      style="background-image:url('https://img.youtube.com/vi/${id}/hqdefault.jpg')"></div>
      <button onclick="playSong(${songs.indexOf(id)})">Play</button>
    </div>`;
  });
}

render(songs);

function onYouTubeIframeAPIReady(){
  player=new YT.Player('youtubePlayer',{
    height:'0',width:'0',
    videoId:songs[0],
    playerVars:{controls:0},
    events:{
      'onStateChange':e=>{
        if(e.data===0)nextSong();
      }
    }
  });
}

function playSong(i){
  currentIndex=i;
  player.loadVideoById(songs[i]);
  player.playVideo();
  miniTitle.innerText="Song "+(i+1);
}

function togglePlay(){
  if(player.getPlayerState()==1)player.pauseVideo();
  else player.playVideo();
}

function nextSong(){
  currentIndex=(currentIndex+1)%songs.length;
  playSong(currentIndex);
}

function prevSong(){
  currentIndex=(currentIndex-1+songs.length)%songs.length;
  playSong(currentIndex);
}

progress.addEventListener("input",()=>{
  let d=player.getDuration();
  player.seekTo((progress.value/100)*d);
});

setInterval(()=>{
  if(player&&player.getDuration){
    let d=player.getDuration();
    let c=player.getCurrentTime();
    if(d>0)progress.value=(c/d)*100;
  }
},1000);

volume.addEventListener("input",()=>{
  player.setVolume(volume.value);
});

function likeSong(){
  if(!liked.includes(currentIndex)){
    liked.push(currentIndex);
    localStorage.setItem("fav",JSON.stringify(liked));
    alert("Saved to Favorites ❤️");
  }
}

function showFav(){
  let favSongs=liked.map(i=>songs[i]);
  render(favSongs);
}

function showAll(){
  render(songs);
}

/* LOGIN */

function login(){
  let name=document.getElementById("username").value;
  if(name){
    localStorage.setItem("user",name);
    document.getElementById("loginBox").style.display="none";
  }
}

window.onload=function(){
  if(localStorage.getItem("user")){
    document.getElementById("loginBox").style.display="none";
  }
}

/* PWA */
if('serviceWorker'in navigator){
  navigator.serviceWorker.register('service-worker.js');
}