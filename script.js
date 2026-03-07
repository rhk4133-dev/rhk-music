function showMatch(num){

document.getElementById("matchImg").src="match"+num+".png";

}


/* PLAYER DATA (edit after matches) */

let players=[

{name:"Player1",team:"RHK GAMING",kills:12},
{name:"Player2",team:"GAJAPADE",kills:9},
{name:"Player3",team:"HIRIYUR",kills:7},
{name:"Player4",team:"DON 9 9 9",kills:8}

];


/* MVP calculation */

let mvp=players[0];

players.forEach(p=>{

if(p.kills>mvp.kills){

mvp=p;

}

});

document.getElementById("mvpName").innerText="Player: "+mvp.name;
document.getElementById("mvpTeam").innerText="Team: "+mvp.team;
document.getElementById("mvpKills").innerText="Kills: "+mvp.kills;


/* TEAM TOTALS */

let teamTotals={};

players.forEach(p=>{

if(!teamTotals[p.team]){

teamTotals[p.team]=0;

}

teamTotals[p.team]+=p.kills;

});


let table=document.getElementById("leaderboard");

for(let team in teamTotals){

let row=table.insertRow();

row.insertCell(0).innerText=team;
row.insertCell(1).innerText=teamTotals[team];

}