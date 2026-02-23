document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const teamName = document.getElementById("teamName").value;
    const inputs = document.querySelectorAll(".member input");

    let members = [];

    for (let i = 0; i < inputs.length; i += 2) {
        members.push({
            name: inputs[i].value,
            id: inputs[i + 1].value
        });
    }

    const teamData = {
        teamName: teamName,
        members: members
    };

    let teams = JSON.parse(localStorage.getItem("divineTeams")) || [];
    teams.push(teamData);

    localStorage.setItem("divineTeams", JSON.stringify(teams));

    document.getElementById("successMessage").innerText = 
        "Team Registered Successfully!";

    document.getElementById("registrationForm").reset();
});