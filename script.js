// ================================
// DIVINE ESPORTS PRO LEADERBOARD
// Owner: Raghav HK
// ================================

const sheetURL = "https://docs.google.com/spreadsheets/d/1r7OWpyEWbKJWLVGU19dW0Pv0sJJky4kAGGVxiMW_X2w/gviz/tq?tqx=out:csv";

const table = document.getElementById("leaderboardTable");

if (table) {

    // Show loading message
    table.innerHTML = `
        <tr>
            <th colspan="5" style="padding:20px;">
                🔄 Loading Leaderboard...
            </th>
        </tr>
    `;

    fetch(sheetURL)
        .then(response => response.text())
        .then(data => {

            const rows = data.trim().split("\n").map(row => row.split(","));

            if (rows.length <= 1) {
                table.innerHTML = `
                    <tr>
                        <th>No Data Found</th>
                    </tr>
                `;
                return;
            }

            const headers = rows[0].map(h => h.replace(/"/g, "").trim());
            const teams = rows.slice(1);

            // Sort by last column (Points)
            teams.sort((a, b) => {
                const pointsA = parseInt(a[a.length - 1]) || 0;
                const pointsB = parseInt(b[b.length - 1]) || 0;
                return pointsB - pointsA;
            });

            table.innerHTML = "";

            // Create Header Row
            let headerRow = "<tr><th>Rank</th>";

            headers.forEach(header => {
                headerRow += `<th>${header}</th>`;
            });

            headerRow += "</tr>";
            table.innerHTML += headerRow;

            // Create Team Rows
            teams.forEach((team, index) => {

                let rowClass = "";

                if (index === 0) rowClass = "gold";
                else if (index === 1) rowClass = "silver";
                else if (index === 2) rowClass = "bronze";

                let rowHTML = `<tr class="${rowClass}">`;

                // Rank column
                rowHTML += `<td>${index + 1}</td>`;

                team.forEach(col => {
                    rowHTML += `<td>${col.replace(/"/g, "").trim()}</td>`;
                });

                rowHTML += "</tr>";

                table.innerHTML += rowHTML;
            });

        })
        .catch(error => {
            table.innerHTML = `
                <tr>
                    <th colspan="5" style="color:red; padding:20px;">
                        ❌ Failed to load Google Sheet
                    </th>
                </tr>
            `;
            console.error("Sheet Load Error:", error);
        });

}