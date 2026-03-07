// -------------------------------
// Match switching
// -------------------------------
function showMatch(num){
    let img = document.getElementById("matchImg");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = "match" + num + ".jpg";
        img.style.opacity = 1;
    }, 300);

    let progress = document.getElementById("progress");
    progress.style.width = (num/4*100) + "%";
}

// -------------------------------
// Leaderboard from Google Sheets
// -------------------------------

// Replace with your Google Sheet ID
const sheetID = "1SvK6L0Y2l7_p7sezjNSM_MNlnFqN7lsjg1LDdGjD8B0";
const sheetCSV = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv`;

fetch(sheetCSV)
.then(response => response.text())
.then(data => {
    const rows = data.split("\n").slice(1); // skip header
    const table = document.getElementById("leaderboard");

    while(table.rows.length > 1){
        table.deleteRow(1);
    }

    rows.forEach((row, i)=>{
        const cells = row.split(",");
        if(cells[0]){
            const r = table.insertRow();
            let rank = i==0?"🥇":i==1?"🥈":i==2?"🥉":i+1;
            r.insertCell(0).innerText = rank;
            r.insertCell(1).innerText = cells[0];
            r.insertCell(2).innerText = cells[1];
        }
    });
})
.catch(err=>console.log("Failed to load leaderboard from Google Sheet", err));

// -------------------------------
// Update leaderboard text
// -------------------------------
let nextMatch = 4; // manually update if needed
document.getElementById("updateText").innerText =
    nextMatch<=4 ? "Updated leaderboard will publish after Match " + nextMatch : "Final leaderboard published";