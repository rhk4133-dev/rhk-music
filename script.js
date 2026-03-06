const sheetID = "1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc";

const url = `https://opensheet.elk.sh/${sheetID}/Sheet1`;

fetch(url)
.then(res => res.json())
.then(data => {

let table = document.getElementById("table-body");

data.sort((a,b)=> b.Kills - a.Kills);

data.forEach((row,index)=>{

let tr = document.createElement("tr");

if(index==0) tr.classList.add("rank1");
if(index==1) tr.classList.add("rank2");
if(index==2) tr.classList.add("rank3");

tr.innerHTML = `
<td>${index+1}</td>
<td>${row.Team}</td>
<td>${row.Player}</td>
<td class="kill">${row.Kills}</td>
`;

table.appendChild(tr);

});

});