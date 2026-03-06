const sheetID = "1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc";

const url = `https://opensheet.elk.sh/${sheetID}/Sheet1`;

fetch(url)
.then(res => res.json())
.then(data => {

let players = [];

data.forEach(row => {

let totalKills =
Number(row.M1 || 0) +
Number(row.M2 || 0) +
Number(row.M3 || 0) +
Number(row.M4 || 0) +
Number(row.M5 || 0) +
Number(row.M6 || 0);

players.push({
player: row.Player,
team: row.Team,
kills: totalKills
});

});

players.sort((a,b) => b.kills - a.kills);

let html = "";

players.forEach((p,i)=>{

html += `
<div class="playerCard">
<div class="rank">${i+1}</div>
<div class="playerInfo">
<div class="playerName">${p.player}</div>
<div class="teamName">${p.team}</div>
</div>
<div class="kills">⭐ ${p.kills}</div>
</div>
`;

});

document.getElementById("leaderboard").innerHTML = html;

});