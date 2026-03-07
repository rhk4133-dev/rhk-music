function showMatch(num){

document.getElementById("matchImg").src="match"+num+".png";

}


/* MATCH DATA */
/* update after every match */

const matches=[

{
"RHK GAMING":10,
"GAJAPADE":6,
"HIRIYUR":4,
"DON 9 9 9":5
},

{
"RHK GAMING":7,
"GAJAPADE":8,
"HIRIYUR":6,
"DON 9 9 9":3
}

];


/* CALCULATE TOTAL KILLS */

let totals={};

matches.forEach(match=>{

for(let team in match){

if(!totals[team]){

totals[team]=0;

}

totals[team]+=match[team];

}

});


/* SHOW LEADERBOARD */

let table=document.getElementById("leaderboard");

for(let team in totals){

let row=table.insertRow();

row.insertCell(0).innerText=team;
row.insertCell(1).innerText=totals[team];

}


/* MVP */

let topPlayer={
name:"Shadow",
team:"RHK GAMING",
kills:14
};

document.getElementById("mvpName").innerText="Player: "+topPlayer.name;
document.getElementById("mvpTeam").innerText="Team: "+topPlayer.team;
document.getElementById("mvpKills").innerText="Kills: "+topPlayer.kills;


/* UPDATE MESSAGE */

let nextMatch=matches.length+1;

if(nextMatch<=6){

document.getElementById("updateText").innerText=
"Updated leaderboard will publish after Match "+nextMatch;

}else{

document.getElementById("updateText").innerText=
"Final leaderboard";

}