// Replace this with your Google Sheet URL (the one linked to your Form)
var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1LAhLPELqlfM_I8Lz8ChMqywjWcLoS-jge4PO6eAeruc/edit?usp=sharing";

// Load Tabletop and fetch sheet data
window.onload = function() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        simpleSheet: true,
        callback: showTeams
    });
};

// Function to display teams on the website
function showTeams(data, tabletop) {
    var container = document.getElementById("teamsList");
    container.innerHTML = ""; // Clear existing content

    if (data.length === 0) {
        container.innerHTML = "No teams registered yet.";
        return;
    }

    data.forEach(team => {
        // Create a card for each team
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