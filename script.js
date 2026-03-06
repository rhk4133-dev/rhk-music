const sheetID = "1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc";

const url = `https://opensheet.elk.sh/${sheetID}/Sheet1`;

fetch(url)
.then(res=>res.json())
.then(data=>{

let teams=[];

data.forEach(row=>{

teams.push({
team:row["TEAM NAME"],
kills:Number(row["TOTAL"])
});

});

teams.sort((a,b)=>b.kills-a.kills);

let html="";

teams.forEach((t,i)=>{

html+=`
<div class="teamCard">
<div class="rank">#${i+1}</div>
<div class="teamName">${t.team}</div>
<div class="kills">🔥 ${t.kills}</div>
</div>
`;

});

document.getElementById("leaderboard").innerHTML=html;

});