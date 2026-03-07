let matches=[
{"RHK GAMING":10,"GAJAPADE":6,"HIRIYUR":4,"DON 9 9 9":5,"CHIKKAMAGALURU":3,"TEAM NARACHI":2},
{"RHK GAMING":7,"GAJAPADE":8,"HIRIYUR":6,"DON 9 9 9":3,"CHIKKAMAGALURU":4,"TEAM NARACHI":5}
];

/* PLAYER DATA FOR MVP */
const players=[
{name:"Shadow",team:"RHK GAMING",kills:12},
{name:"Blaze",team:"GAJAPADE",kills:9},
{name:"Ghost",team:"HIRIYUR",kills:7}
];

/* MATCH SWITCH */
function showMatch(num){
let img=document.getElementById("matchImg");
img.style.opacity=0;
setTimeout(()=>{img.src="match"+num+".jpg";img.style.opacity=1;},300);

/* Update progress bar */
let bar=document.getElementById("progressBar");
bar.style.width=(num*16.66)+"%";

/* Update leaderboard totals dynamically */
let totals={};
for(let i=0;i<num;i++){
for(let team in matches[i]){
if(!totals[team]) totals[team]=0;
totals[team]+=matches[i][team];
}
}
let table=document.getElementById("leaderboard");
table.innerHTML="<tr><th>Team</th><th>Total Kills</th><th>Medal</th></tr>";

/* Sort teams by kills descending */
let sorted=Object.entries(totals).sort((a,b)=>b[1]-a[1]);
sorted.forEach((t,index)=>{
let row=table.insertRow();
row.insertCell(0).innerText=t[0];
row.insertCell(1).innerText=t[1];
let medal="";
if(index==0) medal="🥇";
else if(index==1) medal="🥈";
else if(index==2) medal="🥉";
row.insertCell(2).innerText=medal;
});

/* Update MVP message */
let mvp=players[0];
players.forEach(p=>{if(p.kills>mvp.kills)mvp=p;});
document.getElementById("mvpName").innerText="Player: "+mvp.name;
document.getElementById("mvpTeam").innerText="Team: "+mvp.team;
document.getElementById("mvpKills").innerText="Kills: "+mvp.kills;

/* Update leaderboard message */
let nextMatch=num+1;
let text=nextMatch<=6?"Updated leaderboard will publish after Match "+nextMatch:"Final leaderboard published";
document.getElementById("updateText").innerText=text;
}