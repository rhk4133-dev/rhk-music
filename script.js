document.addEventListener("DOMContentLoaded", function () {

const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeSection = document.getElementById("subscribeSection");
const registerSection = document.getElementById("registerSection");
const verification = document.getElementById("verification");
const bgMusic = document.getElementById("bgMusic");

subscribeBtn.addEventListener("click", function () {

bgMusic.play().catch(()=>{});

verification.innerHTML="Verifying subscription...";

setTimeout(()=>{

verification.innerHTML="Subscription Verified ✔";

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



/* ---------- TOURNAMENT DATA ---------- */

let teams=[

{
name:"Team Alpha",
players:[
{name:"Alpha1",kills:3},
{name:"Alpha2",kills:2},
{name:"Alpha3",kills:1},
{name:"Alpha4",kills:4}
]
},

{
name:"Team Beta",
players:[
{name:"Beta1",kills:5},
{name:"Beta2",kills:0},
{name:"Beta3",kills:2},
{name:"Beta4",kills:1}
]
},

{
name:"Team Gamma",
players:[
{name:"Gamma1",kills:1},
{name:"Gamma2",kills:3},
{name:"Gamma3",kills:2},
{name:"Gamma4",kills:2}
]
}

];



function calculateLeaderboard(){

let board=[];

teams.forEach(team=>{

let total=0;

team.players.forEach(p=>{
total+=p.kills;
});

board.push({
team:team.name,
kills:total
});

});

board.sort((a,b)=>b.kills-a.kills);

let body=document.getElementById("leaderboardBody");
body.innerHTML="";

board.forEach((team,index)=>{

let row=`
<tr>
<td>${index+1}</td>
<td>${team.team}</td>
<td>${team.kills}</td>
</tr>
`;

body.innerHTML+=row;

});

}



function calculateMVP(){

let topPlayer={name:"",kills:0};

teams.forEach(team=>{
team.players.forEach(player=>{

if(player.kills>topPlayer.kills){

topPlayer.name=player.name;
topPlayer.kills=player.kills;

}

});
});

document.getElementById("mvpPlayer").innerHTML=
topPlayer.name+" - "+topPlayer.kills+" kills";

}



calculateLeaderboard();
calculateMVP();



/* ---------- LIVE MATCH UPDATE ---------- */

setInterval(()=>{

teams.forEach(team=>{

team.players.forEach(player=>{

let random=Math.floor(Math.random()*2);

player.kills+=random;

});

});

calculateLeaderboard();
calculateMVP();

},10000);


});