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



const sheetURL="https://docs.google.com/spreadsheets/d/1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc/export?format=csv";



async function loadLeaderboard(){

const response=await fetch(sheetURL);
const csv=await response.text();

const rows=csv.split("\n").slice(1);

let teams=[];
let mvp={name:"",kills:0};



rows.forEach(row=>{

const cols=row.split(",");

const team=cols[0];

let p1=parseInt(cols[1])||0;
let p2=parseInt(cols[2])||0;
let p3=parseInt(cols[3])||0;
let p4=parseInt(cols[4])||0;

const total=p1+p2+p3+p4;

teams.push({
team:team,
kills:total
});

const players=[p1,p2,p3,p4];

players.forEach((k,i)=>{

if(k>mvp.kills){

mvp.kills=k;
mvp.name=team+" Player "+(i+1);

}

});

});


teams.sort((a,b)=>b.kills-a.kills);



const table=document.getElementById("leaderboardBody");

table.innerHTML="";

teams.forEach((team,index)=>{

table.innerHTML+=`

<tr>
<td>${index+1}</td>
<td>${team.team}</td>
<td>${team.kills}</td>
</tr>

`;

});


document.getElementById("mvpPlayer").innerHTML=
mvp.name+" - "+mvp.kills+" kills";


}


loadLeaderboard();

setInterval(loadLeaderboard,5000);


});