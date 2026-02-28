// Join button
function joinNow() {
    alert("Entry Successful! Entry Fee ₹0");
}

// Admin login
function checkAdmin() {
    const pass = document.getElementById("adminPass").value;
    if(pass === "divine123") {
        document.getElementById("adminContent").style.display = "block";
    } else {
        alert("Wrong Password");
    }
}

// Load Google Sheet
fetch("https://docs.google.com/spreadsheets/d/1r7OWpyEWbKJWLVGU19dW0Pv0sJJky4kAGGVxiMW_X2w/gviz/tq?tqx=out:csv")
.then(res => res.text())
.then(data => {

    const table = document.getElementById("leaderboardTable");
    if(!table) return;

    const rows = data.trim().split("\n").map(row => row.split(","));

    const header = rows.shift();

    rows.sort((a,b) => parseInt(b[3]) - parseInt(a[3])); // Sort by Points column

    const thead = document.createElement("tr");
    thead.innerHTML = "<th>Rank</th>" + header.map(h => `<th>${h}</th>`).join("");
    table.appendChild(thead);

    rows.forEach((row,index) => {

        const tr = document.createElement("tr");

        if(index === 0) tr.classList.add("gold");
        if(index === 1) tr.classList.add("silver");
        if(index === 2) tr.classList.add("bronze");

        tr.innerHTML = `<td>${index+1}</td>` + 
            row.map(col => `<td>${col.replace(/"/g,"")}</td>`).join("");

        table.appendChild(tr);
    });

});