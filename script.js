document.addEventListener("DOMContentLoaded", function () {

const intro = document.getElementById("introScreen");
const main = document.getElementById("mainContent");
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeSection = document.getElementById("subscribeSection");
const registerSection = document.getElementById("registerSection");
const verification = document.getElementById("verification");

/* Show main after intro */
setTimeout(()=>{
main.classList.remove("hidden");
},3000);

/* 🔥 Fire Particle Animation */

const canvas=document.getElementById("fireCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:canvas.height,
size:Math.random()*4+1,
speed:Math.random()*2+1
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="orange";

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
p.y-=p.speed;
if(p.y<0){
p.y=canvas.height;
p.x=Math.random()*canvas.width;
}
});

requestAnimationFrame(animate);
}
animate();

/* 🔫 Deploy Click */

subscribeBtn.addEventListener("click", function () {

verification.innerHTML="Deploying Player...";

let audio=new Audio("https://www.soundjay.com/mechanical/sounds/mechanical-gunshot-01.mp3");
audio.play();

setTimeout(()=>{

verification.innerHTML="Elite Rank Unlocked ✔";

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
});

subscribeBtn.classList.remove("pulse");

setTimeout(()=>{
subscribeSection.style.display="none";
registerSection.classList.remove("hidden");
},1500);

},2000);

});

});