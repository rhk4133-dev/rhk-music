function showMatch(num){

document.getElementById("matchImg").src="match"+num+".png";

}


/* MATCH DATA (UPDATE AFTER EVERY MATCH) */

const matches=[

{
"RHK GAMING":10,
"GAJAPADE":6,
"HIRIYUR":4,
"DON 9 9 9":5,
"CHIKKAMAGALURU":3,
"TEAM NARACHI":2
},

{
"RHK GAMING":7,
"GAJAPADE":8,
"HIRIYUR":6,
"DON 9 9 9":3,
"CHIKKAMAGALURU":4,
"TEAM NARACHI":5
}

];


/* PLAYER DATA FOR MVP */

const players=[

{name:"Shadow",team:"RHK GAMING",kills:12},
{name:"Blaze",team:"GAJAPADE",kills:9},
{name:"Ghost",team:"HIRIYUR",kills:7}

];


/* MVP CALCULATION */

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

let totals={};

matches.forEach(match=>{

for(let team in match){

if(!totals[team]){

totals[team]=0;

}

totals[team]+=match[team];

}

});


let table=document.getElementById("leaderboard");

for(let team in totals){

let row=table.insertRow();

row.insertCell(0).innerText=team;
row.insertCell(1).innerText=totals[team];

}


/* UPDATE MESSAGE */

let nextMatch=matches.length+1;

if(nextMatch<=6){

document.getElementById("updateText").innerText=
"Updated leaderboard will publish after Match "+nextMatch;

}else{

document.getElementById("updateText").innerText=
"Final leaderboard published";

}