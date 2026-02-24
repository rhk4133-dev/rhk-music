document.addEventListener("DOMContentLoaded", function () {
    displayTeams();
    displayAdmin();
});

function registerTeam() {
    const teamName = document.getElementById("teamName").value;
    const leaderName = document.getElementById("leaderName").value;
    const youtubeName = document.getElementById("youtubeName").value;

    if (!teamName || !leaderName || !youtubeName) {
        alert("Please fill all fields");
        return;
    }

    const team = {
        id: Date.now(),
        teamName,
        leaderName,
        youtubeName,
        status: "Verification Pending"
    };

    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    teams.push(team);
    localStorage.setItem("teams", JSON.stringify(teams));

    document.getElementById("statusMessage").innerHTML =
        "✅ Registration Submitted! Status: Verification Pending";

    displayTeams();
}

function displayTeams() {
    const teamList = document.getElementById("teamList");
    if (!teamList) return;

    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    teamList.innerHTML = "";

    teams.forEach(team => {
        teamList.innerHTML += `
            <div class="team-card">
                <strong>${team.teamName}</strong><br>
                Leader: ${team.leaderName}<br>
                Status: <span style="color:yellow">${team.status}</span>
            </div>
        `;
    });
}

function displayAdmin() {
    const adminList = document.getElementById("adminList");
    if (!adminList) return;

    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    adminList.innerHTML = "";

    teams.forEach(team => {
        adminList.innerHTML += `
            <div class="team-card">
                <strong>${team.teamName}</strong><br>
                Leader: ${team.leaderName}<br>
                YouTube: ${team.youtubeName}<br>
                Status: ${team.status}<br><br>
                <button onclick="approveTeam(${team.id})">Approve</button>
                <button onclick="rejectTeam(${team.id})">Reject</button>
            </div>
        `;
    });
}

function approveTeam(id) {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    teams = teams.map(team =>
        team.id === id ? { ...team, status: "Approved ✅" } : team
    );
    localStorage.setItem("teams", JSON.stringify(teams));
    displayAdmin();
}

function rejectTeam(id) {
    let teams = JSON.parse(localStorage.getItem("teams")) || [];
    teams = teams.map(team =>
        team.id === id ? { ...team, status: "Rejected ❌" } : team
    );
    localStorage.setItem("teams", JSON.stringify(teams));
    displayAdmin();
}