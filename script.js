// Match switch
function showMatch(num){
  let img=document.getElementById("matchImg");
  img.style.opacity=0;
  setTimeout(()=>{img.src="match"+num+".png"; img.style.opacity=1;},300);

  // Update progress bar
  let progress=document.getElementById("progress");
  progress.style.width=(num/6*100)+"%";
}

// You can manually edit MVP later
let mvp={
  name:"Shadow",
  team:"RHK GAMING",
  kills:12
};

document.getElementById("mvpName").innerText="Player: "+mvp.name;
document.getElementById("mvpTeam").innerText="Team: "+mvp.team;
document.getElementById("mvpKills").innerText="Kills: "+mvp.kills;

// You can manually edit leaderboard rows later
let updateText="Updated leaderboard will publish after Match 3";
document.getElementById("updateText").innerText=updateText;