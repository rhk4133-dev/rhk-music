
const sheetURL = "https://docs.google.com/spreadsheets/d/1r7OWpyEWbKJWLVGU19dW0Pv0sJJky4kAGGVxiMW_X2w/gviz/tq?tqx=out:csv";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

    const table = document.getElementById("leaderboardTable");
    if(!table) return;

    const rows = data.trim().split("\n");
    const headers = rows[0].split(",");

    let players = [];

    for(let i=1; i<rows.length; i++){
        const cols = rows[i].split(",");
        players.push({
            team: cols[0],
            kills: parseInt(cols[1]),
            points: parseInt(cols[2])
        });
    }

    // 🔥 Sort by points
    players.sort((a,b)=> b.points - a.points);

    // Create Header Row
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Rank</th>
        <th>${headers[0]}</th>
        <th>${headers[1]}</th>
        <th>${headers[2]}</th>
    `;
    table.appendChild(headerRow);

    // Add Rows
    players.forEach((player,index)=>{

        const tr = document.createElement("tr");

        // 🥇 Top 3 Highlight
        if(index === 0) tr.classList.add("gold");
        else if(index === 1) tr.classList.add("silver");
        else if(index === 2) tr.classList.add("bronze");

        tr.innerHTML = `
            <td>${index+1}</td>
            <td>${player.team}</td>
            <td>${player.kills}</td>
            <td>${player.points}</td>
        `;

        table.appendChild(tr);
    });

})
.catch(err => console.log("Error loading sheet:", err));