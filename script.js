const sheetID="1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc";

const url=`https://opensheet.elk.sh/${sheetID}/Sheet1`;

fetch(url)

.then(res=>res.json())

.then(data=>{

let players=[];
let teams={};
let totalKills=0;

data.forEach(r=>{

let m1=Number(r.M1||0);
let m2=Number(r.M2||0);
let m3=Number(r.M3||0);
let m4=Number(r.M4||0);
let m5=Number(r.M5||0);
let m6=Number(r.M6||0);

let total=m1+m2+m3+m4+m5+m6;

totalKills+=total;

players.push({

team:r.Team,

player:r.Player,

m1,m2,m3,m4,m5,m6,total

});

if(!teams[r.Team]) teams[r.Team]=0;

teams[r.Team]+=total;

});

document.getElementById("totalKills").innerText=totalKills;

players.sort((a,b)=>b.total-a.total);

let pHTML="";

players.forEach((p,i)=>{

let rank="";

if(i==0) rank="rank1";
if(i==1) rank="rank2";
if(i==2) rank="rank3";

pHTML+=`

<tr class="${rank}">

<td>${i+1}</td>
<td>${p.player}</td>
<td>${p.team}</td>
<td>${p.m1}</td>
<td>${p.m2}</td>
<td>${p.m3}</td>
<td>${p.m4}</td>
<td>${p.m5}</td>
<td>${p.m6}</td>
<td>${p.total}</td>

</tr>

`;

});

document.querySelector("#playerBoard tbody").innerHTML=pHTML;

let teamArray=[];

for(let t in teams){

teamArray.push({team:t,kills:teams[t]});

}

teamArray.sort((a,b)=>b.kills-a.kills);

document.getElementById("totalTeams").innerText=teamArray.length;

let tHTML="";

teamArray.forEach((t,i)=>{

let rank="";

if(i==0) rank="rank1";
if(i==1) rank="rank2";
if(i==2) rank="rank3";

let crown=i==0?"👑 ":"";

tHTML+=`

<tr class="${rank}">

<td>${i+1}</td>
<td>${crown}${t.team}</td>
<td>${t.kills}</td>

</tr>

`;

});

document.querySelector("#teamBoard tbody").innerHTML=tHTML;

});

setInterval(()=>{

location.reload();

},10000);