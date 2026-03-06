const sheetID="1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc";

const url=`https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:json`;

fetch(url)

.then(res=>res.text())

.then(data=>{

const json=JSON.parse(data.substr(47).slice(0,-2));

const rows=json.table.rows;

let teams=[];

let totalKills=0;

rows.forEach(r=>{

if(!r.c[0]) return;

let team=r.c[0].v;

let m1=r.c[1]?r.c[1].v:0;

let m2=r.c[2]?r.c[2].v:0;

let total=m1+m2;

totalKills+=total;

teams.push({

team,m1,m2,total

});

});

teams.sort((a,b)=>b.total-a.total);

let html="";

teams.forEach((t,i)=>{

let rankClass="";

if(i==0) rankClass="rank1";

if(i==1) rankClass="rank2";

if(i==2) rankClass="rank3";

html+=`

<tr class="${rankClass}">

<td>${i+1}</td>

<td>${t.team}</td>

<td>${t.m1}</td>

<td>${t.m2}</td>

<td class="kill">${t.total}</td>

</tr>

`;

});

document.querySelector("#leaderboard tbody").innerHTML=html;

document.getElementById("totalTeams").innerText=teams.length;

animateKills(totalKills);

});

function animateKills(kills){

let count=0;

let interval=setInterval(()=>{

count++;

document.getElementById("totalKills").innerText=count;

if(count>=kills) clearInterval(interval);

},30);

}

setInterval(()=>{

location.reload();

},10000);