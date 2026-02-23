var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1LAhLPELqlfM_I8Lz8ChMqywjWcLoS-jge4PO6eAeruc/edit?usp=sharing";

window.onload = function() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        simpleSheet: true,
        callback: showTeams
    });
};

function showTeams(data, tabletop) {
    var container = document.getElementById("teamsList");
    container.innerHTML = "";

    if(data.length === 0) {
        container.innerHTML = "No teams registered yet.";
        return;
    }

    data.forEach(team => {
        var div = document.createElement("div");
        div.className = "teamBox";
        div.innerHTML = `
            <strong>Team: ${team['Team Name']}</strong><br>
            Player 1: ${team['Player 1 Name']}<br>
            Player 2: ${team['Player 2 Name']}<br>
            Player 3: ${team['Player 3 Name']}<br>
            Player 4: ${team['Player 4 Name']}<br>
            Leader Mobile: ${team['Squad Leader Mobile Number']}
        `;
        container.appendChild(div);
    });
}