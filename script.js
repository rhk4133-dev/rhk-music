document.addEventListener("DOMContentLoaded", function () {

const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeSection = document.getElementById("subscribeSection");
const registerSection = document.getElementById("registerSection");
const verification = document.getElementById("verification");
const bgMusic = document.getElementById("bgMusic");
const slots = document.getElementById("slots");
const players = document.getElementById("players");
const countdown = document.getElementById("countdown");
const musicToggle = document.getElementById("musicToggle");
const table = document.getElementById("sheetTable");

let totalSlots = 50;
let totalPlayers = 0;

// Home page logic
if(slots){
setInterval(() => {
if(totalSlots > 10){
totalSlots--;
totalPlayers += 4;
slots.textContent = totalSlots;
players.textContent = totalPlayers;
}
},4000);
}

if(countdown){
const eventDate = new Date("March 5, 2026 18:00:00").getTime();
setInterval(() => {
const now = new Date().getTime();
const distance = eventDate - now;
const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
countdown.textContent = days+"d "+hours+"h "+minutes+"m";
},1000);
}

subscribeBtn?.addEventListener("click", function () {

bgMusic.play().catch(()=>{});
verification.innerHTML="Verifying subscription...";

setTimeout(()=>{
verification.innerHTML="Subscription Verified ✔";

confetti({
particleCount:150,
spread:90,
origin:{y:0.6}
});

setTimeout(()=>{
subscribeSection.style.display="none";
registerSection.classList.remove("hidden");
},1500);

},2000);
});

musicToggle?.addEventListener("click", function(){
if(bgMusic.paused){
bgMusic.play();
musicToggle.innerHTML="🔊";
}else{
bgMusic.pause();
musicToggle.innerHTML="🔇";
}
});

// GOOGLE SHEET LIVE LOAD
if(table){
fetch("https://docs.google.com/spreadsheets/d/1r7OWpyEWbKJWLVGU19dW0Pv0sJJky4kAGGVxiMW_X2w/gviz/tq?tqx=out:csv")
.then(res=>res.text())
.then(data=>{
const rows=data.trim().split("\n");
rows.forEach((row,index)=>{
const tr=document.createElement("tr");
const cols=row.split(",");
cols.forEach(col=>{
const cell=document.createElement(index===0?"th":"td");
cell.textContent=col.replace(/"/g,"");
tr.appendChild(cell);
});
table.appendChild(tr);
});
})
.catch(err=>console.log("Sheet Error:",err));
}

});