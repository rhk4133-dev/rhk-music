fetch("https://docs.google.com/spreadsheets/d/1r7OWpyEWbKJWLVGU19dW0Pv0sJJky4kAGGVxiMW_X2w/gviz/tq?tqx=out:csv")
.then(response => response.text())
.then(data => {

    const table = document.getElementById("sheetTable");
    if (!table) return;

    const rows = data.trim().split("\n").map(row => row.split(","));

    const headers = rows[0];
    const body = rows.slice(1);

    // Find Points column index
    const pointsIndex = headers.findIndex(h => h.toLowerCase().includes("point"));

    // Sort by Points descending
    body.sort((a, b) => {
        return parseInt(b[pointsIndex]) - parseInt(a[pointsIndex]);
    });

    // Clear table
    table.innerHTML = "";

    // Create Header
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Rank</th>";
    headers.forEach(h => {
        headerRow.innerHTML += `<th>${h.replace(/"/g, "")}</th>`;
    });
    table.appendChild(headerRow);

    // Add Sorted Data
    body.forEach((row, index) => {

        const tr = document.createElement("tr");

        // Rank Number
        tr.innerHTML = `<td>${index + 1}</td>`;

        row.forEach(cell => {
            tr.innerHTML += `<td>${cell.replace(/"/g, "")}</td>`;
        });

        // Highlight Top 3
        if (index === 0) tr.classList.add("gold");
        if (index === 1) tr.classList.add("silver");
        if (index === 2) tr.classList.add("bronze");

        table.appendChild(tr);
    });

})
.catch(error => console.log("Error loading sheet:", error));