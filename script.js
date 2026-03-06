const url = "https://docs.google.com/spreadsheets/d/1M75opM2LF3IDIqJE-_YTZsxpPFAcypdQxJIGJ3lUNFc/export?format=csv";

async function loadData(){

const res = await fetch(url);
const data = await res.text();

const rows = data.split("\n").slice(1);

let html="";

rows.forEach(r=>{

const c = r.split(",");

html += `
<tr>
<td>${c[0]}</td>
<td>${c[1]}</td>
<td>${c[2]}</td>
<td>${c[3]}</td>
<td>${c[4]}</td>
<td>${c[5]}</td>
<td>${c[6]}</td>
<td>${c[7]}</td>
</tr>
`;

});

document.getElementById("tableData").innerHTML = html;

}

loadData();
setInterval(loadData,5000);