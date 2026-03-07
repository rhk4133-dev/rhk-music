// -------------------------------
// Match switching (unchanged)
// -------------------------------
function showMatch(num){
    let img = document.getElementById("matchImg");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = "match" + num + ".png";
        img.style.opacity = 1;
    }, 300);

    // Update progress bar
    let progress = document.getElementById("progress");
    progress.style.width = (num / 6 * 100) + "%";
}

// -------------------------------
// MVP Card (editable manually)
// -------------------------------
let mvp = {
    name: "Shadow",
    team: "RHK GAMING",
    kills: 12
};

document.getElementById("mvpName").innerText = "Player: " + mvp.name;
document.getElementById("mvpTeam").innerText = "Team: " + mvp.team;
document.getElementById("mvpKills").innerText = "Kills: " + mvp.kills;

// -------------------------------
// Leaderboard from Google Sheets
// -------------------------------

// Google Sheet ID from your link
const sheetID = "1SvK6L0Y2l7_p7sezjNSM_MNlnFqN7lsjg1LDdGjD8B0";
const sheetCSV = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv`;

fetch(sheetCSV)
.then(response => response.text())
.then(data => {
    const rows = data.split("\n").slice(1); // skip header
    const table = document.getElementById("leaderboard");

    // Clear old rows except header
    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    rows.forEach((row, i) => {
        const cells = row.split(",");
        if(cells[0]){ // avoid empty rows
            const r = table.insertRow();
            // Medals for top 3
            let rank = i==0?"🥇":i==1?"🥈":i==2?"🥉":i+1;
            r.insertCell(0).innerText = rank;       // Rank
            r.insertCell(1).innerText = cells[0];   // Team Name
            r.insertCell(2).innerText = cells[1];   // Total Kills
        }
    });
})
.catch(err => console.log("Failed to load leaderboard from Google Sheet", err));

// -------------------------------
// Leaderboard update text
// -------------------------------
let nextMatch = 3; // manually change after each match
document.getElementById("updateText").innerText =
    nextMatch <= 6 ? "Updated leaderboard will publish after Match " + nextMatch : "Final leaderboard published";