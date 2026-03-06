document.addEventListener("DOMContentLoaded", function () {

const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeSection = document.getElementById("subscribeSection");
const registerSection = document.getElementById("registerSection");
const verification = document.getElementById("verification");
const bgMusic = document.getElementById("bgMusic");

subscribeBtn.addEventListener("click", function () {

bgMusic.play().catch(() => {});

verification.innerHTML = "Verifying subscription...";

setTimeout(() => {

verification.innerHTML = "Subscription Verified ✔";

confetti({
particleCount:100,
spread:80,
origin:{y:0.6}
});

setTimeout(()=>{

subscribeSection.style.display="none";
registerSection.classList.remove("hidden");

},1500);

},2000);

});


loadLeaderboard()

setInterval(loadLeaderboard,5000)

})


function toggleMusic(){

const music=document.getElementById("bgMusic")

if(music.paused){
music.play()
}else{
music.pause()
}

}



function loadLeaderboard(){

fetch("data.json")

.then(res=>res.json())

.then(data=>{

data.sort((a,b)=>b.kills-a.kills)

const body=document.getElementById("leaderboardBody")

body.innerHTML=""

let mvpPlayer=""
let mvpKills=0

data.forEach((team,index)=>{

const row=document.createElement("tr")

row.innerHTML=`
<td>${index+1}</td>
<td>${team.name}</td>
<td>${team.kills}</td>
`

body.appendChild(row)

team.players.forEach(player=>{

if(player.kills>mvpKills){

mvpKills=player.kills
mvpPlayer=player.name

}

})

})


document.getElementById("mvpName").innerText=mvpPlayer
document.getElementById("mvpKills").innerText="Kills: "+mvpKills

})

}
