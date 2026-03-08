// Entrance Page
function enterTournament(){
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("mainPage").style.display="block";
}

// Match Switching
function showMatch(num){
    let img=document.getElementById("matchImg");
    img.style.opacity=0;
    setTimeout(()=>{
        img.src="match"+num+".jpg";
        img.style.opacity=1;
    },300);

    const updateText=document.getElementById("updateText");
    updateText.innerText = num<4 ? `Updated leaderboard will publish after Match ${num}` : "Final leaderboard published";

    // Reload leaderboard
    updateLeaderboard();
}

// Google Sheet Leaderboard
const sheetID="1SvK6L0Y2l7_p7sezjNSM_MNlnFqN7lsjg1LDdGjD8B0";
const sheetCSV=`https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv`;

function updateLeaderboard(){
    const table=document.getElementById("leaderboard");
    table.style.opacity=0;
    fetch(sheetCSV)
    .then(res=>res.text())
    .then(data=>{
        const rows=data.split("\n").slice(1);

        // Clear previous
        while(table.rows.length>1) table.deleteRow(1);

        // Sort rows by kills descending
        let teams=[];
        rows.forEach(row=>{
            const cells=row.split(",");
            if(cells[0]){
                teams.push({name:cells[0], kills:parseInt(cells[1])||0});
            }
        });
        teams.sort((a,b)=>b.kills-a.kills);

        teams.forEach((team,i)=>{
            const r=table.insertRow();
            r.insertCell(0).innerText=i==0?"🥇":i==1?"🥈":i==2?"🥉":i+1;
            r.insertCell(1).innerText=team.name;
            r.insertCell(2).innerText=team.kills;
        });
        table.style.opacity=1;
    })
    .catch(err=>console.log("Failed to load leaderboard",err));
}

// Initial load
updateLeaderboard();