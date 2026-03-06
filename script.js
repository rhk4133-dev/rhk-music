const sheetURL = "https://opensheet.elk.sh/1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc/Sheet1";

let data = [];

fetch(sheetURL)
.then(res => res.json())
.then(json => {
data = json;
loadMatch(1);
});

function loadMatch(match){

let teams = {};

data.forEach(player => {

let team = player.TEAM;
let kills = parseInt(player["M"+match]) || 0;

if(!teams[team]) teams[team] = 0;

teams[team] += kills;

});

let ranking = Object.entries(teams)
.sort((a,b)=>b[1]-a[1]);

let table = document.querySelector("#leaderboard tbody");
table.innerHTML="";

ranking.forEach((team,i)=>{

let row = `
<tr>
<td>${i+1}</td>
<td>${team[0]}</td>
<td>${team[1]}</td>
</tr>
`;

table.innerHTML += row;

});

}