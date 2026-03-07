let started = false;

document.body.addEventListener("click", function(){

if(!started){

let music = document.getElementById("music");
music.play();

let teams = document.querySelectorAll(".team");

teams.forEach(function(team){
team.classList.add("animate");
});

started = true;

}

});