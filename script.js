const sheetURL = "https://docs.google.com/spreadsheets/d/1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc/pub?output=csv";

async function loadData(){

const res = await fetch(sheetURL);

const data = await res.text();

const rows = data.split("\n").slice(1);

let html = "";

rows.forEach(row=>{

const cols = row.split(",");

if(cols[0]){

html += `

<tr>

<td>${cols[0]}</td>

<td>${cols[1]}</td>

<td>${cols[2]}</td>

<td>${cols[3]}</td>

</tr>

`;

}

});

document.getElementById("tableData").innerHTML = html;

}

loadData();

setInterval(loadData,5000);