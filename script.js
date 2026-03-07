// match switch

function showMatch(num){

document.getElementById("matchImg").src="match"+num+".png";

}


// player data

let players=[

{name:"Shadow",team:"Alpha",kills:12},
{name:"Blaze",team:"Dragon",kills:9},
{name:"Sniper",team:"Alpha",kills:6},
{name:"Ghost",team:"Tiger",kills:8}

];


// calculate MVP

let mvp=players[0];

players.forEach(p=>{

if(p.kills>mvp.kills){

mvp=p;

}

});

document.getElementById("mvpName").innerText="Player: "+mvp.name;
document.getElementById("mvpTeam").innerText="Team: "+mvp.team;
document.getElementById("mvpKills").innerText="Kills: "+mvp.kills;


// team ranking

let teams={};

players.forEach(p=>{

if(!teams[p.team]){

teams[p.team]=0;

}

teams[p.team]+=p.kills;

});


let table=document.getElementById("leaderboard");

for(let team in teams){

let row=table.insertRow();

row.insertCell(0).innerText=team;
row.insertCell(1).innerText=teams[team];

}