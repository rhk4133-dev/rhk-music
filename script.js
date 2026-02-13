// Your Previous 35 YouTube Video IDs
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
let currentDisc = null;

// Create Song Cards
const grid = document.getElementById("songGrid");

songs.forEach((id,index)=>{
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="disc" id="disc${index}"
      style="background-image:url('https://img.youtube.com/vi/${id}/hqdefault.jpg')">
    </div>

    <div class="song-name">Song ${index+1}</div>

    <div class="bottom">
      <span>00:00</span>
      <button class="play-btn" onclick="playSong(${index})">▶</button>
      <span>3:02</span>
    </div>
  `;

  grid.appendChild(card);
});

// YouTube Player Ready
function onYouTubeIframeAPIReady(){
  player = new YT.Player('youtubePlayer',{
    height:'0',
    width:'0',
    videoId:songs[0],
    playerVars:{controls:0}
  });
}

// Play Song
function playSong(index){

  if(currentDisc){
    currentDisc.classList.remove("playing");
  }

  player.loadVideoById(songs[index]);
  player.playVideo();

  currentDisc = document.getElementById("disc"+index);
  currentDisc.classList.add("playing");
}
