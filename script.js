const sheetURL =
"https://docs.google.com/spreadsheets/d/1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc/export?format=csv";

async function loadTeams(){

const response = await fetch(sheetURL);
const data = await response.text();

const rows = data.split("\n").slice(1);

const container = document.getElementById("teams");
container.innerHTML = "";

rows.forEach(row => {

const cols = row.split(",");

const teamName = cols[0];
const p1 = cols[1];
const p2 = cols[2];
const p3 = cols[3];
const p4 = cols[4];

const teamCard = `
<div class="team">
<h3>${teamName}</h3>

<div class="players">
🎮 ${p1}<br>
🎮 ${p2}<br>
🎮 ${p3}<br>
🎮 ${p4}
</div>

</div>
`;

container.innerHTML += teamCard;

});

}

loadTeams();