let started=false;

function startShow(){

if(started) return;

started=true;

document.getElementById("music").play();

document.getElementById("message").style.opacity="1";

let teams=document.querySelectorAll(".team");

teams.forEach(function(team){
team.classList.add("dance");
});

}