let matches=[
  {"RHK GAMING":10,"GAJAPADE":6,"HIRIYUR":4,"DON 9 9 9":5,"CHIKKAMAGALURU":3,"TEAM NARACHI":2},
  {"RHK GAMING":7,"GAJAPADE":8,"HIRIYUR":6,"DON 9 9 9":3,"CHIKKAMAGALURU":4,"TEAM NARACHI":5}
  // Add more matches up to 6
];

let players=[
  {name:"Shadow",team:"RHK GAMING",kills:12},
  {name:"Blaze",team:"GAJAPADE",kills:9},
  {name:"Ghost",team:"HIRIYUR",kills:7}
];

function showMatch(num){
  let img=document.getElementById("matchImg");
  img.style.opacity=0;
  setTimeout(()=>{img.src="match"+num+".png"; img.style.opacity=1;},300);

  // Update progress bar
  let progress=document.getElementById("progress");
  progress.style.width=(num/6*100)+"%";
}

// Calculate MVP
let mvp=players[0];
players.forEach(p=>{if(p.kills>mvp.kills){mvp=p;}});
document.getElementById("mvpName").innerText="Player: "+mvp.name;
document.getElementById("mvpTeam").innerText="Team: "+mvp.team;
document.getElementById("mvpKills").innerText="Kills: "+mvp.kills;

// Calculate Team Totals
let totals={};
matches.forEach(match=>{
  for(let team in match){
    if(!totals[team]) totals[team]=0;
    totals[team]+=match[team];
  }
});

// Rank teams by kills
let sortedTeams=Object.entries(totals).sort((a,b)=>b[1]-a[1]);
let table=document.getElementById("leaderboard");
sortedTeams.forEach((t,i)=>{
  let row=table.insertRow();
  row.insertCell(0).innerText=i==0?"🥇":i==1?"🥈":i==2?"🥉":i+1;
  row.insertCell(1).innerText=t[0];
  row.insertCell(2).innerText=t[1];
});

// Update leaderboard message
let nextMatch=matches.length+1;
document.getElementById("updateText").innerText = nextMatch<=6?"Updated leaderboard will publish after Match "+nextMatch:"Final leaderboard published";